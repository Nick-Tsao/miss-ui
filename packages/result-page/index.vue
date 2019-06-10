<template>
  <div class="ms-result">
    <div class="ms-result-image">
      <img
        :src="actualImgUrl"
        :class="!imgUrl && type"
      >
    </div>
    <div
      class="ms-result-text"
      v-if="actualText"
    >
      {{ actualText }}
    </div>
    <div
      class="ms-result-subtext"
      v-if="actualSubText"
    >
      {{ actualSubText }}
    </div>
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'result-page',
  props: {
    type: {
      type: String,
      default: 'empty',
    },
    imgUrl: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    subtext: {
      type: String,
      default: '',
    },
  },

  data() {
    const pre = '//manhattan.didistatic.com/static/manhattan/mand-mobile/result-page/2.1/';
    const data = {
      actualImgUrl: this.imgUrl || `${pre}${this.type}.png`,
      actualText:
        this.text ||
        {
          // 网络连接异常
          network: '\u7f51\u7edc\u8fde\u63a5\u5f02\u5e38',
          // 暂无信息
          empty: '\u6682\u65e0\u4fe1\u606f',
        }[this.type] ||
        '',
      actualSubText:
        this.subtext ||
        {
          // 您要访问的页面已丢失
          lost: '\u60a8\u8981\u8bbf\u95ee\u7684\u9875\u9762\u5df2\u4e22\u5931',
        }[this.type] ||
        '',
    };
    return data;
  },
});
</script>
