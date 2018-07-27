<template>
  <div class='city-header'>
    <div class='city-title'>
      <router-link to='/'>
        <div class='iconfont back-icon'>&#xe624;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default{
    name:'CityHeader'

}
    
</script>

<style scoped>
.city-title{
    overflow:hidden;
    position:relative;
    height:.86rem;
    line-height:.86rem;
    text-align:center;
    background:#00bcd4;
    font-size:.32rem;
    color:#fff;

}

.back-icon{
  position:absolute;
  width:.64rem;
  left:0;
  top:0;
  font-size:.4rem;
  color:#fff;

}
   
</style>