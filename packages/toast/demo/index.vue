<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <ms-button @click="$toast($t('text'))">{{ $t('title1') }}</ms-button>
      <ms-button @click="$toast($t('longText'))">{{ $t('longTextButton') }}</ms-button>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ms-button @click="showLoadingToast">{{ $t('title2') }}</ms-button>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ms-button @click="showSuccessToast">{{ $t('success') }}</ms-button>
      <ms-button @click="showFailToast">{{ $t('fail') }}</ms-button>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ms-button @click="showCustomizedToast">{{ $t('advancedUsage') }}</ms-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      loading: '加载中',
      title1: '文字提示',
      title2: '加载提示',
      title3: '成功/失败提示',
      success: '成功提示',
      fail: '失败提示',
      text: '提示内容',
      longText: '这是一条长文字提示，超过一定字数就会换行',
      text2: '成功文案',
      text3: '失败文案',
      text4: second => `倒计时 ${second} 秒`,
      longTextButton: '长文字提示'
    },
    'en-US': {
      title1: 'Text',
      title2: 'Loading',
      title3: 'Success/Fail',
      success: 'Success',
      fail: 'Fail',
      text: 'Some messages',
      longText: 'This is a long message, text will wrap when over a certain length',
      text2: 'Success',
      text3: 'Fail',
      text4: second => `${second} seconds`,
      longTextButton: 'Long Text'
    }
  },

  methods: {
    showLoadingToast() {
      this.$toast.loading({ mask: true, message: this.$t('loading') + '...' });
    },

    showSuccessToast() {
      this.$toast.success(this.$t('text2'));
    },

    showFailToast() {
      this.$toast.fail(this.$t('text3'));
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: this.$t('text4', 3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.$t('text4', second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less">
.demo-toast {
  .ms-button {
    margin-left: 15px;
  }
}
</style>
