<template>
  <div class='icons'>
    <div class='icon' v-for="item in iconImage" :key='item.id'>
       <div class='icon-img' >
         <img  class='icon-img-content' :src='item.imgUrl'/>
       </div>
       <p class='icon-desc'>{{item.desc}}</p>
    </div>

  </div>
</template>

<script>
import uuid from 'uuid';
export default{
  name:'HomeIcons',
  data(){
    return {
       iconImage:[
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t16912/18/2046755333/11079/5d93a046/5ae41d1aN7c1bb190.png',
           desc:'京东超市'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t16852/352/1845473041/9082/ec3e82d1/5ad882eeN701fb60d.png',
           desc:'唯品会'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png',
           desc:'京东服饰'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
           desc:'京东生鲜'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
           desc:'京东到家'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
           desc:'京东缴费'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
           desc:'9.9元拼'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t20848/70/2400539626/14278/e5bf93e2/5b567f2aN4f1c1261.png',
           desc:'领券'
         },
         {
           id:uuid(),
           imgUrl:'https://m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png',
           desc:'全部'
         }
       ]
    }
  }
}
</script>
<style scoped>
 .icons{
    height:0;
    overflow:hidden;
    padding-bottom:50%;
 }
 .icon{
     height:0;
     padding-bottom:25%;
     width:25%;
     float:left;
     position:relative;

 }
 .icon-img{
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:.44rem;
   box-sizing:border-box;
   padding:.1rem;

 }
 .icon-img-content{
   display:block;
   margin:0 auto;
   height:100%;
   
 }
 .icon-desc{
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   height:.44rem;
   color:#ccc;
   text-align:center;
   background:#fff;
 }
</style>