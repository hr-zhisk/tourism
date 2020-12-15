<template>
	<div class="carousel" @mouseenter="carenter" @mouseleave="carleave">
				<figure style="transform-origin: 50% 50% -1158.82px;" :style="Fstyle">
						<img src="img/index/banner1.png" style="padding: 20px;">
						<img src="img/index/banner2.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(0.785398rad);">
						<img src="img/index/banner3.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(1.5708rad);">
						<img src="img/index/banner4.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(2.35619rad);">
						<img src="img/index/banner1.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(3.14159rad);">
						<img src="img/index/banner2.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(3.92699rad);">
						<img src="img/index/banner3.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(4.71239rad);">
						<img src="img/index/banner4.png" style="padding: 20px; transform-origin: 50% 50% -1158.82px; transform: rotateY(5.49779rad);">
				</figure>
				<nav @click="navclick" v-show="navdisplay">
						<button class="nav prev">&lt;</button>
						<button class="nav next">&gt;</button>
				</nav>
				<div class="title">{{bannermessage[currImage%4].subject}}</div>
		</div>
</template>


<script>
export default {
		data(){
				return{
						bannermessage:[
								{id:1,subject:'舟游列岛 丝路相会——2020舟山群岛文旅推介会在西安成功举办'},
								{id:2,subject:'西安美食文化节近日成功举办'},
								{id:3,subject:'好消息，即日起购牛背梁景区门票，2021年4月30前不限次数免费畅游~'},
								{id:4,subject:'太白山景区12月5日停票公告'}
						],
						Fstyle:{
								transform: 'rotateY(0rad)'},
						currImage:1,
						timer:"",
						navdisplay:false,
						busy:true
				}
		},
		methods:{
				 navclick(e){
						 e.stopPropagation();
						if (e.target.tagName.toUpperCase() != 'BUTTON') return;
						if (e.target.classList.contains('next')) {
												this.currImage++;
										} else {
												this.currImage--;
										}
				 },
				rotateCarousel(imageIndex){
						this.Fstyle=`transform :rotateY( ${imageIndex * -0.785398 }rad)`;
				},
				timelog(){
					this.currImage++

				},
				carenter(){
					this.navdisplay=true,
					this.busy=false,
					clearInterval(this.timer)
				},
				carleave(){
					this.navdisplay=false,
					this.busy=true,
					this.setI()
				} ,
				setI(){
						 if(this.busy=true)
						 {this.timer=setInterval(this.timelog,5000)}else {
						 clearInterval(this.timer)
						 this.timer=""
				 }
				}
		},
		watch:{
				currImage(Val){
					 this.rotateCarousel(Val)
				}
		},
		mounted(){
				if(this.busy=true)
					{this.timer=setInterval(this.timelog,5000)}else {
						 clearInterval(this.timer)
						 this.timer=""
				 }
		},
}
</script>


<style>
.carousel {
		margin-top: 100px;
	position: relative;
	width: 1200px;
	height: 527px;
		-webkit-perspective: 500px;
		perspective: 720px;
		overflow: hidden;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
}

.carousel>* {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
}

.carousel figure {
		margin: 0;
		width: 80%;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transition: -webkit-transform 0.5s;
		transition: -webkit-transform 0.5s;
		transition: transform 0.5s;
		transition: transform 0.5s, -webkit-transform 0.5s;
	padding: 0px;
	margin: 0px;
}

.carousel figure img {
		width: 100%;
		box-sizing: border-box;
		padding: 0 0px;
}

.carousel figure img:not(:first-of-type) {
		position: absolute;
		left: 0;
		top: 0;
}

.carousel nav {

		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin: 20px 0 0;
}

.carousel nav button {
	overflow: hidden;
	height: 200px;
		width: 40px;
		-webkit-box-flex: 0;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		margin: 0 5px;
		cursor: pointer;
		background-color: rgba(0,0,0,.4);
		border: 1px solid transparent;
	outline: transparent;
	font-size: 50px;
	color: #fff;
	line-height: 200px;
}
.carousel nav  .prev{
	position: absolute;
	top: 163px;
	left: 135px;
	border-radius: 0px 20px 20px 0;
}
.carousel nav  .next{
	position: absolute;
	top: 163px;
	right: 135px;
	border-radius: 20px 0px 0px 20px;
}
.carousel .title {
		position: absolute;
		top: 435px;
		left: 150px;
		font-size: 30px;
		font-weight: 700;
}
</style>