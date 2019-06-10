<template>
  <demo-section>
    <demo-block title="雷达图">
      <ms-chart ref="radar" />
    </demo-block>
    <demo-block title="柱状图">
      <ms-chart ref="column" />
    </demo-block>
    <demo-block title="面积图">
      <ms-chart ref="area" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      radarData: [{
        item: 'Design',
        user: '用户 A',
        score: 70
      }, {
        item: 'Design',
        user: '用户 B',
        score: 30
      }, {
        item: 'Development',
        user: '用户 A',
        score: 60
      }, {
        item: 'Development',
        user: '用户 B',
        score: 70
      }, {
        item: 'Marketing',
        user: '用户 A',
        score: 50
      }, {
        item: 'Marketing',
        user: '用户 B',
        score: 60
      }, {
        item: 'Users',
        user: '用户 A',
        score: 40
      }, {
        item: 'Users',
        user: '用户 B',
        score: 50
      }, {
        item: 'Test',
        user: '用户 A',
        score: 60
      }, {
        item: 'Test',
        user: '用户 B',
        score: 70
      }, {
        item: 'Language',
        user: '用户 A',
        score: 70
      }, {
        item: 'Language',
        user: '用户 B',
        score: 50
      }, {
        item: 'Technology',
        user: '用户 A',
        score: 70
      }, {
        item: 'Technology',
        user: '用户 B',
        score: 40
      }, {
        item: 'Support',
        user: '用户 A',
        score: 60
      }, {
        item: 'Support',
        user: '用户 B',
        score: 40
      }],
      radarCanvas: null,

      columnData: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ],
      columnCanvas: null,
      areaData: [{
        time: 'Jan.',
        tem: 1000
      }, {
        time: 'Feb.',
        tem: 2200
      }, {
        time: 'Mar.',
        tem: 2000
      }, {
        time: 'Apr.',
        tem: 2600
      }, {
        time: 'May.',
        tem: 2000
      }, {
        time: 'Jun.',
        tem: 2600
      }, {
        time: 'Jul.',
        tem: 2800
      }, {
        time: 'Aug.',
        tem: 2000
      }],
      areaCanvas: null,
    };
  },
  mounted() {
    // radar
    this.radarCanvas = this.$refs.radar.chart;
    this.radarCanvas.coord('polar');
    this.radarCanvas.source(this.radarData, {
      score: {
        min: 0,
        max: 120,
        nice: false,
        tickCount: 4
      }
    });
    this.radarCanvas.axis('score', {
      label: function label(text, index, total) {
        if (index === total - 1) {
          return null;
        }
        return {
          top: true
        };
      },
      grid: {
        lineDash: null,
        type: 'arc' // 弧线网格
      }
    });
    this.radarCanvas.axis('item', {
      grid: {
        lineDash: null
      }
    });
    this.radarCanvas.line().position('item*score').color('user');
    this.radarCanvas.point().position('item*score').color('user').style({
      stroke: '#fff',
      lineWidth: 1
    });
    this.radarCanvas.render();


    // column
    this.columnCanvas = this.$refs.column.chart;
    this.columnCanvas.source(this.columnData);
    this.columnCanvas.interval().position('genre*sold').color('genre');
    this.columnCanvas.render();
    // area
    this.areaCanvas = this.$refs.area.chart;
    this.areaCanvas.source(this.areaData);
    this.areaCanvas.tooltip({
      showCrosshairs: true
    });
    this.areaCanvas.scale({
      time: {
        range: [0, 1]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    });
    this.areaCanvas.axis('time', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    this.areaCanvas.area().position('time*tem');
    this.areaCanvas.line().position('time*tem');
    this.areaCanvas.render();
  }
};
</script>

<style lang="less">
svg {
  display: block;
  margin: 0 auto;
}
</style>
