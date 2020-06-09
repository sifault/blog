<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink && data.githubLink"
      >
        <NavLink
          class="action-button quick-btn"
          :item="actionLink"
        />
        <NavLink
                class="action-button go-github-btn"
                :item="githubLink"
        />
      </p>
    </header>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
      <NavLink :item="recordLink" />
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    githubLink () {
      return {
        link: this.data.githubLink,
        text: this.data.githubText
      }
    },
    recordLink () {
      return {
        link: this.data.recordLink,
        text: this.data.recordText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
    .quick-btn {
      border-radius: 60px!important;
      padding 0.4rem 1.2rem!important;
      font-size: 1.05em!important;
      margin-bottom: 15px!important;
      margin-right: 6px!important;
      color: $accentColor!important;
      background-color: #fff!important;
      border: 1px solid $accentColor!important;
    }
    .go-github-btn {
      margin-left: 2rem!important;
      border-radius: 60px!important;
      position: relative;
      padding 0.4rem 1.2rem!important;
      color: #4f5959!important;
      font-size: 1.05em!important;
      font-weight: 600!important;
      letter-spacing: .1em!important;
      border: 1px solid #dedede !important;
      background-color: #f5f5f5!important;
      padding 0.4rem 1rem!important;
    }
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
