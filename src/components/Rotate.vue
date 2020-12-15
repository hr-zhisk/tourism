<template>
  <div class="lanren">
		<div class="rotate">
			<figure>
				<p class="stroll"><img src="img/index/shi.png" class="imgs">吃在西安</p>
				<img src="img/index/index-pic-3.jpg">
				<figcaption>
					<div class="list">
					<span><img src="img/index/bang.png">美食榜</span>
					<ul><li v-for="(cate,i) of cate" :key="i">{{cate}}</li></ul>
					<router-link to="/developing">马上看看去</router-link></div>
				</figcaption>
			</figure>
		</div>
		<div class="rotate">
			<figure>
				<p class="stroll"><img src="img/index/su.png" class="imgs">住在西安</p>
				<img src="img/index/index-pic-4.jpg" >
				<figcaption>
				<div class="list">
					<span><img src="img/index/bang.png">旅宿榜</span>
					<ul><li v-for="(put,i) of put" :key="i">{{put}}</li></ul>
					<router-link to="/developing">马上看看去</router-link>
				</div>
				</figcaption>  
			</figure>
		</div>
		<div class="rotate">
			<figure>
				<p class="stroll"><img src="img/index/yu.png" class="imgs">游在西安</p>
				<img src="img/index/index-pic-5.jpg" >
				<figcaption>
				<div class="list">
					<span><img src="img/index/bang.png">景点榜</span> 
					<ul><li v-for="(play,i) of play" :key="i">{{play}}</li></ul>
					<router-link to="/developing">马上看看去</router-link>
				</div>
			</figcaption>  
			</figure>
		</div>
		<div class="rotate">
			<figure>
				<p class="stroll"><img src="img/index/gou.png" class="imgs">购在西安</p>
				<img src="img/index/index-pic-6.jpg">
				<figcaption>
					<div class="list">
						<span><img src="img/index/bang.png">购物榜</span>
						<ul><li v-for="(shopping,i) of shopping" :key="i">{{shopping}}</li></ul>
						<router-link to="/developing">马上看看去</router-link>
					</div>
				</figcaption>  
			</figure>
		</div>
	<!-- <link rel="stylesheet" href="css/index.css"> -->
	</div>
</template>
<style class="rotate">
*{margin: 0; padding: 0;}
.lanren{width:1200px;
	margin:0 auto;
	height: 420px;
}
.rotate{ 
  perspective: 1200px; 
  width: 25%;
  float: left;
}
.rotate figure { 
  height: 400px;
  position: relative; 
  transform-style: preserve-3d; 
  transition: 1s transform;
  margin:10px;
}
.rotate img{ 
  position: relative;
  width: 100%;
  z-index: 1; 
}
.rotate figure figcaption { 
position: relative;
width: 100%; height: 105%;
transform: rotateY(.5turn) translateZ(1px); 
background: rgba(255, 255, 255, 0.945); 
background-image: -webkit-linear-gradient(top,rgb(56, 19, 223),rgba(18, 15, 175, 0.356));
/* background-image: -o-linear-gradient(top,rgb(56, 19, 223),rgba(184, 183, 197, 0)); */
/* background-image: -moz-linear-gradient(top,rgb(56, 19, 223),rgba(184, 183, 197, 0)); */
/* background-image: -ms-linear-gradient(top,rgb(56, 19, 223),rgba(184, 183, 197, 0)); */
text-align: center; 
top: -422px;
opacity: 0.6; 
transition: 1s .5s opacity; 
}
.rotate:hover figure { transform: rotateY(.5turn); }
.rotate:hover figure figcaption { opacity: 1; }
@media screen and (max-width: 800px) { 
  #flip-3d { perspective-origin: center top; }
	div#flip-3d figure { 
    float: none; 
    width: 10%; 
    margin: 0 auto; 
  }
}
.rotate  ul{
	position: relative;
	top: -12px;
	list-style-type:none;
}
.rotate .list>ul>li,span{
  color:#FFF;
  margin-top: 9px;
  }
.rotate .list{
	margin: 0 auto;
	position: relative;
	top: 30px;
	z-index: 3;
}
.rotate a{ font-size: 20px;}
.rotate a:hover{background-color:rgba(231, 11, 11, 0.623);}
.rotate a{
  color: rgba(0, 0, 0, 0.589);
  text-decoration:none;
}
.rotate .stroll{
	text-shadow: 0 0 0.5rem;
	width: 10px;
	height: 0px;
	z-index: 2;
	color: #FFF;
	font: 1.6rem Microsoft YaHei;
	position: relative;
	top:60px;
	left:170px;
}
.rotate .list>span>img{
  position:relative;
  top:0px;
  vertical-align:bottom;
  width:24px;
  height:24px;
}
.rotate .list>span{
  position: relative;
  top:-8px;
  left:-7px;
}
.rotate .imgs{
  position: relative;
  top: 0px;
  left: -100px;
  width: 70px;
  z-index: 2;
}

</style>
<script>
export default {
  data(){ 
		return{
				cate:['羊肉泡馍','凉皮','三兄弟高炉烧饼','火炉旁烤肉店','埚曰记古法火锅',
				'西安君悦酒店店','奔跑吧陕菜','甜小七cake','馬振麵','哈利德',],
				put:['古城驿家客栈','雅致酒店','英卓未来公寓智能酒店','十间公寓','大唐小舍公寓',
				'秦唐一号酒店','星辰酒店','西安秦俑村窑洞庭院','景玉商旅酒店','西安唐城宾馆'],
				play:['西安城市运动公园','西安天阙酒吧','凤鸣九天剧院','阳光丽都大剧院','陕西大剧院',
				'大地数字影院','欢乐迪氧吧KTV','猫的天空之城概念书店','奥斯卡长安国际影城','中影国际影城'],
				shopping:['周至核桃','秦岭土蜂蜜','周至山茱萸','秦铜车马仿制品','“秦亲宝贝”Q版兵马俑',
				'陶哨','柳编','扎染','甘草','天麻'],
			}
},
}
</script>