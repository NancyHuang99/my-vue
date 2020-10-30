<template>
  <div>
      <div v-for="item in news" :key="item.id" class="news-item-normal">

          <div class="iamges" v-if="item.havePic">
              <a :href="item.link" target="_blank">
                  <img :src="item.img" alt="">
              </a>{{ item.channelName}}
          </div>
          
          <div class="words">
              <h2 class="title">
                  <a :href="item.link" target="_blank">
                      {{ item.title }}
                 </a>
              </h2>
          </div>

          <div class="aside">
              <span>{{ item.channelName }}</span>
              <span>来源：{{ item.source }}</span>
              <span>发布日期：{{ item.pubDate }}</span>
              
          </div>

          <div class="content">
              {{ item.content }}
          </div>

      </div>
  </div>
</template>

<script>
export default {
    props:{
        news:{
            type:Array,
            default:() => [],
        }
    }

}
</script>

<style csoped>
.news-item-normal{
    border-bottom: 1px solid #ccc;
}
.iamges img{
    width: 150px;
    height: 150px;
    }
</style>