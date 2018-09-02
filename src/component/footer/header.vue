	<template>
		<div class="header">
			<span class="login">登录</span>
			<div class="search">
				<h1 class="title">
				</h1>
				<div class="h-search">
					<p class="item search-con">
					 	<i class="icon-pic icon-search"></i>
					</p>
				</div>

			</div>
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="/static/banner1.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="/static/banner2.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="/static/banner4.jpg"></mt-swipe-item>
			</mt-swipe>
		</div>
	</template>
	<style scoped>
		main{
			margin-bottom:900px;
		}
		body{
			font-size:1em;
		}

		img{
			width:100%;
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
			height:195px;
			padding-top:3px;
		}
		.choose-con li{
		    margin-left: 6%;
		    float: left;
		    display: block;
		    width: 12.8%;
		    font-size: 24px;
		    height: 90px;
		    cursor: pointer;
		    text-align: center;
		}
		.choose-con img{
			clear:right;
			margin-bottom:-10px;
		}
		.choose-con span{
		    font-size: 12px;
		    color: #474747;
		    white-space: nowrap;
		}
		.choose-list{
			margin-top:15px;
		}
		.login{
			position: absolute;
		    z-index: 300;
		    top: 10px;
		    right: 20px;
		    font-size: 12px;
		    color: #f5f5f5;
		}
	</style>
