<template>
  <div class='detail'>
    <DetailBanner/>
    <DetailHeader/>
    <div class='content'></div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader
    }

}
</script>

<style scoped>
.content{
  height:50rem;
  
}

</style>