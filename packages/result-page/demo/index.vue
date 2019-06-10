<template>
  <demo-section>
    <demo-block title="404页面">
      <ms-result-page type="lost" />
    </demo-block>
    <demo-block title="网络异常页面">
      <ms-result-page
        type="network"
        subtext="点击屏幕，重新加载"
      />
    </demo-block>
    <demo-block :title="$t('advancedUsage')">
      <ms-result-page
        img-url="//manhattan.didistatic.com/static/manhattan/do1_JX7bcfXqLpStKRv31xlp"
        text="不太确定自己错在了哪里..."
        subtext="要不然刷新试试？"
      />
    </demo-block>
  </demo-section>
</template>
