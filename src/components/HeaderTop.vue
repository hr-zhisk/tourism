<template>
	<div class="header">
		<div class="box-top">
			<p>你好！欢迎访问西安旅游网~！</p>
			<p>
				<router-link to="javascript:;">登录</router-link>
				<router-link to="javascript:;">注册</router-link>
			</p>
		</div>
		<div>
			<router-link to="/">
				<img src="/img/index/logo-new.png">
			</router-link>
			<ul class="channel-list">
				<li>首页</li>
				<li>
					<router-link to="/developing">旅游咨询</router-link>
					<ul> 
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
				<li>
					<router-link to="/developing">探秘西安</router-link>
					<ul>
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
				<li>
					<router-link to="/developing">玩转西安</router-link>
					<ul>
						<li>美食</li>
						<li>游玩</li>
						<li>住宿</li>
						<li>欢乐</li>
						<li>地图</li>
						<li>预定</li>
					</ul>
				</li>
				<li>
					<router-link to="/developing">主体活动</router-link>
					<ul>
						<li>国庆浪起来</li>
						<li>中国年·看西安</li>
						<li>云游西安</li>
						<li>长安夜·我的夜</li>
						<li>非遗匠心暖全城</li>
					</ul>
				</li>
				<li>
					<router-link to="/developing">旅游攻略</router-link>
					<ul>
						<li>精品线路</li>
						<li>主题旅游</li>
						<li>秦人天下</li>
						<li>旅游攻略</li>
					</ul>
				</li>
				<li>
					<router-link to="/developing">旅游帮助</router-link>
					<ul>
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