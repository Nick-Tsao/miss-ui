<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <ms-button type="primary">{{ $t('primary') }}</ms-button>
        <ms-button type="danger">{{ $t('danger') }}</ms-button>
      </div>
      <ms-button type="default">{{ $t('default') }}</ms-button>
      <ms-button type="warning">{{ $t('warning') }}</ms-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <ms-button
        plain
        type="primary"
      >
        {{ $t('plain') }}
      </ms-button>
      <ms-button
        plain
        type="danger"
      >
        {{ $t('plain') }}
      </ms-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ms-button
        disabled
        type="primary"
      >
        {{ $t('disabled') }}
      </ms-button>
      <ms-button
        disabled
        type="danger"
      >
        {{ $t('disabled') }}
      </ms-button>
    </demo-block>

    <demo-block :title="$t('loading')">
      <ms-button
        loading
        type="primary"
      />
      <ms-button
        loading
        type="danger"
      />
    </demo-block>

    <demo-block :title="$t('shape')">
      <ms-button
        type="primary"
        square
      >
        {{ $t('square') }}
      </ms-button>
      <ms-button
        type="danger"
        round
      >
        {{ $t('round') }}
      </ms-button>
    </demo-block>

    <demo-block :title="$t('size')">
      <ms-button size="large">{{ $t('large') }}</ms-button>
      <ms-button size="normal">{{ $t('normal') }}</ms-button>
      <ms-button size="small">{{ $t('small') }}</ms-button>
      <ms-button size="mini">{{ $t('mini') }}</ms-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round'
    }
  }
};
</script>

<style lang="less">
.demo-button {
  .ms-button {
    user-select: none;

    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }

    .ms-loading {
      margin: 0 18px;
    }
  }

  .ms-doc-demo-block {
    padding: 0 15px;
  }

  .ms-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
