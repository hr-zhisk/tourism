<template>
	<div class="recommend">
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
</template>
<style>
	.recommend, .recommend .rec-right{
		display: flex;
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
		font-size: 12px;
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
					intro:`<div>唐不夜城以盛唐文化为背景，以唐风元素为主线 ，建有大雁塔北广场、玄奘广场、贞观广场、创领新时代广场四大广场，西安音乐厅、陕西大剧院、西安美术馆、曲江太平洋电影城等四大文化场馆，大唐佛文化、大唐群英谱、贞观之治、武后行从、开元盛世等五大文化雕塑，是西安唐文化展示和体验的首选之地</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/terra_cotta.png",
					introduce:`<div>千古一帝秦始皇，带着满腔英豪之气取“三皇五帝”之“皇帝”，衣袖长挥，君临天下。可惜君心愈大，贪心愈大。长城、阿房宫、兵马俑……他的荣华成了人民的苦难！</div>
					<div>看看空旷的秦始皇兵马俑的广场，冷清寂静深远，看着我沸腾的血液在脉管中奔腾。古人创造的伟大奇迹，我们古人的伟大智慧，让这个震惊世界的璀璨文化让更多的人知道，让更多的人了解我们的辉煌历史，了解我们先祖的古老文明。这是我们中华民族的骄傲，这是我们炎黄子孙的骄傲！</div>
					`,
					intro:`<div>秦始皇帝陵博物院是以秦始皇兵马俑博物馆为基础，以秦始皇帝陵遗址公园(丽山园)为依托的一座大型遗址博物院;也是以秦始皇帝陵及其众多陪葬坑为主体，基于考古遗址本体及其环境的保护与展示，融合了教育、科研、游览、休闲等多项功能的公共文化空间。</div>
					<button>查看更多</button>`
				}
			],
			booksRight:[
				{
					img:"/img/recommend/huaqing_palace.jpg",
					intro:`<div>唐华清宫，后也称"华清池"，包括原骊山国家森林公园，与颐和园、圆明园、承德避暑山庄并称为中国四大皇家园林。与"世界第八大奇迹"兵马俑相邻。华清宫是国家首批5A级旅游景区、全国重点风景名胜区、国家地质森林公园。因其亘古不变的温泉资源、烽火戏诸侯的历史典故、唐明皇与杨贵妃的爱情故事、"西安事变"发生地而享誉海内外，成为中国唐宫文化旅游标志性景区。</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/lotus.jpg",
					intro:`<div>大唐芙蓉园位于陕西省西安市城南的曲江开发区，大雁塔东南侧，它是在原唐代芙蓉园遗址以北，是中国第一个全方位展示盛唐风貌的大型皇家园林式文化主题公园，占地面积一千亩，其中水域面积三百亩。
					园内建有紫云楼、仕女馆、御宴宫、杏园、芳林苑、凤鸣九天剧院、唐市等许多仿古建筑，是中国最大的仿唐皇家建筑群，景区由中国工程院院士张锦秋担纲总体规划和建筑设计。</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/city_wall.jpg",
					intro:`<div>西安城墙，这座世界上历史最悠久、保存最完整的古代城垣建筑，延续了整个古都长安的历史文脉，并以其独特的魅力向世人绽放着她的恢弘、壮丽和博大，向世界展示着古都的深邃、智慧和兼容并蓄。</div>
					<div>
					西安城墙周长13.74千米，包括护城河、吊桥、闸楼、箭楼、城楼、角楼、敌楼、女儿墙、垛口等一系列军事设施。“墙林河路巷”五位一体，有机地成为西安这座具有历史文化特色的国际化大都市重要的地标符号和精神家园。现为国家首批重点保护文物和AAAA级旅游景区。</div>
					<button>查看更多</button>`
				},
				{
					img:"/img/recommend/daming_place.jpg",
					intro:`</div>大明宫国家遗址公园是世界文化遗产，全国重点文物保护单位。位于陕西省西安市太华南路，大明宫地处长安城北部的龙首原上，始建于唐太宗贞观八年(634年)，平面略呈梯形。</div>
					<div>
					大明宫是唐帝国最宏伟壮丽的宫殿建筑群，也是当时世界上面积最大的宫殿建筑群，是唐朝的国家象征，大明宫初建于唐太宗贞观八年，毁于唐末，面积3.2平方公里。</div>
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