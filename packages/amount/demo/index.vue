<template>
  <demo-section background="white">
    <demo-block
      :title="$t('basicUsage')"
    >
      <div class="demp-block">
        <span class="describe">Original</span>
        <ms-amount
          :value="1234.125"
          :precision="3"
        />
      </div>
      <div class="demp-block">
        <span class="describe">Round</span>
        <ms-amount
          :value="1234.125"
        />
      </div>
      <div class="demp-block">
        <span class="describe">Floor</span>
        <ms-amount
          :value="1234.123"
          :is-round-up="false"
        />
      </div>
    </demo-block>
    <demo-block
      title="千位分隔符"
    >
      <div class="demp-block">
        <ms-amount
          class="demp-block"
          :value="123456789"
          has-separator
        />
      </div>
    </demo-block>
    <demo-block
      title="大写中文"
    >
      <div class="demp-block">
        <ms-amount
          class="demp-block"
          :value="1234"
          is-capital
        />
      </div>
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
.demp-block {
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  .describe {
    font-size: 12px;
    font-weight: normal;
  }
}
</style>
