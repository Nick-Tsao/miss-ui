<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-tabbar v-model="active">
        <ms-tabbar-item icon="home-o">{{ $t('tab') }}</ms-tabbar-item>
        <ms-tabbar-item
          icon="search"
          dot
        >
          {{ $t('tab') }}
        </ms-tabbar-item>
        <ms-tabbar-item
          icon="friends-o"
          info="5"
        >
          {{ $t('tab') }}
        </ms-tabbar-item>
        <ms-tabbar-item
          icon="setting-o"
          info="20"
        >
          {{ $t('tab') }}
        </ms-tabbar-item>
      </ms-tabbar>
    </demo-block>

    <demo-block :title="$t('title2')">
      <ms-tabbar v-model="active2">
        <ms-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </ms-tabbar-item>
        <ms-tabbar-item icon="search">{{ $t('tab') }}</ms-tabbar-item>
        <ms-tabbar-item icon="setting-o">{{ $t('tab') }}</ms-tabbar-item>
      </ms-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义图标'
    },
    'en-US': {
      title2: 'Custom icon'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .ms-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
