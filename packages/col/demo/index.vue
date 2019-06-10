<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-row>
        <ms-col span="8">span: 8</ms-col>
        <ms-col span="8">span: 8</ms-col>
        <ms-col span="8">span: 8</ms-col>
      </ms-row>

      <ms-row>
        <ms-col span="4">span: 4</ms-col>
        <ms-col
          span="10"
          offset="4"
        >
          offset: 4, span: 10
        </ms-col>
      </ms-row>

      <ms-row>
        <ms-col
          offset="12"
          span="12"
        >
          offset: 12, span: 12
        </ms-col>
      </ms-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ms-row gutter="20">
        <ms-col span="8">span: 8</ms-col>
        <ms-col span="8">span: 8</ms-col>
        <ms-col span="8">span: 8</ms-col>
      </ms-row>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ms-row type="flex">
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
      </ms-row>

      <ms-row
        type="flex"
        justify="center"
      >
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
      </ms-row>

      <ms-row
        type="flex"
        justify="end"
      >
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
      </ms-row>

      <ms-row
        type="flex"
        justify="space-between"
      >
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
      </ms-row>

      <ms-row
        type="flex"
        justify="space-around"
      >
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
        <ms-col span="6">span: 6</ms-col>
      </ms-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局'
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  .ms-doc-demo-block {
    padding: 0 15px;
  }

  .ms-doc-demo-block__title {
    padding-left: 0;
  }

  .ms-col {
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
