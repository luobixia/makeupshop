	<template>
		<main>
			<ul class="footer">
				<li>
					<router-link to="/home" >
						<span class="bg footer-first"></span>
						<span  class="title ">首页</span>
					</router-link>
				</li>
				<li>
					<router-link to="/hot">
						<span class="bg footer-second"></span>
						<span  class="title">分类</span>
					</router-link>
				</li>
				<li>
					<router-link to="/discount" >
						<span class="bg active-third"></span>
						<span  class="active-title">优惠专享</span>
					</router-link>
				</li>
				<li>
					<router-link to="/shoppingcart" >
						<span class="bg footer-forth"></span>
						<span  class="title">购物车</span>
					</router-link>
				</li>
				<li>
					<router-link to="/mime" >
						<span class="bg footer-fifth"></span>
						<span class="title">我的</span>
					</router-link>
				</li>
			</ul>
		</main>
	</template>
	<script>
		function c(n){
			console.log('hhaaaaaaaaaaaaaaaaa-----------------')
			$(e).children('.bg').addClass('active-first')
		}
		export default{
			data(){
				return{
					msg:{}
				}
			},
			methods:{
				change(e){
					console.log('hhhhhhhhhhhhhhhhhhhhhhhhh')
					c(e);
				}
			}
		}
	</script>
	<style scoped>
	body{
		background:#eee;
	}
	.footer{
		border-top:1px solid #eee;
		width:100%;
		position: fixed;
		bottom:0;
		left:0;
		background: #fff;
		
	}
	.footer>li{
		float:left;
		list-style: none;
		width:20%;
		text-align: center;
		cursor: pointer;
		
	}
	.footer a{
		display:inline-block;
		width:100%;
		height:100%;
		position:relative;
		text-decoration: none;
	}
	.footer .bg{
		width: 46px;
		height: 46px;
		display: inline-block;
		background: url(/static/categorypage.png) no-repeat;
		margin-top: 5px;
	}
	
	.footer .footer-first{
		background-position: 0px -346px ;
	}
	.footer .active-first{
		background-position: 0px -431px ;
	}
	.footer .footer-second{
		background-position:  -82px -346px ;
	}
	.footer .active-second{
		background-position: -82px -431px ;
	}
	.footer .footer-third{
		background-position:  -169px  -346px;
	}
	.footer .active-third{
		background-position:  -169px  -431px;
	}
	.footer .footer-forth{
		background-position:  -253px -346px;
	}
	.footer .active-forth{
		background-position:  -253px -431px;
	}
	.footer .footer-fifth{
		background-position:  -337px -346px;
	}
	.footer .active-fifth{
		background-position:  -337px -431px;
	}
	.title{
		display: block;
		text-decoration: none;
		font-size: 1.0em;
		color: #474747;
		margin-bottom: 6px;
	}
	 .active-title{
		color: #de1f47;
		display: block;
		text-decoration: none;
		font-size: 1.0em;
		margin-bottom: 6px;
	}
	</style>