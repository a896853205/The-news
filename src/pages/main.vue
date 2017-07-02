<style lang="scss">

</style>

<template>
  <div class="main">
    <div class="container clearfix">
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
      <showcase-article></showcase-article>
    </div>
  </div>
</template>

<script>
import showcaseArticle from '../components/showcase-article'
export default {
  components: {
    showcaseArticle
  }
}
</script>
