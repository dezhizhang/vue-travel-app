<template>
   <div class='city'>
     <CityHeader/>
     <CitySearch/>
     <CityList :cities='cities' :hotCitys='hotCitys'/>
     <CityAlphay :cities='cities'/>
   </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/CityHeader';
import CitySearch from './components/CitySearch';
import CityList from './components/CityList';
import CityAlphay from './components/CityAlphay';
export default{
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphay
    },
    data(){
        return {
            cities:{},
            hotCitys:[]
        }
    },


    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
        
                console.log(res.data.data.cities);

                 if(res.data.ret && res.data.data){
                     this.cities=res.data.data.cities;
                     this.hotCitys=res.data.data.hotCities
;
                 }


            })
        }
    },

    mounted() {
       this.getCityInfo() 
    },
}
</script>

<style scoped>

</style>