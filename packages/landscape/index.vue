<template>
  <div
    class="ms-landscape"
    :class="{'is-full': fullScreen}"
  >
    <ms-popup
      v-model="isLandscapeShow"
      :close-on-click-overlay="closeOnClickOverlay"
      :overlay="overlay"
      :position="position"
      @input="$emit('input', false)"
    >
      <div class="ms-landscape-body">
        <div class="ms-landscape-content">
          <slot />
        </div>
        <ms-icon
          class="ms-landscape-close"
          @click="close"
          :name="fullScreen ? 'clear' : 'close'"
        />
      </div>
    </ms-popup>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'landscape',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLandscapeShow: this.value,
    };
  },
  methods: {
    close() {
      this.isLandscapeShow = false;
    },
  },
  watch: {
    value(val) {
      this.isLandscapeShow = val;
      if (val) {
        this.$emit('show');
      } else {
        this.$emit('hide');
      }
    }
  },
});
</script>
