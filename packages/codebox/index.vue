<template>
  <div class="ms-codebox-wrapper">
    <div
      class="ms-codebox"
      @click="focus"
    >
      <template v-if="maxlength > 0">
        <span
          v-for="i in num"
          :key="i"
          class="ms-hairline--bottom"
          :class="[
            'ms-codebox-box',
            (i === code.length + 1) && focused && 'is-active',
            code.charAt(i-1) !== '' && 'is-filled'
          ]"
        >
          {{ code.charAt(i-1) }}
        </span>
      </template>
      <template v-else>
        <input
          type="text"
          :maxlength="maxlength"
          :value="code"
          readonly
          disabled
          :class="['ms-codebox-holder', focused && 'is-active']"
        >
      </template>
    </div>
    <form
      action=""
      v-show="system"
      @submit="onSubmit"
    >
      <input
        :value="code"
        :maxlength="maxlength"
        @input="onInputChange"
        ref="input"
        class="ms-codebox-input"
      >
    </form>
    <ms-number-keyboard
      v-show="!system"
      :show="focused"
      :theme="theme"
      :extra-key="extraKey"
      :close-button-text="closeButtonText"
      @input="onInputKeyboard"
      @delete="onDelete"
      @blur="focused = false"
      @close="onConfirm"
    />
  </div>
</template>

<script>
import create from '../utils/create';
import NumberKeyboard from '../number-keyboard';

export default create({
  name: 'codebox',
  components: {
    [NumberKeyboard.name]: NumberKeyboard,
  },
  props: {
    maxlength: {
      type: [Number, String],
      default: '4',
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    system: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'default'
    },
    closeButtonText: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      code: '',
      focused: this.autofocus,
    };
  },
  watch: {
    value: {
      imediate: true,
      handler(val) {
        if (val !== this.code) {
          this.code = val;
        }
      }
    },
  },
  computed: {
    num() {
      return Math.abs(parseInt(this.maxlength, 10)) || 1;
    }
  },
  mounted() {
    if (this.closable) {
      document.addEventListener('touchstart', this.handleOutClick);
    }
  },
  beforeDestroy() {
    if (this.closable) {
      document.removeEventListener('touchstart', this.handleOutClick);
    }
    if (this.focused) {
      this.blur();
    }
  },
  methods: {
    handleOutClick(e) {
      if (this.$el.contains(e.target)) {
        this.focused = false;
      }
    },
    onInputChange(e) {
      if (this.maxlength < 0 || e.target.value.length <= this.maxlength) {
        this.code = e.target.value;
      }
      if (this.code.length === this.maxlength) {
        this.$emit('submit', this.code);
      }
      this.$emit('input', this.code);
    },
    onInputKeyboard(val) {
      if (this.maxlength < 0 || this.code.length < this.maxlength) {
        this.code += val;
      }
      this.$emit('input', this.code);
    },
    onDelete() {
      this.code = this.code.slice(0, this.code.length - 1);
      this.$emit('input', this.code);
    },
    onConfirm() {
      if (this.closeButtonText) {
        this.$emit('submit', this.code);
      }
    },
    onSubmit(e) {
      console.log('onSUBMIT');
      e.preventDefault();
      this.$emit('submit', this.code);
    },
    blur() {
      this.focused = false;
      if (this.system) {
        this.$refs.input.blur();
      }
    },
    focus() {
      this.focused = true;
      if (this.system) {
        this.$refs.input.focus();
      }
    }
  }
});
</script>
