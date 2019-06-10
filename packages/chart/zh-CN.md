## Chart 图表

```
采用F2工具库，一个专注于移动，开箱即用的可视化解决方案，完美支持 H5 环境同时兼容多种环境（node, 小程序，weex）。完备的图形语法理论，满足你的各种可视化需求。专业的移动设计指引为你带来最佳的移动端图表体验.
```
* [F2文档](https://www.yuque.com/antv/f2/intro)


### 使用指南
``` javascript
import { Chart } from 'miss-ui';

Vue.use(Chart)
```

### 代码演示

#### 示例代码 
#### 雷达图/radar
```html
<ms-chart ref="radar"/>
```

```javascript
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
      radarCanvas:null,
  }
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
    this.radarCanvas.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: function onChange(obj) {
        var legend = this.radarCanvas.get('legendController').legends.top[0];
        var tooltipItems = obj.items;
        var legendItems = legend.items;
        var map = {};
        legendItems.map(function(item) {
          map[item.name] = _.clone(item);
        });
        tooltipItems.map(function(item) {
          var name = item.name;
          var value = item.value;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(_.values(map));
      },
      onHide: function onHide() {
        var legend = this.radarCanvas.get('legendController').legends.top[0];
        legend.setItems(this.radarCanvas.getLegendItems().country);
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
}
```

#### 柱状图/column
```html
<ms-chart ref="column"/>
```
```javascript
data() {
  return {
      columnData: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ],
      columnCanvas:null,
  }
},
mounted() {
    // column
    this.columnCanvas = this.$refs.column.chart;
    this.columnCanvas.source(this.columnData);
    this.columnCanvas.interval().position('genre*sold').color('genre');
    this.columnCanvas.render();
}
```

#### 面积图/area

```html
<ms-chart ref="area"/>
```
```javascript
data() {
  return {
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
      areaCanvas:null,
  }
},
mounted() {
    this.areaCanvas.axis('time', {
      label: function label(text, index, total) {
        var textCfg = {};
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
```



