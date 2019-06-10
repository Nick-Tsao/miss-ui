<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-cell-group>
        <ms-cell
          :title="$t('cell')"
          :value="$t('content')"
        />
        <ms-cell
          :title="$t('cell')"
          :value="$t('content')"
          :label="$t('desc')"
        />
      </ms-cell-group>
    </demo-block>

    <demo-block :title="$t('largeSize')">
      <ms-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
      />
      <ms-cell
        :title="$t('cell')"
        :value="$t('content')"
        size="large"
        :label="$t('desc')"
      />
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <ms-cell
        :title="$t('cell')"
        :value="$t('content')"
        icon="location-o"
      />
    </demo-block>

    <demo-block :title="$t('valueOnly')">
      <ms-cell :value="$t('content')" />
    </demo-block>

    <demo-block :title="$t('showArrow')">
      <ms-cell
        :title="$t('cell')"
        is-link
      />
      <ms-cell
        :title="$t('cell')"
        is-link
        :value="$t('content')"
      />
      <ms-cell
        :title="$t('cell')"
        is-link
        arrow-direction="down"
        :value="$t('content')"
      />
    </demo-block>

    <demo-block :title="$t('router')">
      <ms-cell
        :title="$t('cell')"
        is-link
        url="//keepmissing.com/mobile.html"
      />
      <ms-cell
        :title="$t('cell')"
        is-link
        to="index"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ms-cell
        :value="$t('content')"
        icon="shop-o"
        is-link
      >
        <template slot="title">
          <span class="custom-text">{{ $t('cell') }}</span>
          <ms-tag type="danger">{{ $t('tag') }}</ms-tag>
        </template>
      </ms-cell>
      <ms-cell
        :title="$t('cell')"
        icon="location-o"
        is-link
      />
      <ms-cell :title="$t('cell')">
        <ms-icon
          slot="right-icon"
          name="search"
          class="custom-icon"
        />
      </ms-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      router: '页面跳转'
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      router: 'Router'
    }
  }
};
</script>

<style lang="less">
.demo-cell {
  .custom-text {
    margin-right: 5px;
    vertical-align: middle;
  }

  .custom-icon {
    line-height: 24px;
  }
}
</style>
