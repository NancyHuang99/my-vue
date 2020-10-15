<template>
    <!-- <div class="news-types" v-if="data.length > 0"> -->
        <div class="news-types">
        <div 
        class="item" 
        v-for="item in showChannels" 
        :key="item.channelId"
        :class="{
           active: item.channelId===chooseId,
        }"
        @click="switchTo(item.channelId)"
         >
            <span class="name">{{ item.name }}</span>
        </div>
        <a href=""  @click.prevent="isCollapse=!isCollapse">{{isCollapse?  "展开" : "收起"}}</a>
    </div>
  
</template>

<script>
import { getNewsChannels } from "@/services/newsService";
import { mapState } from "vuex";

export default {
    data(){
        return{
            isCollapse:true, //当前是否为折叠状态
            chooseId:null  //当前选中的频道Id
        }
    },
    computed:{
        ...mapState("channels",["data"]),
        showChannels: function(){
            // console.log('qwed')
            if(this.isCollapse&&this.data){
                // console.log(this.data);
                return this.data.slice(0,8);
                // return this.data;
                
            }else{
                return this.data;
            }
        },
    },
    watch:{
        data:{
            immediate:true,
            handler(){
                if(this.data > 0){
                    this.switchTo(this.data[0].channelId)
                }
            }

        }
    },

    methods:{
        //切换chooseId
        switchTo(id) {            
            this.chooseId = id;
            this.$emit("change",this.chooseId);
        }
    }

}
</script>

<style scoped>
.news-types{
    margin: 30px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding-bottom: 15px;
}
.item{
    padding:10px 20px;
}

.active{color: lightcoral;}
</style>