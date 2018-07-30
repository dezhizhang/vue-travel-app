<template>
 <div class='recommend'>
   <div class='recommend-title'>推销推荐</div>
   <ul>
     <router-link :to="'/detail/'+item.id" tag='li' class='item' v-for='item in recommendList' :key='item.id'>
          <img class='item-img' :src='item.imgUrl'/>
        <div>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
          <button class='item-btn'>查看详情</button>
        </div>
     </router-link>
   </ul>
 </div>
</template>

<script>
import uuid from 'uuid';
export default{
    name:'Recommend',
    data(){
        return {
            recommendList:[
                {
                  id:'0001',
                  imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1830359176,654163576&fm=200&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0002',
                  imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3033037990,1425076943&fm=200&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0003',
                  imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545575964,2149126446&fm=27&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0004',
                  imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2944094007,2505799703&fm=27&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0005',
                  imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1830359176,654163576&fm=200&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0006',
                  imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3033037990,1425076943&fm=200&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0007',
                  imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545575964,2149126446&fm=27&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                },
                {
                  id:'0008',
                  imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2944094007,2505799703&fm=27&gp=0.jpg',
                  title:'大连圣亚海洋世界',
                  desc:'浪漫大连首都，浪漫主题海洋乐园'
                }
            ]
        }
    }

}
</script>

<style scoped>
.recommend-title{
    margin-top:.1rem;
    line-height:.8rem;
    background:#eee;
    text-indent:.2rem;
}
.item{
    overflow:hidden;
    display:flex;
    height:1.9rem;
    border-bottom:.01rem solid #ccc;
}
.item-img{
    width:1.7rem;
    height:1.7rem;
    padding:.1rem;

}
.item-info{
    flex:1;
    padding:.1rem;
    min-width:0;

}
.item-title{
    line-height:.54rem;
    font-size:.32rem;

}
.item-desc{
    line-height:.4rem;
    color:#ccc;

}
.item-btn{
    margin-top:.2rem;
    line-height:.24rem;
    background:#ff9300;
    padding:.1rem;
    border-radius:.06rem;
    margin-left:.2rem;
    color:#fff;
    font-size:.2rem;

}
</style>