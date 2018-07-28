<template>
  <div class='city-list' ref='wrapper'>
    <div>
        <div class='area'>
          <div class='title border-topbottom'>当前城市</div>
          <div class='button-list'>
            <div class='button-wrap'>
              <div class='button'>北京</div>
            </div>
          </div>
        </div>
        <div class='area'>
          <div class='title border-topbottom'>热门城市</div>
          <div class='button-list'>
            <div class='button-wrap'>
              <div class='button'>北京</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>上海</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>广州</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>贵州</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>重庆</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>云南</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>福建</div>
            </div>
            <div class='button-wrap'>
              <div class='button'>厦门</div>
            </div>
          </div>
        </div>
        <div class='area'>
          <div class='title border-topbottom'>A</div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
          <div class='item-list'>
            <div class='item'>阿拉尔</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

export default{
    name:'CityList',
    mounted() {
      this.scroll=new BetterScroll(this.$refs.wrapper);
      
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