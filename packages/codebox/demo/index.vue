<template>
  <demo-section background="white">
    <demo-block
      :title="$t('basicUsage')"
      class="demp-block-padding"
    >
      <ms-codebox
        v-model="code"
        :maxlength="6"
        autofocus
        extra-key="."
        theme="custom"
        close-button-text="完成"
        @submit="subimt"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      code: ''
    };
  },
  methods: {
    subimt(val) {
      this.$toast(val);
    }
  }
};
</script>

<style lang="less">
  .demp-block-padding {
    box-sizing: border-box;
    padding: 0 20px;
  }
</style>
