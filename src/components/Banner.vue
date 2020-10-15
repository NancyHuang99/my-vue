<template>
   <div class="scrollPics" @mouseenter="autoStop"  @mouseleave="autoStart"> 
      <ul class="slider" :style="{
          width:banners.length*100+'%',
          marginLeft:-index*100+'%'
      }">
         <li v-for="(item,i) in banners" :key="i">
             <img :src="item.url" alt=""/>
         </li>
       
      </ul>
      <ul class="num">
          <li 
           v-for="(item,i) in banners" 
           :key="i"
           :class="{
               active: i===index,
           }"
           >            
          </li>
          
      </ul>
 </div>
</template>

<script>
export default {
    props:{
        banners:{
            type:Array,
            required:true,

        }
    },
    
    beforeCreate(){

    },
    created(){
        this.autoStart()
    },
    destroy(){
        this.autoStop()
    },
    data(){
        return{
            index:0,
            timer:null
        }
    },
    methods:{
        autoStart(){
            if(this.timer){
                return;
            }
            this.timer=setInterval(()=>{
                this.index =(this.index+1) % this.banners.length;
            },2000)

        },
        autoStop(){
            clearInterval(this.timer);
            this.timer=null;

        }
    }

}
</script>

<style>
        *{
            margin: 0px;
            padding: 0px;
        }
        ul{
            list-style: none;
        }
        .scrollPics{
            height: 420px;
            width: 790px;
            margin-bottom: 10px;
            overflow: hidden;
            position: relative;

        }
        .slider{
        margin-top: 0px;
        }
        .slider li{
            width: 790px;float: left;
        }
        .slider img{
        width: 100%;
        }
        .num{
        position: absolute;
        right: 5px;
        bottom: 5px;
        }
        .num li{
        float: left;
        color: #ff7300;
        text-align: center;
        line-height: 16px;
        width: 16px;
        height: 16px;
        cursor: pointer;
        overflow: hidden;
        margin: 3px 1px;
        border: 1px solid #ff7300;
        background-color: white;
        border-radius: 50%;
        }
        .num li.active{
        color: #fff;
        line-height: 21px;
        width: 21px;
        height: 21px;
        font-size: 16px;
        margin: 0 1px;
        border: 0;
        background-color: #ff7300;
        font-weight: bold;
        border-radius: 50%;
        cursor: pointer;
        }
    </style>