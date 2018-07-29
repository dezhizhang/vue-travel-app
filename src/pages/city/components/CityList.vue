<template>
  <div class='city-list' ref='wrapper'>
    <div>
        <div class='area'>
          <div class='title border-topbottom'>当前城市</div>
          <div class='button-list'>
            <div class='button-wrap'>
              <div class='button'>{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class='area'>
          <div class='title border-topbottom'>热门城市</div>
          <div class='button-list'>
            <div class='button-wrap' v-for='item in hotCitys' :key="item.id" @click='handleClick(item.name)'>
              <div class='button'>{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class='area' v-for='(item,key) in cities' :key='key' :ref='key'>
          <div class='title border-topbottom'>{{key}}</div>
          <div class='item-list' v-for='innerItem in item' :key="innerItem.id" @click='handleClick(innerItem.name)'>
            <div class='item'>{{innerItem.name}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

export default{
    name:'CityList',
    props:{
      hotCitys:Array,
      cities:Object,
      letter:String
    },

    mounted() {
      this.scroll=new BetterScroll(this.$refs.wrapper);
      
    },
    methods:{
      handleClick(city){
        this.$store.dispatch('changeCity',city);
        this.$router.push('/');


      }


    },


    watch:{
      letter(){ 
        if(this.letter){
          const element=this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }


      }
    },
}
</script>

<style scoped>
  .city-list{
    position:absolute;
    left:0;
    top:1.58rem;
    right:0;
    bottom:0;
    overflow:hidden;

  }
  .title{
    line-height:.54rem;
    background:#eee;
    padding-left:.2rem;
    color:#666;
    font-size:.26rem;
    border-color:#ccc;

  }

 .button-list{
   padding:.1rem;
   overflow:hidden;

 }

 .button-wrap{
     float:left;
     width:33.3%;
 }
 .button{
   margin:.1rem;
   text-align:center;
   border:.02rem solid #ccc;
   color:#00bcd4;

 }
 .item-list{

 }
 .item{
   line-height:.76rem;
   color:#666;
   padding-left:.2rem;
   border-bottom:.001rem solid #ccc;


 }
</style>