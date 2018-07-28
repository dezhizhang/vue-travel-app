<template>
  <div class='city-search'>
    <div>
        <input v-model='keyword' class='search-input' type='text' placeholder='请输入城市名或拼音'/>
        <div class='search-content' ref='search' v-show='keyword'>
        <ul>
            <li class='search-item'  v-for='item in list' :key='item.id'>{{item.name}}</li>
            <li class='search-item' v-show='hasNoDate'>没有找到匹配数据</li>
        </ul>
        </div>
     </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default{
    name:"CitySearch",
    props:{
        cities:Object
    },

    data(){
        return {
            keyword:'',
            list:[],
            timer:null,


        }
    },
    mounted() {
        this.scroll=new BetterScroll(this.$refs.search);

    },
    computed :{
        hasNoDate(){
            return !this.list.length;
        }
    },

    watch:{
        keyword(){
             if(this.timer){
                clearTimeout(this.timer);

             };
             if(!this.keyword){
                 this.list=[];
                 return;

             }
             this.timer=setTimeout(()=>{
                 const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1 ){
                            result.push(value);

                        }
                    })
                    

                }
               this.list=result


             },1000)
        }
    }
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
.search-content{
    z-index:7;
    overflow:hidden;
    position:absolute;
    left:0;
    top:1.58;
    bottom:0;
    width:100%;
    height:90%;
    background:#eee;
}

.search-item{
   line-height:.62rem;
   padding-left:.2rem;
   background:#fff;
   border:.001rem solid #ccc;

}

</style>