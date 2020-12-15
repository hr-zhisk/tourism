<template>
  <div class="culture">
    <h3 class="culturetitle">
        <router-link to="javascript:;">特色文化</router-link>        
    </h3>
    <div class="wh1" v-for="(val,i) of culture" :key="i">
      <div class="wh-1 fl">
          <router-link to="#"><img :src="val.img"></router-link>       
        <div class="wh-1-text">
          <h4>
						<span v-text="val.title"></span>
          </h4>
          <div v-text="val.intro"></div>
        </div>
      </div>
      <div class="wh-2 fl">
        <div class="wh-2-text">
          <h4>
				<span v-text="val.title"></span>
          </h4>
				<div v-html="val.introduction" class="wh-3"></div>
        </div>
				<router-link to="javascript:;">阅读更多</router-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			culture:[
				{
					id:1,title:"历史文化",img:"/img/index/history.jpg",
					intro:"西安这座城，吹过的风都是文化，踩的地全是历史————",
					introduction:"历史上有周、秦、汉、隋、唐等在内的13个朝代在此建都，是世界四大古都之一，曾经作为中国首都和政治、经济、文化中心长达1100多年。早在100万年前，蓝田古人类就在这里建造了聚落；7000年前的仰韶文化时期，这里已经出现了城垣的雏形；2008年，西安高陵杨官寨出土距今6000余年的新石器时代晚期城市遗迹，被选为当年中国考古发现之首，这是中国发现的迄今最早的城市遗址，也将西安地区城市历史推进到6000多年前的新石器时代晚期。建国以来，世界上已经有200多位国家首脑和政要访问古都西安，包括联合国秘书长、美国总统、俄罗斯总统、德国总理、法国总统、英国女王、日本天皇、韩国总统等。</西安这座城，吹过的风都是文化，踩的地全是历史————><p>汉长安城位于渭河以南的关中平原上，面积约36平方公里。在西汉时期，作为首都的长安城一直是全国的政治、经济和文化中心，也是中国历史上第一座规模庞大、居民众多的城市。汉长安是在秦咸阳遗址基础上建立起来的，《史记》：“汉长安，秦咸阳也”，张衡《西京赋》云：西汉长安“乃览秦制，跨周法”，《三辅黄图·序》也云：“武昭，治咸阳，因以汉都”。《旧唐书 地理志》说：“京师，故秦之咸阳，汉之长安也。”秦咸阳从惠文王以后，就不断向南扩展，在渭河以南修建了章台、兴乐宫、甘泉宫、信宫、阿房宫及七庙等建筑。刘邦夺得天下后，经娄敬、张良等的劝说，建都长安。修缮秦的兴乐宫而改为长乐宫，在秦章台基础上建未央宫。即汉长安城是在秦都咸阳基础上建立的，说明在都城选址上是汉承秦制的。 汉朝宫阙均在今西安市汉城保护区内，位于北二环以北，而汉代的武帝文帝景帝陵墓，在今咸阳市境内。丝绸之路开通后，长安成为东方文明的中心，史称“西有罗马，东有长安”。</p>"
				},
				{
					id:2,title:"人文遗产",img:"/img/index/folk-custom.jpg",
					intro:"非遗在陕西——",
					introduction:`<p>关中bai道情皮影戏是关中du道情演唱形式之一，zhi与普通的皮影戏dao不同，在zhuan陕西只有一家，shu独具风格。它是以皮影为形式，以伴奏唱为主的演出剧组。临潼关中道情皮影戏历史悠久，2007年5月，列入陕西省非物质文化遗产名录。2008年6月，被选定为西安市非物质文化遗产。
					关中道情以皮影戏的演唱形式出现，大约在清朝乾隆时期(1736—1795)。期间，西安与关中其他地区出现了专演道情戏的班社，并能够演出故事情节完整、人物形象鲜明的大型剧目，像《五果争仙》《石佛衣》等。关中道情在围桌坐唱和广场踏席阶段没有打击乐器，只用渔鼓、简板和三才板击节，艺人们有“顶天立地的渔鼓，降龙伏虎的简板”的美称。</p><p>凤翔彩塑是一种民间工艺美术品。它是将粘土和纸浆搅拌成塑泥，先制好模子，翻成胎胚凉干，上白色底粉，随后涂彩，绘画和上光即成。泥塑大都是空心圆塑体，也有浮雕式的挂件，既是儿童喜爱的玩具，也是陕西的旅游纪念品。</p>`
				},
				{
					id:3,title:"红色文化",img:"/img/index/red_spilt.jpg",
					intro:"“西安事变”和平解决，一致对外————",
					introduction:"<p>西安事变，又称“双十二事变”，是1936年12月12日张学良和杨虎城为bai了达到劝谏蒋介石改变“攘外必先安内”的既定国策，停止内战，一致抗日的目的，在西安发动“兵谏”的历史事件。</p><p>西安事变及其和平解决在中国社会发展中占有重要的历史地位，为中国社会的发展起到了无可替代的作用。它的发生及和平解决，基本结束了长达十年的内战，开始了国共两党第二次合作，一致抗日的新阶段，促成了抗日民族统一战线的建立，极大地鼓舞了中国人民的抗日热情，奠定了全民族抗战的基础，成为由国内战争走向抗日民族战争的转折点，成为时局转换的枢纽。</p>"
				},
				{
					id:4,title:"丝路之旅",img:"/img/index/silk.jpg",
					intro:"大美丝绸之路之西安————",
					introduction:`<p>古韵西安 梦回长安</p>
												<p>远方，身未至，而心向往。</p>
												<p>跨越时空，远方是人类追逐的永恒梦想。</p>
												<p>翻阅史册，远方是推动文明进步的力量。</p>
												<p>公元前138年，一支驼队走向大漠，探索中国的远方。</p>
												<p>两千多年来，一条丝路横贯中西，驼铃晃动耀世光芒。</p>
												<p>这是你我熟知的远方，这是你我陌生的远方。</p>
												<p>太多的神话、传奇、隐秘，缔造了它浪漫的瑰丽。</p>
												<p>它挑逗着我们的勇气，它延伸着我们的无限想象。</p>
												<p>让我们去远方，带着一双善于发现的眼睛。</p>
												<p>让我们去远方，带着一颗好奇而敏感的心。</p>
												<p>进行一次修行，与历史相遇，与古人对话。</p>
												<p>让我们在远方，见自己见天下见众生。</p>`
				}
			]
		}
	}
};
</script>

