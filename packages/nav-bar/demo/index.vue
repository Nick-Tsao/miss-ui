<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <ms-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ms-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <ms-icon
          name="search"
          slot="right"
        />
      </ms-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
