
import VueRouter from 'vue-router';
//所有的路由都放这个文件夹
//要配路由，保证下面new VueRouter不出错，导入这个
//导入模板
import home from '../component/footer/home.vue';
import hot from '../component/footer/hot.vue';
import shoppingcart from '../component/footer/shoppingcart.vue';
import discount from '../component/footer/discount.vue';
import mime from '../component/footer/mime.vue';
import exclusivesale from '../component/classification/exclusivesale.vue';
import bodywash from '../component/classification/bodywash.vue';
import colourmakeup from '../component/classification/colourmakeup.vue';
import gift from '../component/classification/gift.vue';
import haircut from '../component/classification/haircut.vue';
import manskincare from '../component/classification/manskincare.vue';
import perfume from '../component/classification/perfume.vue';
import tool from '../component/classification/tool.vue';
//要配路由，要导出，打包一个实例化对象，所以不用大括号，因为没有模板，还要导入模板
export default new VueRouter({
	routes:[
		{
			path:'/home',
			component:home
		},
		{
			path:'/hot',
			component:hot
		},
		{
			path:'/exclusivesale',
			component:exclusivesale
		},
		{
			path:'/shoppingcart',
			component:shoppingcart
		},
		{
			path:'/mime',
			component:mime
		},
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'*',
			redirect:'/home'
		},
		{
			path:'/skin-care',
			component:hot
			},
		{
			path:'/perfume',
			component:perfume
			},
		{
			path:'/colour-makeup',
			component:colourmakeup
			},
		{
			path:'/tool',
			component:tool
			},
		{
			path:'/man-skin-care',
			component:manskincare
			},
		{
			path:'/body-wash',
			component:bodywash
			},
		{
			path:'/haircut',
			component:haircut
			},
		{
			path:'/gift',
			component:gift
			},
		{
			path:'/discount',
			component:discount
			}
	]
})