<style>

.culture {
    width: 1200px;
    height: 800px;
    border: 10px solid #F7F1DF;
    padding: 20px;
}
.culture .culturetitle {
    text-align: center;
    font-size: 30px;
}
.culture .wh1 .fl {
	float: left;
	margin: 5px;
	width: 270px;
	height: 305px; 
}
.culture .wh1 .fl img{
    width: 270px;
    height: 200px;
}
.culture .wh1 .fl .wh-1-text  {
    background-color: #F3EACE;
	text-align: left;
	
}
.culture .wh1 .fl .wh-1-text h4  {
    margin-top:20px;
    text-align: center;
    color: #aff4ff;
}

.culture .wh1  .read-more{
    background-color: #F3EACE;
    padding-right: 15px;
    float: right;
}
.culture .wh-2 {
    background-color: #F7F1DF;
	font-size: 10px;
}
.culture .wh1 .fl .wh-2-text h4 {
    margin-top:35px;
    margin-right: 30px;
    color: #aff4ff;
} 
.culture .wh1 .fl {
    margin-top: 29px;
}
.wh-2-text div{
	overflow: hidden;
	height:236px;
}
a{
	color:#dad;
}
.wh-1-text{
	height: 80px;
}
.wh-3> p{
	margin: 0px;
}
h4{
	margin: 0px;
}
</style>