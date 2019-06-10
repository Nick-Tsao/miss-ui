<template>
  <demo-section background="white">
    <demo-block :title="$t('basicUsage')">
      <ms-card
        num="2"
        price="2.00"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <ms-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="$t('tag')"
        :desc="$t('desc')"
        :title="$t('title')"
        :thumb="imageURL"
      >
        <div
          slot="tags"
          class="card__tags"
        >
          <ms-tag
            plain
            type="danger"
          >
            标签1
          </ms-tag>
          <ms-tag
            plain
            type="danger"
          >
            标签2
          </ms-tag>
        </div>
        <div
          slot="footer"
          class="card__footer"
        >
          <ms-button
            round
            size="mini"
          >
            {{ $t('button') }}
          </ms-button>
          <ms-button
            round
            size="mini"
          >
            {{ $t('button') }}
          </ms-button>
        </div>
      </ms-card>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男'
    }
  },

  data() {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    };
  }
};
</script>

<style lang="less">
  .card__footer {
    padding-top: 10px;
  }

  .card__tags {
    .ms-tag {
      margin-right: 5px;
    }
  }
</style>
