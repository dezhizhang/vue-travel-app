<template>
  <div class='banner'>
    <img class='banner-img' src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4249085493,2771979155&fm=200&gp=0.jpg' />
    <div class='banner-info'>
      <div class='banner-title'>大连圣亚海洋世界</div>
      <div class='banner-number'><span class='iconfont banner-icon'>&#xe6eb;</span>39</div>
    </div>
  </div>
</template>

<script>
export default{
    name:"DetailBanner",
    
}
</script>

<style scoped>
.banner{
    overflow:hidden;
    height:0;
    padding-bottom:55%;
    position:relative;
    color:#fff;
}
.banner-img{
    width:100%;

}
.banner-info{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    padding:0 .2rem;
    line-height:.6rem;
    display:flex;
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
    
}

.banner-title{
    flex:1;

}

.banner-number{
    padding:.0 .6rem;
    line-height:.4rem;
    height:.4rem;
    border-radius:.2rem;
    background:rgba(0,0,0,.8);
    margin-top:.1rem;
    font-size:.32rem;
    
}
.banner-icon{
   color:#fff;
   margin-right:.2rem;


}

</style>