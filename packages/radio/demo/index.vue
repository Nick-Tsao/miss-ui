<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-radio-group
        v-model="radio1"
        class="demo-radio-group"
      >
        <ms-radio name="1">{{ $t('radio') }} 1</ms-radio>
        <ms-radio name="2">{{ $t('radio') }} 2</ms-radio>
      </ms-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ms-radio-group
        v-model="radio2"
        class="demo-radio-group"
        disabled
      >
        <ms-radio name="1">{{ $t('radio') }} 1</ms-radio>
        <ms-radio name="2">{{ $t('radio') }} 2</ms-radio>
      </ms-radio-group>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <ms-radio
        name="1"
        value="1"
        checked-color="#4b0"
        class="demo-radio-group"
      >
        {{ $t('radio') }}
      </ms-radio>
    </demo-block>

    <demo-block :title="$t('withCell')">
      <ms-radio-group v-model="radio3">
        <ms-cell-group>
          <ms-cell
            :title="$t('radio') + 1"
            clickable
            @click="radio3 = '1'"
          >
            <ms-radio name="1" />
          </ms-cell>
          <ms-cell
            :title="$t('radio') + 2"
            clickable
            @click="radio3 = '2'"
          >
            <ms-radio name="2" />
          </ms-cell>
        </ms-cell-group>
      </ms-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      customColor: '自定义颜色',
      withCell: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      customColor: 'Custom Color',
      withCell: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    };
  }
};
</script>

<style lang="less">
.demo-radio {
  &-group {
    padding: 0 17px;

    .ms-radio {
      margin-bottom: 10px;
    }
  }
}
</style>
