// 首页.js
window.onload = function(){
	$('.rightBottom').load('./pages/home.html');
	$('.leftBottom div').on('click',function(){
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.rightBottom').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.rightBottom').load('./pages/category.html');
				break;
			case '咨询管理':
				$('.rightBottom').load('./pages/info.html');
				break;
			case '用户管理':
				$('.rightBottom').load('./pages/user.html');
				break;
			default:
				break;
		}
	})
}