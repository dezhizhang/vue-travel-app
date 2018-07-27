<template>
  <div class='city-search'>
     <input class='search-input' type='text' placeholder='请输入城市名或拼音'/>
  </div>
</template>

<script>
export default{
    name:"CitySearch"
}


</script>

<style scoped>
.city-search{
    height:.72rem;
    padding:0 .1rem;
    background:#00bcd4;

}

.search-input{
    box-sizing:border-box;
    width:100%;
    padding:0 .1rem;
    height:.62rem;
    line-height:.62rem;
    text-align:center;
    border-radius:.1rem;
    color:#666;

}

</style>