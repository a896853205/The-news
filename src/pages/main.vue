<style lang="scss">

</style>

<template>
  <div class="main">
    <slide></slide>
    <div class="container clearfix" style="padding-top: 20px;">
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article :size="'middle'"></showcase-article>
      <showcase-article :data="firstArticle"></showcase-article>
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
import slide from '../components/slide'
import axios from 'axios'

export default {
  components: {
    showcaseArticle,
    slide
  },
  data () {
    return {
      firstArticle: null
    }
  },
  beforeCreate () {
    let self = this
    axios({
      method: 'post',
      url: 'http://localhost:6666/The-news/selectAllPress.htm'
    }).then(function (res) {
      res.data[0].href = 'http://localhost:8080/#/newsInfo'
      console.log(res.data[0])
      self.firstArticle = res.data[0]
    }, function (err) {
      console.log(err)
      // alert('网络不好,或重新登录')
    })
  }
}
</script>
