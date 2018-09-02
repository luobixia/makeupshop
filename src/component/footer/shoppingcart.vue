	<template>
		<main>
			<div class="discount">	
				<div class="">
					<div class="discount-title">
						<div class="return-step" @click="restep"></div>
						<div class="week-discount">购物车</div>
						<div class="ell">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div class="warn">
						<i class="left"></i>
						<span>由于安检升级，接到快递公司通知，已禁
						止收寄发往新疆地区的包裹，
						故即日起上述地区暂停发货，具体发货时间另行通知，
						给您造成的不便，敬请谅解。</span>
						<i class="right"></i>
					</div>
				</div>
			</div>
			<div class="myshopping">
				<div class="shopping-left">
					<label for="">
						<input class="on" type="checkbox" checked="checked" >
						<em></em>
					</label>
					<img src="/static/1_n_06178_350x350.jpg" alt="">
				</div>
				<div class="shopping-right">
					<span class="sr-detail">SEPHORACOLLECTION丝芙兰超薄化妆棉</span>
					<span class="specifications">规格：180片</span>
					<div class="price">
						<span>￥29.00</span>
						<div class="number">
							<div class="number-con">
								<span>-</span>
								<span>1</span>
								<span>+</span>
							</div>
							<div class="edit">编辑</div>
						</div>
					</div>
				</div>
			</div>
			<div class="discount-paper">
				<span>优惠券</span>
				<em></em>
			</div>
			<div class="discount-paper">
				<span>输入优惠码</span>
				<em></em>
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
		import vfootershoppingcart from '../index/footershoppingcart.vue'
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
				'v-footer':vfootershoppingcart
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
	<style scoped>
		*{
			box-sizing: border-box;
		}
		img{
			display: block;
			width: 100%;
			height:auto;
		}
		.discount-title{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #eee;
			padding-top: 10px;
			padding-bottom: 10px;
		}
		.discount-title{
			flex:1;
		}
		.week-discount{
			flex-grow: 1;
			font-size: 1.2rem;
			text-align: center;
		}
		.warn{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			background: #ee0000;
			color: #fff;
			font-size: 0.7rem;
			align-items: center;
			padding-top: 8px;
			padding-bottom: 8px;
			margin-top: 11px;
		}
		.ell{
			display: flex;
			flex-direction: row;
			margin-left: 10px;
			height: 2rem;
			width: 4rem;
			align-items: center;
			justify-content: flex-end;
			margin-right: 8px;
		}
		.left{
			width: 6rem;
			height: 2rem;
			background: url(/static/NoticeOpenIcon.png) no-repeat;
			background-size: 100%;
			margin-left: 10px;
			margin-right: 10px;
		}
		.right{
			width: 3rem;
			height: 2rem;
			background-size: 100%;
			background: url(/static/NoticeCloseIcon.png) no-repeat  center center;
			margin-left: 10px;
			margin-right: 10px;
		}
		input{
			width: 15px;
			height: 15px;
			display: inline-block;
		}
		.myshopping{
			display: flex;
			padding-left:12px;
			padding-right: 12px;
			flex-wrap: nowrap;
			margin-top: 20px;
			padding-bottom: 8px;
			border-bottom:11px solid #eee;
		}
		.shopping-left{
			display: flex;
			align-items: center;
			width: 30%;
		}
		.shopping-left img{
			
		}
		.shopping-right{
			width:70%;
			display: flex;
			flex-direction: column;
			font-size: 0.8rem;
			padding-left: 30px;
		}
		.specifications{
			color:#9d9d9d;
			margin-top: 20px;
			margin-bottom: 34px;
		}
		.price{
			display: flex;
			justify-content: space-between;
			margin-right: 10px;
		}
		.price>span{
			font-size: 0.4rem;
		}
		.number-con{
			display: flex;
			border:1px solid #eee;
		}
		.number-con>span{
			width:1.5rem;
			height: 1.5rem;
			line-height: 1.5rem;
			text-align: center;
			background: #fff;
			display: inline-block;
		}
		.number-con span:nth-child(1){
			border-right:1px solid #eee;
		}
		.number-con span:nth-child(2){
			border-right:1px solid #eee;
			width:2.5rem;
		}
		.number{
			display: flex;
			flex-direction: column;
			
		}
		.edit{
			color:#9d9d9d;
			margin-left: 63px;
			margin-top: 8px;
		}
		.return-step{
			margin-right:10px;
			height: 2rem;
			width: 2rem;
			background:url(/static/goback.png) no-repeat;
			background-size:100%;
			margin-left: 15px;	
		}
		.discount-paper{
			display: flex;
			justify-content: space-between;
			font-size: 1.0rem;
			align-items: center;
			padding:15px 12px ;
			border-bottom:12px solid #eee;
		}
		.discount-paper em{
			background: url(/static/checkout_sprite.png) -419px -523px;
			display: inline-block;
			width: 18px;
			height: 21px;
			margin-left: 12px;
			vertical-align: middle;
			
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