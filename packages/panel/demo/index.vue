<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
      </ms-panel>
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ms-panel
        :title="$t('title')"
        :desc="$t('desc')"
        :status="$t('status')"
      >
        <div>{{ $t('content') }}</div>
        <div slot="footer">
          <ms-button size="small">{{ $t('button') }}</ms-button>
          <ms-button
            size="small"
            type="danger"
          >
            {{ $t('button') }}
          </ms-button>
        </div>
      </ms-panel>
    </demo-block>
  </demo-section>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-panel {
  .ms-panel__footer {
    text-align: right;

    .ms-button {
      margin-left: 5px;
    }
  }

  .ms-panel__content {
    padding: 20px;
  }
}
</style>
