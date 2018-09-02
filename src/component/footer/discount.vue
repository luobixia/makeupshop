	<template>
		<main>
			<div class="discount">	
				<div class="discount-title-pos">
					<div class="discount-title">
						<div class="return-step" @click="restep"></div>
						<div class="week-discount">每周特惠</div>
						<div class="ell">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="v in msg.comment">
						<a href="">
							<img :src="v.img" alt="">
						</a>
					</li>
				</ul>
			</div>
			<v-footer></v-footer>
		</main>
	</template>
	<script>
		import vfooterdiscount from '../index/footerdiscount.vue'
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
				'v-footer':vfooterdiscount
			},
			mounted:function(){
				console.log("---------------------")
						var url="/static/data/discount.json";
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
	<style>
		*{
			box-sizing: border-box;
		}
		img{
			width:100%;
			height: auto;
			display: block;
		}
		.return-step{
			margin-right:10px;
			height: 2rem;
			width: 2rem;
			background:url(/static/goback.png) no-repeat;
			background-size:100%;
			margin-left: 15px;	
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
			font-size: 1.5rem;
			text-align: center;
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
		.ell span{
			display: inline-block;
			border-radius: 50%;
			background: #eee;
			height: 0.2rem;
			width: 0.2rem;
			padding: 1px;
			margin-right: 6px;
			
		}
		.discount-title-pos{
			position: fixed;
			top: 0px;
			left: 0px;
			width:100%;
			background: #fff;
		}
	</style>
