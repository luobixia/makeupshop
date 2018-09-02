
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
				<div class="search-pos-bottom">
					<div class="comprehensive">
						<span>综合</span>
						<em></em>
					</div>
					<div class="salesvolume">
						<span>销量</span>
					</div>
					<div class="spb-price">
						<span>价格</span>
						<em></em>
					</div>
					<div class="screen">
						<span>筛选</span>
					</div>
					<div class="vipcode"></div>
				</div>
			</div>
			<div class="content">
				<div class="gift-con">
					<ul class="gift-con-list" v-for="v in msg.comment">
						<li  class="gift-border-right">
							<a href="">
								<div class="gc-box">
									<img :src="v.img" alt="">
									<em></em>
								</div>
								<div class="gs-detail">
									<span class="new-product">新品</span>
									<span class="vip">尊享</span>
								</div>
								<div class="gift-detail">
									<span class="gf-pro-title">{{v.title}}</span>
									<span class="gf-pro-detail">{{v.detail}}</span>
									<span class="gf-pro-price"><i>￥</i>{{v.price|add}}</span>
								</div>
							</a>
						</li>
						<li  >
							<a href="">
								<div class="gc-box">
									<img :src="v.img1" alt="">
									<em></em>
								</div>
								<div class="gs-detail">
									<span class="new-product">新品</span>
									<span class="vip">尊享</span>
								</div>
								<div class="gift-detail">
									<span class="gf-pro-title">{{v.title1}}</span>
									<span class="gf-pro-detail">{{v.detail1}}</span>
									<span class="gf-pro-price"><i>￥</i>{{v.price1|add}}</span>
								</div>
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
						var url="/static/data/exclusivesale.json";
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
							return n+'.00';
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
			margin: 55px 15px 84px 15px;	
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
		.search-pos-bottom{
			display:flex;
			flex-direction:wrap;
			justify-content: space-around;
			font-size: 1.0rem;
			border-top: 1px solid #eee;
			margin-top: 8px;
		}
		.search-pos-bottom>div{
			padding:10px 15px;
		}
		.vipcode{
			background: url(/static/vipcode.png) no-repeat center center;
			background-size: 100%;
		}
		.comprehensive{
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.comprehensive em{
			background:url(/static/categorypage.png) -457px -466px no-repeat;
			display: block;
			width: 10px;
			height: 10px;
			margin-left: 8px;
		}
		.spb-price{
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			align-items: center;
		}
		.spb-price em{
			background:url(/static/categorypage.png) -492px -354px no-repeat;
			display: block;
			width: 10px;
			height: 20px;
			margin-left: 8px;
		}
		.gift-con a{
			text-decoration: none;
			color:#474747;
		}
		.gift-con-list{
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
		}
		.gift-con-list li{
			width:50%;
			padding:7px;
			border-bottom: 1px solid #eee;
		}
		.new-product{
			background: #ee0105;
			padding: 2px 4px;
			color: #fff;
			font-size: 0.6rem;
		}
		.vip{
			background:#2dbeff;
			color:#fff;
			padding: 2px 4px;
			margin-left: 4px;
			font-size: 0.6rem;
		}
		.gift-detail{
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
		}
		.gf-pro-detail{
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 0.9rem;
		}
		.gf-pro-title{
			font-weight: bold;
			font-size: o.6rem;
			font-size: 0.5rem;
			color: #000;
		}
		.gf-pro-price i{
			font-style:normal;
			font-size: 0.4rem;
		}
		.gift-border-right{
			border-right: 1px solid #eee;
		}
	</style>