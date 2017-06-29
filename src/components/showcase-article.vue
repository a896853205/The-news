<style lang="scss" scoped>
.showcase {
  margin-left: 15px;
  margin-right: 15px;
  float: left;
  .time {

  }
  .img {
    .news-img {
      width: 100%;
    }
  }
  .meta {

  }
  .author-img {

  }
  .meta-nums {

  }
  .text {
    h4 {

    }
  }
  .info {

  }
}
</style>

<template>
  <div class="showcase" :style="style">
    <div class="info">
      <span class="time">{{data.time}}</span>
      <span class="category">
        <a :href="data.category.href">
          {{data.category.name}}
        </a>
      </span>
    </div>
    <div class="img">
      <a href="" target='_blank'>
        <img :src="data.newsImg" class="news-img" alt="">
        <span class="meta">
          <p><img :src="data.authorImg" :alt="data.title" class="author-img"></p>
          <p class="meta-nums">
            <span>赞 {{data.like}}</span>
            <span>{{data.comments}} Comments</span>
          </p>
        </span>
      </a>
    </div>
    <div class="text">
      <h4>
        <a target="_blank" :href="data.href">{{data.title}}</a>
      </h4>
      <div class="desc">{{data.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      style: {width: '15px'}
    }
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    data: {
      type: Object,
      default () {
        return {
          time: '2017-06-29',
          category: {
            name: '也爱看电影',
            href: 'http://www.g-cores.com/categories/30'
          },
          title: '演员，凯文·史派西',
          desc: '“最巧妙之处就是能让人相信他不存在”',
          newsImg: 'static/40b96fb7-7c51-4007-806c-f8627088eab1_hl.jpg',
          authorImg: 'static/aa080c8b-0b93-4370-96af-1e06afef697d_normal.png',
          href: 'http://www.g-cores.com/articles/25637',
          like: '15',
          comments: '12'
        }
      }
    }
  },
  created () {
    if (this.size === 'middle') {
      this.style.width = '485px'
      this.style.height = '422px'
    }
    if (this.size === 'small') {
      this.style.width = '318.328px'
      this.style.height = '325px'
    }
  }
}
</script>
