<template>
  <div class="ms-water-mark">
    <div class="water-mark-container">
      <slot />
    </div>
    <div
      v-if="!!$scopedSlots.watermark || content"
      class="water-mark-list"
      ref="mark"
    >
      <div
        class="water-mark-list-wrapper"
        :style="{
          opacity,
          transform: `rotate(${rotate}deg)`
        }"
      >
        <!--  -->
        <template v-if="content">
          <canvas
            ref="canvas"
            class="water-mark-canvas"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import create from '../utils/create';

const getDpr = window ? window.devicePixelRatio : 2;
const fontSize = 10;
const color = '#858B9C';

export default create({
  name: 'water-mark',

  props: {
    content: {
      type: String,
      default: ''
    },
    spacing: {
      type: [String, Number],
      default: '40px',
    },
    rotate: {
      type: [String, Number],
      default: -30,
    },
    opacity: {
      type: [String, Number],
      default: 0.2
    }
  },

  mounted() {
    if (this.content) {
      this.ctx = this.$refs.canvas.getContext('2d');
      this.ratio = getDpr;
      this.initCanvas();
      this.computedSpacing();
      this.draw();
    }
  },

  methods: {
    initCanvas() {
      const { ratio, $refs } = this;
      const { mark, canvas } = $refs;
      const { clientWidth, clientHeight } = mark;
      canvas.width = clientWidth * ratio;
      canvas.height = clientHeight * ratio;
      this.ctxWidth = clientWidth * ratio;
      this.ctxHeight = clientHeight * ratio;
    },
    computedSpacing() {
      const { spacing, ratio } = this;

      if (typeof spacing === 'number') {
        this.realSpacing = spacing;
        return;
      }
      const reg = /([0-9]+)([A-Za-z]+)/;
      const [, amount = 20, unit = 'vw'] = reg.exec(spacing);
      if (unit === 'px') {
        this.realSpacing = amount;
      } else if (unit === 'vh') {
        const { height } = window.screen;
        this.realSpacing = amount * height / 100;
      } else if (unit === 'vw') {
        const { width } = window.screen;
        this.realSpacing = amount * width / 100;
      }
      this.realSpacing *= ratio;
    },
    draw() {
      const { content, ctx, realSpacing, ratio, ctxWidth, ctxHeight } = this;
      const $fontSize = fontSize * ratio;
      const contentLength = content.length * $fontSize;
      const xCount = Math.ceil(ctxWidth * ratio / (contentLength + realSpacing));
      const yCount = Math.ceil(ctxHeight * ratio / ($fontSize + realSpacing));
      console.log(xCount, yCount);
      ctx.font = `${$fontSize}px DIN Alternate, "Helvetica Neue",Helvetica,
      "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif`;
      ctx.fillStyle = color;
      let ctxX = 0;
      let ctxY = 0;
      for (let y = 0; y < yCount; y++) {
        ctxX = 0;
        for (let x = 0; x < xCount; x++) {
          ctx.fillText(content, ctxX, ctxY);
          ctxX += contentLength;
        }
        ctxY += $fontSize + realSpacing;
      }
    }
  }
});
</script>
