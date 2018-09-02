	<template>
		<main>
		<v-header></v-header>
			<div class="choose-con" >
				<ul class="choose-list">
					<li>
						<img src="/static/sale.png">
						<span>潮流榜单</span>

					</li>
					<li>
						<img src="/static/office.png">
						<span>本周特惠</span>
					</li>
					<li>
						<img src="/static/daily.png">
						<span>每日惊喜</span>
					</li>
					<li>
						<img src="/static/new.png">
						<span>新品速递</span>
					</li>
					<li>
						<img src="/static/gift.png">
						<span>礼物套装</span>
					</li>
					<li>
						<img src="/static/all_brand.png">
						<span>全部品牌</span>

					</li>
					<li>
						<img src="/static/exclusive.png">
						<span>独家发售</span>
					</li>
					<li>
						<img src="/static/beautifuls.png">
						<span>美丽课堂</span>
					</li>
					<li>
						<img src="/static/meeting.png">
						<span>会员中心</span>
					</li>
					<li>
						<img src="/static/all.png">
						<span class="l-more">更多</span>
					</li>
				</ul>

			</div>
			<div v-for="v in msg.comment" class="f-pic">
			
				<img :src="v.img">
				<div class="detail-pro">
					<ul>
						<li>
							<img :src="v.imgsrc1">
							<span class="title">{{v.title1}}</span>
							<span class="line"></span>
							<span class="pro-desc">{{v.detail1}}</span>
							<span class="price">{{v.price1|add}}</span>
						</li>
						<li>
							<img :src="v.imgsrc2">
							<span class="title">{{v.title2}}</span>
							<span class="line"></span>
							<span class="pro-desc">{{v.detail2}}</span>
							<span class="price">{{v.price2|add}}</span>
						</li>
						<li class="detail-pro-last">
							<img :src="v.imgsrc3">
							<span class="title">{{v.title3}}</span>
							<span class="line"></span>
							<span class="pro-desc">{{v.detail3}}</span>
							<span class="price">{{v.price3|add}}</span>
						</li>
					</ul>
				</div>

			</div>
			<div class="all-brand">
				<div class="all-brand-detail">
					<h2 class="font-title-brand">全部品牌</h2>
					<span class="icon dott"></span>
				</div>
				<img src="/static/m_superbrand1-1_20180823.png" alt="">
				<img src="/static/m_superbrand2_20180823.png" alt="" class="sec-pic">
				<div class="all-brand-pro">
					<ul >
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se1.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se2.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se3.png">
						</li>
						<li>
							<label class="brand-bottom"></label>
							<img src="/static/se4.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se5.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se6.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<label class="brand-bottom"></label>
							<img src="/static/se7.png">
						</li>
						<li>
							<label class="brand-bottom"></label>
							<img src="/static/se8.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<img src="/static/se9.png">
						</li>	
						<li>
							<label class="brand-right"></label>
							<img src="/static/se10.png">
						</li>
						<li>
							<label class="brand-right"></label>
							<img src="/static/se11.png">
						</li>
						<li>
							
							<img src="/static/se12.png">
						</li>
					</ul>
				</div>
			</div>
			<div class="pro-func pro-func-sec">
				<div class="all-brand-detail">
					<h2 class="font-title-brand">彩妆</h2>
					<span class="icon dott"></span>
				</div>
				<div class="make-up">
					<div  class="customized">
						<img src="/static/m_mufloor_20180816.jpg">
					</div>
					<div  class="customized-left ">
						<img src="/static/APP.gif">
					</div>
					<div  class="customized-right">
						<ul>
							<li>
								<img src="/static/1_n_06437_210x210 (3).jpg">
								<span class="customized-title">GIVENCHY</span>
								<span class="customized-line">纪梵希禁忌之吻漆光唇蜜</span>
								<span class="customized-price">￥290.00</span>
							</li>
							<li >
								<img src="/static/1_n_06439_210x210.jpg">
								<span class="customized-title">LANCOME</span>
								<span class="customized-line">纪梵希禁忌之吻漆光唇蜜</span>
								<span class="customized-price">￥290.00</span>
							</li>
							<li class="customized-underline">
								<img src="/static/1_n_06315_210x210.jpg">
								<span class="customized-title">SEPHORACOLLECTION</span>
								<span class="customized-line">丝芙兰漫威英雄金属风潮眼影盘</span>
								<span class="customized-price">￥259.00</span>
							</li>
							<li class="customized-underline">
								<img src="/static/1_n_06244_210x210.jpg">
								<span class="customized-title">BENEFIT</span>
								<span class="customized-line">丝芙兰漫威英雄金属风潮眼影盘</span>
								<span class="customized-price">￥259.00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="pro-func" v-for="v in msg1.comment1">
				<div class="all-brand-detail">
					<h2 class="font-title-brand">{{v.title}}</h2>
					<span class="icon dott"></span>
				</div>
				<div class="make-up">
					<div  class="customized customized-mk">
						<img :src="v.img" >
					</div>
					<div  class="customized-left customized-left-pro">
						<img :src="v.imgsrc1" >
						<span class="customized-title-s customized-title-m">{{v.title1}}
						<span class="line-under"></span></span>

						<span class="customized-line customized-line-m">{{v.detail1}}</span>
						<span class="customized-price">{{v.price1|add}}</span>
					</div>
					<div  class="customized-right">
						<ul>
							<li>
								<img :src="v.imgsrc2">
								<span class="customized-title">{{v.title2}}</span>
								<span class="customized-line customized-line-sec">{{v.detail2}}</span>
								<span class="customized-price">{{v.price2|add}}</span>
							</li>
							<li >
								<img :src="v.imgsrc3">
								<span class="customized-title">{{v.title3}}</span>
								<span class="customized-line customized-line-sec">{{v.detail3}}</span>
								<span class="customized-price">{{v.price3|add}}</span>
							</li>
							<li class="customized-underline">
								<img :src="v.imgsrc4">
								<span class="customized-title">{{v.title4}}</span>
								<span class="customized-line customized-line-sec">{{v.detail4}}</span>
								<span class="customized-price">{{v.price4|add}}</span>
							</li>
							<li class="customized-underline">
								<img :src="v.imgsrc5">
								<span class="customized-title">{{v.title5}}</span>
								<span class="customized-line customized-line-sec">{{v.detail5}}</span>
								<span class="customized-price">{{v.price5|add}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<v-content></v-content>
			<v-footer></v-footer>

			
			
			
		</main>
	</template>


	<script>
	import vheader from './header.vue';
	import vcontent from './content.vue';
	import vfooter from '../index/footer.vue';
	export default{
		data(){
			return{
				msg:{},
				msg1:{}
			
			}
		},
		components:{
			'v-header':vheader,
			'v-content':vcontent,
			'v-footer':vfooter
		},
		mounted:function(){
			var url="/static/data/comment.json";
			var url1="/static/data/comment1.json";
			this.$axios.get(url)
			.then((respone)=>{
				console.log(respone)
				this.msg=respone.data;
			})
			.catch((error)=>{
				console.log(error)
			});

			this.$axios.get(url1)
			.then((respone)=>{
				console.log(respone)
				this.msg1=respone.data;
				console.log('-----------------------:')
				console.log('-----------------------:'+this.msg1.comment1.length)
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
		main{
			margin-bottom:65px;
		}
		body{
			font-size:1em;
		}
		*{
			box-sizing: border-box;
		}
		img{
			width:100%;
			height:auto;
			display: block;
		}
		.header{
			position:relative;
		}
		.search{
			position: fixed;
		    top: 0px;
		    left: 0px;
		    width: 100%;
		    height: 85px;
		    background: url(/static/black_bg.png);
		    z-index: 200;
		}
		.title{
			position:relative;
		}
		.logo{
			display:inline-block;
			width:45px;
			height:50px;
			background:red url(/static/font_sprite.png);
			background-position:-37px -40px;
			vertical-align: middle;
		}
		.h-search{
			padding-left:10px;
			padding-right:10px;
			height:30px;
		}
		.search-con{
			margin-top:35px;
			border-radius:35px;
			height:28px;
			box-sizing:border-box;
			margin-left: auto;
		    margin-right: auto;
		    width: 95%;
		    position:relative;
		    background: rgba(255,255,255,0.5);
		}
		.icon-pic{
			display:inline-block;
			position:absolute;
		}
		.icon-search{
			background:url(/static/search.png) no-repeat;
			background-size:100%;
			width:24px;
			height:24px;
			top:50%;
			margin-top:-12px;
			margin-left:10px;
		}
		.choose-con{
			width:100%;
			box-sizing:border-box;
			padding-left:10px;
			padding-right:10px;
			padding-top:10px;
		}
		.choose-con li{
			font-size: 24px;
			cursor: pointer;
			text-align: center;
			margin-bottom: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-left:10px;
			padding-right:10px;
		}
		.choose-con img{
			margin-bottom: 7px;
		}
		.choose-con span{
		    font-size: 12px;
		    color: #474747;
		    white-space: nowrap;
		}
		
		.choose-list{
			display: flex;
			flex-wrap: wrap;
		}
		.choose-list li{
			width:20%;
		}
		.login{
			position: absolute;
		    z-index: 300;
		    top: 10px;
		    right: 20px;
		    font-size: 12px;
		    color: #f5f5f5;
		}
		
		.f-pic{
			box-sizing:border-box;
			width:100%;
			padding-left:20px;
			padding-right:20px;
			margin-top:15px;
		}
		
		.detail-pro li{
			float:left;
			width:33.33%;
			box-sizing:border-box;
			color:#474747;
			font-size:0.9em;
			padding-left:0.6px;
			padding:0 10px;
		}
		.detail-pro-last{
			padding-right:10px;
		}
		.detail-pro span{
			text-align:center;
		}
		.detail-pro .title,.detail-pro .price,.detail-pro .line{
			text-align:center;
			display:block;
		}
		.pro-desc{
			height:2.7em;
			text-overflow:ellipsis;
			display:-webkit-box;
			-webkit-line-clamp:2;
			-webkit-box-orient:vertical;
			word-wrap:break-word;
			position:relative;
			overflow:hidden;
			font-size:0.1em;
			
		}
		.title{
			font-size:0.1em;
		}
		.line{
		    width: 15px;
		    border-bottom: 1px solid #474747;
		    margin: 5px auto;
		}
		.price{
			font-size:0.1em;
			padding-bottom:10px;
		}
		.all-brand{
			margin-top:15px;
  			border-top:15px solid #eee;
		}
		.all-brand-detail{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
  			
		}
		.font-title-brand{
			color:#474747;
			padding-top:6px;
			padding-left:20px;
			font-size:1.3em;
			float:left;
			margin-bottom: 10px;
			font-weight:normal;
			margin-left:15px;
		}
		.icon{
			background:url(/static/index_sprite.png) no-repeat;
		}
		.dott{
			width:50px;
			height:10px;
			background-position: -240px -30px;
			margin-right:12px;
		}
		.sec-pic{
			margin-top:6px;
		}
		.all-brand-pro{
			padding-left:15px;
			padding-right:15px;
			box-sizing:border-box;
			margin-left:auto;
			margin-right:auto;
		}
		.all-brand-pro ul{
			overflow:hidden;
		}
		.all-brand-pro li{
			float:left;
			width:25%;;
			position:relative;
			height:64px;
		}
		.brand-right{
			position: absolute;
		    width: 1px;
		    height: 46px;
		    background: #eee;
		    right: 0px;
		    top: 50%;
		    margin-top: -23px;
		}
		.brand-bottom {
		    position: absolute;
		    width: 70px;
		    height: 1px;
		    background: #eee;
		    bottom: 0px;
		    left: 50%;
		    margin-left: -35px;
		}
		.all-brand-pro img{
			width:80px;
			height:33px;
			position:absolute;
			left:50%;
			margin-left:-40px;
			top:50%;
			margin-top:-16px;
			
		}
		.pro-func{
			margin-top: 15px;
    		border-top: 15px solid #eee;
    		position:relative;
    		overflow:hidden;
		}
		.make-up{
			width:100%;
			box-sizing:border-box;
			padding-left:10px;
			padding-right:10px;
			margin-left:auto;
			margin-right:auto;
		}
		.customized{
			width:100%;
		}
		.customized-left{
			width:41%;
			box-sizing:border-box;
			float:left;

		}
		.customized-left-pro{
			margin-top:74px;
		}
		.customized-right{
			width:59%;
			box-sizing:border-box;
			float:left;
		}
		.customized-right ul{
			overflow:hidden;
			width:100%;
			box-sizing:border-box;
		}
		.customized-right li{
			width:50%;
			box-sizing:border-box;
			float:left;
			border-left: 1px solid #eee;
			border-bottom: 1px solid #eee;

		}
		.customized-title-s{
			font-size:0.1em;
			color:#474747;
			text-align:center;
			padding-left:5px;
			padding-right:5px;
			text-overflow:ellipsis;
			display:-webkit-box;
			-webkit-line-clamp:1;
			-webkit-box-orient:vertical;
			word-wrap:break-word;
			position:relative;
		}
		.customized-title{
			font-size:0.1em;
			color:#474747;
			text-align:center;
			padding-left:5px;
			padding-right:5px;
			text-overflow:ellipsis;
			display:-webkit-box;
			-webkit-line-clamp:1;
			-webkit-box-orient:vertical;
			word-wrap:break-word;
			position:relative;
			overflow:hidden;
		}
		.customized-line{
			font-size:0.6em;
			color:#474747;
			display:block;
			text-align:center;
			padding-left:5px;
			padding-right:5px;
		}
	 	.customized-line-sec{
			height:32px;
			overflow:hidden;
		}
		.customized-price{
			font-size:0.1em;
			color:#474747;
			display:block;
			text-align:center;
			padding-left:5px;
			padding-right:5px;
			padding-bottom:5px;

		}
		.customized-right .customized-underline{
			border-bottom:none;
		}
		.line-under{
			width: 14px;
		    border-bottom: 1px solid #474747;
		    position: absolute;
		    left: 50%;
		    margin-left: -7px;
		    margin-top: 17px;
		    z-index: 100;
		}
		.customized-title-m{
			margin-bottom:5px;
		}
		.customized-line-m{
			margin-top:5px;
		}
		
	</style>