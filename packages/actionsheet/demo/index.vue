<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-button @click="show1 = true">{{ $t('button1') }}</ms-button>
      <ms-actionsheet
        v-model="show1"
        :actions="actions"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <ms-button @click="show2 = true">{{ $t('button2') }}</ms-button>
      <ms-actionsheet
        v-model="show2"
        :actions="actions"
        :cancel-text="$t('cancel')"
        @cancel="onCancel"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <ms-button @click="show3 = true">{{ $t('button3') }}</ms-button>
      <ms-actionsheet
        v-model="show3"
        :title="$t('title')"
      >
        <p>{{ $t('content') }}</p>
      </ms-actionsheet>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      button1: '弹出 Actionsheet',
      button2: '弹出带取消按钮的 Actionsheet',
      button3: '弹出带标题的 Actionsheet',
      title2: '带取消按钮的 Actionsheet',
      title3: '带标题的 Actionsheet',
      description: '描述信息',
      disabledOption: '禁用选项'
    },
    'en-US': {
      button1: 'Show Actionsheet',
      button2: 'Show Actionsheet with cancel button',
      button3: 'Show Actionsheet with title',
      title2: 'Actionsheet with cancel button',
      title3: 'Actionsheet with title',
      description: 'Description',
      disabledOption: 'Disabled Option'
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },

  computed: {
    actions() {
      return [
        { name: this.$t('option') },
        { name: this.$t('option'), subname: this.$t('description') },
        { loading: true },
        { name: this.$t('disabledOption'), disabled: true }
      ];
    }
  },

  methods: {
    onSelect(item) {
      this.show1 = false;
      this.show2 = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    }
  }
};
</script>

<style lang="less">
.demo-actionsheet {
  .ms-button {
    margin-left: 15px;
  }

  p {
    padding: 20px;
  }
}
</style>
