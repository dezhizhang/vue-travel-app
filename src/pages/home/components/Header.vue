<template>
  <div class='header'>
      <div class='header-left iconfont icon-fanhui'>
        <span class='iconfont icon-back'>&#xe624;</span>
      </div>
      <div class='header-center'>
        <span class='iconfont'>&#xe632;</span>
        输入城市景点/旅玩主题
      </div>
      <div class='header-right'>
         城市
         <span class='iconfont icon-arrow'>&#xe6aa;</span>
      </div>
  </div>
</template>

<script>
  export default{
      name:'header'
  }
</script>

<style scoped >
  .header{
      height:.86rem;
      background:#00bcd4;
      display:flex;
      color:#fff;
      line-height:.86rem;


  }
  .header-left{
     width:.64rem;
     float:left;
     text-align:center;


  }
  .icon-back{
      font-size:.4rem;
      text-align:center;
  }
  .header-center{
      flex:1;
      background:#fff;
      border-radius:.1rem;
      height:.64rem;
      margin-top:.12rem;
      margin-left:.2rem;
      color:#ccc;
      line-height:.64rem;
      padding-left:.2rem;

  }

  .header-right{
      width:1.24rem;
      text-align:center;
      float:right;
  }

  .icon-arrow{
      font-size:.36rem;

  }
    
</style>