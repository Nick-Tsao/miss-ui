<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-cell-group>
        <ms-switch-cell
          v-model="checked"
          :title="$t('title')"
        />
      </ms-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <ms-cell-group>
        <ms-switch-cell
          v-model="checked"
          disabled
          :title="$t('title')"
        />
      </ms-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <ms-cell-group>
        <ms-switch-cell
          v-model="checked"
          loading
          :title="$t('title')"
        />
      </ms-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
