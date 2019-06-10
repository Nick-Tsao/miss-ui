<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-tabs v-model="active">
        <ms-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ms-tabs @scroll="onScroll">
        <ms-tab
          v-for="index in 8"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <ms-tabs @disabled="onClickDisabled">
        <ms-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <ms-tabs type="card">
        <ms-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <ms-tabs @click="onClick">
        <ms-tab
          v-for="index in 2"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <ms-tabs
        :active="active"
        sticky
      >
        <ms-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title7')">
      <ms-tabs :active="active">
        <ms-tab
          v-for="index in 2"
          :key="index"
        >
          <div slot="title">
            <ms-icon name="more-o" />{{ $t('tab') }}
          </div>
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <ms-tabs
        animated
      >
        <ms-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <ms-tabs
        :active="active"
        swipeable
      >
        <ms-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </ms-tab>
      </ms-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled'
    }
  },

  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    },

    onScroll(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;

  .ms-tab .ms-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .ms-tab__pane {
    background-color: @white;
    padding: 20px;
  }

  .ms-tabs--card .ms-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .ms-tab-active {
    color: #20a0ff;
  }

  .custom-tabwrap .ms-tabs-nav-bar {
    background: #20a0ff;
  }

  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .ms-doc-demo-block:last-child {
    .ms-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>
