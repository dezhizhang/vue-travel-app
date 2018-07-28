<template>
   <div class='city'>
        <CityHeader/>
        <CitySearch/>
        <CityList :cities='cities' :hotCitys='hotCitys' :letter='letter'/>
        <CityAlphay :cities='cities' @change='handleLetterChange'/>
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
            hotCitys:[],
            letter:''
        }
    },


    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
        

                 if(res.data.ret && res.data.data){
                     this.cities=res.data.data.cities;
                     this.hotCitys=res.data.data.hotCities
;
                 }


            })
        },

        handleLetterChange(letter){
           this.letter=letter;
          


        }
    },

    mounted() {
       this.getCityInfo() 
    },
}
</script>

<style scoped>

</style>