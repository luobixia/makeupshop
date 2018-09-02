
	<template>
		<main>
			<div class="search-pos">
				<div class="make-up-search">
					<div class="return-step" @click="restep"></div>
					<div class="search-con">
						<i class="search-icon"></i>
						<p class="search-value">多效眼部护理</p>
					</div>
					<div class="login">登录</div>
				</div>
			</div>
			<div class="page-box-left">
				<ul class="make-up-page">
					<li>
						<router-link to="/skin-care" >护肤</router-link>
					</li>
					<li>
						<router-link to="/colour-makeup">彩妆</router-link>
					</li>
					<li>
						<router-link to="/perfume" >香水</router-link>
					</li>
					<li>
						<router-link to="/tool" class="mk-active">工具</router-link>
					</li>
					<li>
						<router-link to="/man-skin-care">男士护肤</router-link>
					</li>
					<li>
						<router-link to="/body-wash">洗浴护体</router-link>
					</li>
					<li>
						<router-link to="/haircut">美发护发</router-link>
					</li>
					<li>
						<router-link to="/gift">礼物套装</router-link>
					</li>
					<li>
						<router-link to="/exclusivesale">独家发售</router-link>
					</li>
				</ul>
			</div>
			<div class="content">
				<div class="title-pic">
					<img src="/static/tool.jpg" alt="">
				</div>
				<div class="make-up-remover-box" v-for="v in msg.T1348648517839">
					<div class="title-make-up-remover-box">
						<div class="make-up-remover">{{v.title}}</div>
						<em class="make-up-go"></em>
					</div>
					<ul class="mkr-tool" >
						<li v-for="i in v.oli">
							<a>
								<img :src="i.imgsrc" alt="">
								<p>{{i.detail}}</p>
							</a>
						</li>
						
					</ul>
				</div>
				
			</div>
			<v-footer></v-footer>
		</main>
	</template>
	<script>
		import vfooter from '../index/footerhot.vue';
		export default{
			data(){
				return{
					msg:{}
				}
			},
			methods:{
				restep(){
					this.$router.go(-1);
				}
			},
			components:{
				'v-footer':vfooter
			},
			mounted:function(){
				console.log("---------------------")
						var url="/static/data/tool.json";
						this.$axios.get(url)
						.then((response)=>{
							console.log("---------------------"+response)
							this.msg=response.data;
						})
						.catch((error)=>{
							console.log(error)
						})
					},
					filters:{
						'add':function(n){
							return '￥'+n;
						}
					}
		}
	</script>
	<style scoped>
		*{
			box-sizing:border-box;
		}
		img{
			width:100%;
			height:auto;
			display:block;
		}
		.search-pos{
			position: fixed;
			top:0px;
			left: 0px;
			width:100%;
			border-bottom:1px solid #eee;
			padding-top: 7px;
			padding-bottom:5px;
			background: #fff;
			z-index: 10;
		}
		.make-up-search{
			display:flex;
			flex-direction:row;
			flex-wrap:nowrap;
			justify-content: space-around;
		}
		.return-step{
			margin-right:10px;
			height: 2rem;
			width: 2rem;
			background:url(/static/goback.png) no-repeat;
			background-size:100%;
			margin-left: 15px;
			
		}
		.search-con{
			flex-grow:1;
			background:#eee;
			height:2rem;
			border-radius:45px;
			display:flex;
			align-items:center;
		}
		.login{
			text-align: center;
			line-height: 2rem;
			margin-left:15px;
			margin-right:15px;
			font-size:0.9rem;
		}
		.search-icon{
			width:1.5rem;
			height:1.5rem;
			background: url(/static/search.png) no-repeat;
			background-size:100%;
			margin-left: 15px;
			margin-right: 15px;
		}
		.search-value{
			font-size:0.9rem;
			color:#666666;
		}
		.page-box-left{
			float: left;
			display: flex;
			flex-direction: column;
			margin-top: 20px;
			height: 1298px;
			background: #eee;
			overflow: scroll;
			min-height: 100%;
			position: fixed;
			left: 0px;
			top: 23px;
			border-right: 1px solid #eee;
		}
		.page-box-right{
			width:100px;
			height:100px;
			background:red;
			float:right;
		}
		.make-up-page a{
			text-decoration: none;
			display: block;
			padding:20px 20px;
			text-align: center;
			color:#333;
			
		}
		.make-up-page .mk-active{
			color:#e00;
			background: #fff;
		}
		
		.content{
			float:left;
			height:100px;
			z-index: 100;
			margin: 55px 15px 84px 119px;
			
		}
		.make-up-remover-box{
			margin-top: 10px;
		}
		.title-make-up-remover-box{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-top: 15px;
		}
		.make-up-remover{
			color:#666;
		}
		.make-up-go{
			display: block;
			width: 16px;
			height: 15px;
			background: url(/static/ccc.png)  no-repeat;
			background-size: 100%;
		}
		.mkr-tool{
			display: flex;
			flex-direction: row;
			flex-wrap:wrap;
			border-bottom: 1px solid #eee;
			padding-bottom:10px;
			margin-top: 20px;
		}
		.mkr-tool li{
			width:33.33%;
			text-align: center;
			padding: 10px;
		}
		.mkr-tool a{
			color:#666;
			font-size: 0.2rem;
		}
	</style>