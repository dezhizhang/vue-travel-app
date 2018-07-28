<template>
  <div class='alphay'>
    <div v-for='(item,key) in cities' :key="key">
      <div class='item' @click="handleLetterClick">{{key}}</div>
    </div>
  </div>
</template>

<script>
export default{
  name:'CityAlphay',
  props:{
    cities:Object
  },
  methods:{
    handleLetterClick(ev){
       this.$emit('change',ev.target.innerText);
       
    }
  }

  
}
</script>

<style scoped>
  .alphay{
    display:flex;
    justify-content:center;
    flex-direction:column;
    position:absolute;
    top:3rem;
    right:0;
    bottom:0;
    width:.4rem;

  }
  .item{
    text-align:center;
    color:#00bcd4;

  }
</style>