<template>
	<div class="recommend">
		<h3 id="title" @click="$router.push('/detail')">旅行推荐</h3>
		<div class="main">
			<div class="rec-left">
				<div v-for="(v,k) of booksLeft" :key="k" @click="more">
					<div class="rec-img">
						<img :src="v.img">
						<div class="rec-intro" v-html="v.intro"></div>
					</div>
					<div v-html="v.introduce" class="rec-introduce"></div>
				</div>
			</div>
			<div class="rec-right">
				<div v-for="(v,k) of booksRight" :key="k" class="rec-img">
					<img :src="v.img">
					<div class="rec-intro"  v-html="v.intro"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	.recommend .main, .recommend .rec-right{
		display: flex;
	}
	.recommend #title{
		padding-left:10px ;
		cursor: pointer;
	}
	.recommend .rec-left>div{
		width:500px;
		display: flex;
	}
	.recommend .rec-right{
		flex-wrap: wrap;
	}
	.recommend .rec-img{
		box-sizing: border-box;
		width: 350px;
		height: 240px;
		padding: 10px;
		position: relative;
	}
	.recommend .rec-img>img{
		width: 100%;height: 100%;
	}
	.recommend .rec-img>.rec-intro{
		position: absolute;
		background: #0006;
		overflow: hidden;
		top: 10px;left: 10px;bottom: 10px;right: 10px;
		color: #afafaf;
		display: none;padding: 25px;
		text-align: center;
		line-height: 3;
		font-size: 40px;
		cursor:default;
	}
	.recommend .rec-img:hover>.rec-intro{
		display: block;
	}
	.recommend .rec-img>.rec-intro>button{
		background: #0000;
		border: 0;outline: 0;
		display: block;margin: 0 auto;
		cursor: pointer;font-size: 20px;
		color: #cdcdcd;
	}
	.recommend .rec-left .rec-introduce{
		width: 150px;
		overflow: hidden;
		height: 230px;
		padding: 15px 0;
		box-sizing: border-box;
		font-size: 14px;
		color: #616161;
	}
</style>
<script>
export default {
	data(){
		return {
			booksLeft:[
				{
					img:"/img/recommend/not_sleep.jpg",
					introduce:`<div>看过了城墙上的落日，走过象征盛唐的大雁塔，便出现了大唐不夜城这展现盛唐风情的现世古都，它是国风古韵极致的缩影。</div>
					<div>
					傍晚的大唐不夜城，即将呈现它不可方物的绝美风采。仿佛梦回长安，
					时空交错，身着汉服的女生们穿梭而过，置身于盛唐的夜色之中，盛世光景已然穿越千年</div>`,
					intro:`<div>大唐不夜城</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/terra_cotta.png",
					introduce:`<div>千古一帝秦始皇，带着满腔英豪之气取“三皇五帝”之“皇帝”，衣袖长挥，君临天下。可惜君心愈大，贪心愈大。长城、阿房宫、兵马俑……他的荣华成了人民的苦难！</div>
					<div>看看空旷的秦始皇兵马俑的广场，冷清寂静深远，看着我沸腾的血液在脉管中奔腾。古人创造的伟大奇迹，我们古人的伟大智慧，让这个震惊世界的璀璨文化让更多的人知道，让更多的人了解我们的辉煌历史，了解我们先祖的古老文明。这是我们中华民族的骄傲，这是我们炎黄子孙的骄傲！</div>`,
					intro:`<div>秦始皇陵</div>
					<button>查看更多</button>`
				}
			],
			booksRight:[
				{
					img:"/img/recommend/huaqing_palace.jpg",
					intro:`<div>华清宫</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/lotus.jpg",
					intro:`<div>大唐芙蓉园</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/city_wall.jpg",
					intro:`<div>西安城墙</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/daming_place.jpg",
					intro:`</div>大明宫</div>
					<button>查看更多</button>`
				},
			]
		}
	},
	methods:{
		more(e){
			if(e.target.nodeName=="BUTTON"){
				this.$router.push("/details")
			}
		}
	}
}
</script>