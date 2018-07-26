<template>
   <div class='weekend'>
    <div class='weekend-title'>周未去那</div>
    <div v-for='item in weekendData' :key='item.id'>
        <div class='weekend-wrapper'>
        <img class='weekend-img' :src='item.imgUrl'/>
        
        </div>
        <div class='weekend-theme'>{{item.theme}}</div>
        <div class='weekend-desc'>{{item.desc}}</div>
     </div>
    
   </div>
</template>

<script>
import uuid from 'uuid'
export default{
    name:'Weekend',
    data(){
          return {
            weekendData:[
                {
                    id:uuid(),
                    imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1035053151,478637819&fm=200&gp=0.jpg',
                    theme:'大连圣亚海洋世界',
                    desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                   id:uuid(),
                   imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=894514289,1207382376&fm=200&gp=0.jpg',
                   theme:'大连圣亚海洋世界',
                   desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                   id:uuid(),
                   imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2557414377,3147281424&fm=200&gp=0.jpg',
                   theme:'大连圣亚海洋世界',
                   desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                 {
                    id:uuid(),
                    imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1035053151,478637819&fm=200&gp=0.jpg',
                    theme:'大连圣亚海洋世界',
                    desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                   id:uuid(),
                   imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=894514289,1207382376&fm=200&gp=0.jpg',
                   theme:'大连圣亚海洋世界',
                   desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                   id:uuid(),
                   imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2557414377,3147281424&fm=200&gp=0.jpg',
                   theme:'大连圣亚海洋世界',
                   desc:'浪漫大连首都，浪漫主题海洋乐园'
                }


            ]
        }
    }


}

</script>

<style scoped>
  .weekend-title{
      line-height:.8rem;
      background:#eee;
      text-indent:.2rem;
  }
  .weekend-wrapper{
      overflow:hidden;
      height:0;
      padding-bottom:33.9%;

  }
  .weekend-img{
      width:100%;
  }

  .weekend-theme{
    line-height:.54rem;
    font-size:.32rem;
  }

  .weekend-desc{
    line-height:.4rem;
    color:#ccc;
  }
</style>