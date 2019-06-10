<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-tag>{{ $t('tag') }}</ms-tag>
      <ms-tag type="danger">{{ $t('tag') }}</ms-tag>
      <ms-tag type="primary">{{ $t('tag') }}</ms-tag>
      <ms-tag type="success">{{ $t('tag') }}</ms-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <ms-tag plain>{{ $t('tag') }}</ms-tag>
      <ms-tag
        round
        plain
        type="danger"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        round
        plain
        type="primary"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        plain
        type="success"
      >
        {{ $t('tag') }}
      </ms-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <ms-tag round>{{ $t('tag') }}</ms-tag>
      <ms-tag
        round
        type="danger"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        round
        type="primary"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        round
        type="success"
      >
        {{ $t('tag') }}
      </ms-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <ms-tag mark>{{ $t('tag') }}</ms-tag>
      <ms-tag
        mark
        type="danger"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        mark
        type="primary"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        mark
        type="success"
      >
        {{ $t('tag') }}
      </ms-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <ms-tag color="#f2826a">{{ $t('tag') }}</ms-tag>
      <ms-tag
        color="#f2826a"
        plain
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag color="#7232dd">{{ $t('tag') }}</ms-tag>
      <ms-tag
        color="#7232dd"
        plain
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        color="#ffe1e1"
        text-color="#ad0000"
      >
        {{ $t('tag') }}
      </ms-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <ms-tag type="danger">{{ $t('tag') }}</ms-tag>
      <ms-tag
        type="danger"
        size="medium"
      >
        {{ $t('tag') }}
      </ms-tag>
      <ms-tag
        type="danger"
        size="large"
      >
        {{ $t('tag') }}
      </ms-tag>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  }
};
</script>

<style lang="less">
.demo-tag {
  .ms-tag + .ms-tag {
    margin-left: 10px;
  }

  .ms-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
