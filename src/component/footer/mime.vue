	<template>
		<main style="margin-bottom: 500px;">
			<div class="my">
				<div class="my-title">
					<div class="my-makeup">
						我的美妆妆
						<span>退出</span>
					</div>
				</div>
				<div class="my-logo">
					<img class="my-pic" src="/static/userImg.png" alt="">
					<span class="phone-number">134****2476</span>
					<div class="integral-box">
						<div class="vip-integral">
							<span>0</span>
							<span>会员积分</span>
						</div>
						<div class="watch">
							<span>查看</span>
							<span>个人信息</span>
						</div>
						<div class="coupon">
							<span>一张</span>
							<span>优惠券</span>
						</div>
					</div>
					<div class="vip-card">
						<span></span>
						<div class="pink">
							<span></span>
							<span>
								<span></span><i class="pink-right"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="my-order-doing">
				<div class="my-order">
					<div class="order-top">
						<div class="ot-left">我的订单</div>
						<div class="ot-right">
							<span>所有订单</span>
							<span></span>
						</div>
					</div>
					<div class="order-bottom">
						<div class="pay">
							<span></span>
							<span>待支付</span>
						</div>
						<div class="doing">
							<span></span>
							<span>处理中</span>
						</div>
						<div class="setting">
							<span></span>
							<span>配送中</span>
						</div>
						<div class="finished">
							<span></span>
							<span>已完成</span>
						</div>
					</div>
			</div>
			</div>
			<div class="business">
				<div class="business-con">
					<a href="">
						<div class="address">
							<span></span>
							<span>地址管理</span>
						</div>
					</a>
					<a href="">
						<div class="customer-service">
							<span></span>
							<span>地址管理</span>
						</div>
					</a>
					<a href="">
						<div class="help-center">
							<span></span>
							<span>帮助中心</span>
						</div>
					</a>
					<div></div>
					<div></div>
				</div>
			</div>
			<div class="like">
				<i class="like-left"></i>
				<em></em>
				<span>猜你喜欢</span>
				<i class="like-right"></i>
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
		import vfootermime from '../index/footermime.vue'
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
				'v-footer':vfootermime
			},
			mounted:function(){
				console.log("---------------------")
						var url="/static/data/gift.json";
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
	<style>
		*{
			box-sizing: border-box;
		}
		img{
			width:100%;
			height:auto;
			display: block;
		}
		.my-title{
			display: flex;
			flex-direction: row;
			padding:10px;
			align-content: center;
			border-bottom: 1px solid #eee;
		}
		.my-makeup{
			width:100%;
			text-align: center;
			position: relative;
			font-size: 1.2rem;
		}
		.my-makeup span{
			position: absolute;
			right:10px;
			color:#999;
			font-size:1.0rem;
		}
		.my-logo{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1.5rem;
			border-bottom: 73px solid #eee;
			position: relative;
			height:19rem;
		}
		.my-pic{
			margin-top: 20px;
			width: 15%;
			height:auto;
			border-radius: 50%;
		}
		.phone-number{
			margin-top: 20px;
		}
		/* vip优惠券 */
		.vip-integral span:nth-child(1){
			font-size: 1.0rem;
		}
		.vip-integral span:nth-child(2){
			font-size: 0.8rem;
			color:#999;
			margin-top: 5px;
		}
		.watch span:nth-child(1){
			font-size: 1.0rem;
		}
		.watch span:nth-child(2){
			font-size: 0.8rem;
			color:#999;
			margin-top: 5px;
		}
		.coupon span:nth-child(1){
			font-size: 1.0rem;
		}
		.coupon span:nth-child(2){
			font-size: 0.8rem;
			color:#999;
			margin-top: 5px;
		}
		.integral-box{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			width: 93%;
			margin-top: 30px;
			border-radius: 5px;
			padding-top: 25px;
			padding-bottom: 25px;
			box-shadow: 0 -10px 15px #ddd;
			border: .5px solid #ddd;
			position: absolute;
			bottom: -30px;
			z-index: 10;
			background: #fff;
		}
		.vip-integral{
			display: flex;
			flex-direction: column;
			text-align: center;
		}
		.watch{
			display: flex;
			flex-direction: column;
			text-align: center;
			
		}
		.coupon{
			display: flex;
			flex-direction: column;
			text-align: center;	
		}
		.vip-card{
			width:97%;
			height:5rem;
			background:url(/static/profile_card_pink.png) no-repeat;
			background-size: 100%;
			background-position: 0px -118px;
			margin-top: -24px;
			position: absolute;
			bottom:-78px;
		}
		.vip-card>span{
			width: 90%;
			height:1px;
			background: #eee;
		}
		.pink{
			position: absolute;
			bottom: 22px;
			color:#fff;
			font-size: 1.0rem;
			display: flex;
			left:5rem;
			width:76%;
			justify-content: space-between;
			display: flex;
			flex-direction: row;
			align-items: center;
			
		}
		.pink>span:nth-child(2){
			margin-right: 18px;
		}
		.pink-right{
			margin-left: 8px;
			display: inline-block;
			width: 16px;
			height: 18px;
			background:url(/static/profile_center_sprite.png) no-repeat -387px -13px;
		}
		.order-top{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between;
			margin-left: 30px;
			margin-right: 30px;
			margin-top: 17px;
			border-bottom: 1px solid #eee;
			padding-bottom: 10px;
		}
		.ot-right{
			display: flex;
			align-items: center;
			color:#999;
		}
		.ot-right span:nth-child(2){
			display: block;
			width: 16px;
			height: 15px;
			margin-left: 8px;
			background: url(/static/ccc.png) no-repeat;
			background-size: 100%;
		}
		.order-bottom{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding-top: 10px;
			font-size:0.8rem;
			text-align: center;
			color:#999;
			padding-bottom: 10px;
			border-bottom: 1px solid #eee;
		}
		.pay{
			display: flex;
			flex-direction: column;
		}
		.pay span:nth-child(1){
			display: block;
			width: 52px;
			height: 52px;
			background: url(/static/profile_center_sprite.png) -124px -7px no-repeat;
		}
		.doing span:nth-child(1){
			display: block;
			width: 52px;
			height: 52px;
			background: url(/static/profile_center_sprite.png) -185px -2px no-repeat;
		}
		.setting span:nth-child(1){
			display: block;
			width: 52px;
			height: 52px;
			background: url(/static/profile_center_sprite.png) -245px -2px no-repeat;
		}
		.finished  span:nth-child(1){
			display: block;
			width: 52px;
			height: 52px;
			background: url(/static/profile_center_sprite.png) -304px -2px no-repeat;
		}
		.my-order-doing{
			border:12px solid #eee;
		}
		.business{
			border:12px solid #eee;
		}
		.business-con{
			display: flex;
			flex-direction: row;
			padding-top: 17px;
			justify-content: space-between;
			padding-bottom: 10px;
		}
		.business-con a{
			display:block;
			width:100%;
			height:100%;
			text-decoration: none;
			color:#999;
		}
		.address,.customer-service,.help-center {
			text-align: center;
			background: #fff;
			display: flex;
			align-items: center;
			flex-direction: column;
		}
		.address  span:nth-child(1){
			display: inline-block;
			width: 81px;
			height: 83px;
			background:  url(/static/profile_center_sprite.png) 0px -59px no-repeat;
		}
		.address  span:nth-child(2),.customer-service  span:nth-child(2),.help-center  span:nth-child(2) {
			margin-top: 10px;
		}
		.customer-service  span:nth-child(1){
			display: inline-block;
			width: 81px;
			height: 83px;
			background:  url(/static/profile_center_sprite.png) -81px -59px no-repeat;
		}
		.help-center  span:nth-child(1){
			display: inline-block;
			width: 81px;
			height: 83px;
			background:  url(/static/profile_center_sprite.png) -162px -59px no-repeat;
		}
		.like{
			display: flex;
			background: #eee;
			justify-content: center;
			font-size: 1.0rem;
			align-items: center;
			padding-top:10px;
			padding-bottom: 20px;
		}
		.like em{
			margin-right: 10px;
			width: 42px;
			height: 35px;
			display: inline-block;
			background: url(/static/index_sprite.png) -559px -20px no-repeat;
		}
		.like-left{
			display: inline-block;
			height: 1px;
			width: 65px;
			background: #e9e9e9;
			margin-right: 10px;
		}
		.like-right{
			display: inline-block;
			height: 1px;
			width: 65px;
			background: #e9e9e9;
			margin-left: 10px;
		}
		.content{
			float:left;
			height:100px;
			z-index: 100;
			margin: 0px 15px 84px 15px;
			margin-bottom: 20rem;
		}
		.content img{
			width:82%;
			height:auto;
			display: block;
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
			background:#000;
			color:#eec632;
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
		.gs-detail{
			margin-left: 10px;
		}
		.gift-detail{
			margin-left: 10px;
		}
	</style>