<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-badge-group
        :active-key="activeKey"
        @change="onChange"
      >
        <ms-badge :title="$t('title')" />
        <ms-badge
          :title="$t('title')"
          info="8"
        />
        <ms-badge
          :title="$t('title')"
          info="99"
        />
        <ms-badge
          :title="$t('title')"
          info="99+"
        />
      </ms-badge-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称'
    }
  },

  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  .ms-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: @white;

    &::after {
      display: none;
    }
  }

  .ms-badge {
    width: 85px;
    margin: 0 auto;
  }
}
</style>
