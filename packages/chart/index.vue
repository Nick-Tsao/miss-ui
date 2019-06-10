<template>
  <canvas
    ref="canvas"
    :style="style"
  />
</template>

<script>
import F2 from '@antv/f2';
import create from '../utils/create-basic';

export default create({
  name: 'chart',

  props: {
    options: {
      default() {
        /* istanbul ignore next */
      },
    },
    size: {
      type: Array,
      default: () => [320, 280],
    },
    type: {
      type: String,
      default: () => 'genre'
    }
  },
  data() {
    return {
      chart: null,
      unit: 16,
    };
  },
  // LiftCircle Hook
  mounted() {
    if (document.readyState !== 'loading') {
      this.$_resize();
    }
    document.addEventListener('DOMContentLoaded', this.$_resize);
    window.addEventListener('resize', this.$_resize);
  },
  beforeDestroy() {
    document.removeEventListener('DOMContentLoaded', this.$_resize);
    window.removeEventListener('resize', this.$_resize);
  },
  computed: {
    style() {
      let width; let height;
      if (typeof this.size[0] === 'string' && this.size[0].indexOf('rem') !== -1) {
        width = parseFloat(this.size[0]) * this.unit;
      } else {
        width = parseFloat(this.size[0]);
      }
      if (typeof this.size[1] === 'string' && this.size[1].indexOf('rem') !== -1) {
        height = parseFloat(this.size[1]) * this.unit;
      } else {
        height = parseFloat(this.size[1]);
      }
      width += 'px';
      height += 'px';
      return {
        width,
        height
      };
    },
  },
  methods: {
    // MARK: private methods
    $_resize() {
      this.unit = parseFloat(
        window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size'),
      );
      this.chart = this.chart || new F2.Chart({
        el: this.$refs.canvas,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
      });
    },
  },
});

</script>
