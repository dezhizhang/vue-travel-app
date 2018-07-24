<template>
  <div class='header'>
      <div class='header-left'>返回</div>
      <div class='header-center'>输入城市景点/旅玩主题</div>
      <div class='header-right'>城市</div>
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
  .header-center{
      flex:1;
      background:#fff;
      border-radius:.1rem;
      height:.64rem;
      margin-top:.12rem;
      margin-left:.2rem;
      color:#ccc;
      line-height:.64rem;

  }

  .header-right{
      width:1.24rem;
      text-align:center;
      float:right;
  }
    
</style>