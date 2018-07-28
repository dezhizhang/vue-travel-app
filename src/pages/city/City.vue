<template>
   <div class='city'>
     <CityHeader/>
     <CitySearch/>
     <CityList/>
     <CityAlphay/>
   </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphay from './components/CityAlphay'
export default{
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphay
    }
}
</script>

<style scoped>

</style>