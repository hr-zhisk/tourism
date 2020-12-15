<template>
	<div class="header-top">
		<div class="box-top">
			<p>你好！欢迎访问西安旅游网~！</p>
			<p>
				<router-link to="/login">登录</router-link> |
				<router-link to="/register">注册</router-link>
			</p>
		</div>
		<div class="box-bottom">
			<router-link to="/">
				<img src="/img/index/logo-new.png">
			</router-link>
			<ul class="channel-list">
				<li @mouseenter="showList" @mouseleave="closeList">
					<router-link to="/">首页</router-link>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="1">
					<router-link to="/developing">旅游咨询</router-link>
					<ul v-show="showlist==1"> 
						<li>旅游头条</li> 
						<li>景区资讯</li>
						<li>酒店动态</li>
						<li>旅行促销</li> 
						<li>美食推荐</li> 
						<li>惠购西安</li> 
						<li>动感城市</li>
						<li>专题活动</li> 
					</ul>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="2">
					<router-link to="/developing">探秘西安</router-link>
					<ul v-show="showlist==2">
						<li>西安简介</li>
						<li>历史沿革</li>
						<li>地理环境</li>
						<li>行政规划</li>
						<li>西安文化</li>
						<li>标识西安</li>
						<li>精美图库</li>
						<li>全景赏析</li>
						<li>视频漫游</li>
					</ul>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="3">
					<router-link to="/developing">玩转西安</router-link>
					<ul v-show="showlist==3">
						<li>美食</li>
						<li>游玩</li>
						<li>住宿</li>
						<li>欢乐</li>
						<li>地图</li>
						<li>预定</li>
					</ul>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="4">
					<router-link to="/developing">主体活动</router-link>
					<ul v-show="showlist==4">
						<li>国庆浪起来</li>
						<li>中国年·看西安</li>
						<li>云游西安</li>
						<li>长安夜·我的夜</li>
						<li>非遗匠心暖全城</li>
					</ul>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="5">
					<router-link to="/developing">旅游攻略</router-link>
					<ul  v-show="showlist==5">
						<li>精品线路</li>
						<li>主题旅游</li>
						<li>秦人天下</li>
						<li>旅游攻略</li>
					</ul>
				</li>
				<li @mouseenter="showList" @mouseleave="closeList" data-show="6">
					<router-link to="/developing">旅游帮助</router-link>
					<ul  v-show="showlist==6">
						<li>天气查询</li>
						<li>旅行社查询</li>
						<li>温馨提示</li>
						<li>法律法规</li>
						<li>旅游咨询</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			showlist:0
		}
	},
	methods: {
		showList(e){
			this.showlist=e.target.dataset.show;
		},
		closeList(){
			this.showlist=0
		}
	},
}
</script>
<style>
	.header-top .box-top,.header-top .box-bottom{
		display: flex;
		justify-content: space-between;
	}
	.header-top .box-top{
		background-color: #f4f4f4;
	}
	.header-top .box-top p{
		padding:0px 10px;
	}
	.header-top .box-bottom{
		margin-top: 24px;
		padding-left: 30px;
		background: #f4f4f4;
	}
	.header-top .channel-list{
		list-style: none;
		position: relative;
		display: flex;
		width:65%;
		margin: 0;
		padding: 0;
		padding-top:12px;
		justify-content: space-evenly;
	}
	.header-top .channel-list>li:hover{
		background: #ebc1818e;
	}
	.header-top .channel-list>li>a{
		display: inline-block;
		height: 42px;
		font-size: 20px;
		line-height: 42px;
		width: 85px;
		text-align: center;
		color: #2c3e50;
	}
	.header-top .channel-list>li>ul{
		position:absolute;
		list-style:none;
		padding: 0;
		width: 120px;
		margin-left:-20px ;
		z-index: 480;
		background: #f4f4f4;
	}
	.header-top .channel-list>li>ul>li{
		font-size: 15px;color: #2c3e50;
		text-align: center;
		padding:5px 0;
		cursor: pointer;
	}
	.header-top .channel-list>li>ul>li:hover{
		color: #d63434;
	}
</style>