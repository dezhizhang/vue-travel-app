<template>
  <div class='detailHeader'>
    <router-link to='/' class='header-abs' v-show='showAbs'>
      <div class='iconfont header-icon-back'>&#xe624;</div>
    </router-link>
    <div class='header-fiexd' v-show='!showAbs' :style='opacityStyle'>
       <router-link to='/' class='iconfont header-fiexd-back'>&#xe624;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default{
    name:"DetailHeader",
    data(){
      return {
        showAbs:true,
        opacityStyle:{
          opacity:0
        }

      }
    },
    methods:{
      handleScroll(){
        let top=document.documentElement.scrollTop;

        if(top>60 ){
          let opacity=top/140;
          opacity=opacity >1 ? 1:opacity
          this.opacityStyle={ opacity }
          this.showAbs=false;

        }else{
          this.showAbs=true;

        }

      }
    },

    activated() {
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll',this.handleScroll);

    },
    
}
</script>

<style scoped>
.header-abs{
    position:absolute;
    left:.2rem;
    top:.2rem;
    width:.8rem;
    height:.8rem;
    line-height:.8rem;
    border-radius:.4rem;
    background:rgba(0,0,0,.8);
    text-align:center;


}
.header-icon-back{
    color:#fff;
    font-size:.32rem;

}

.header-fiexd{
    position:fixed;
    top:0;
    left:0;
    right:0;
    color:#fff;
    height:.86rem;
    line-height:.86rem;
    text-align:center;
    background:#00bcd4;
    z-index:10;
    

}

.header-fiexd-back{
  position:absolute;
  left:0;
  top:0;
  padding:0 .2rem;
  font-size:.32rem;
  color:#fff;

}

</style>