layui.use(['element','tree', 'layer'], function(){
	var layer = layui.layer,
	$ = layui.jquery;
  	element = layui.element();



	//获取菜单
	asynLoad.ajax({
		jquery:$,
		data:{},
		url:'',
		localUrl:'../test-data/menu.json',
		success:function(data, status, requestCode)
		{
			//根据URL定位页面
			//../component/station/station.html
			var url = "";
			if(stateParams.search().hasOwnProperty('state')){
				$('.layui-tab-content').find('iframe').attr('src',redirectUrl(data.nodes,stateParams.search(),url));
			}
			layui.tree({
				elem: '#sidebar'
				,click: function(item,$event){
					if(!item.url){
						return;
					}
					$('.layui-tab-content').find('iframe').attr('src',item.url);
				}
				,nodes: data.nodes
			});
		},
		error:function(xhr, ajaxOptions, thrownError){
		}
	});

	//iframe高度
	height = $('.layui-layout-admin .site-demo').height();
	$('.layui-layout-admin .site-demo').height(height-100);

	//显示隐藏侧边栏
	if($(window).width()<750){
		trun = 0;
		$('.x-slide_left').css('background-position','0px -61px');
	}else{
		trun = 1;
	}

	//点击关闭显示侧边栏
	$('.x-slide_left').click(function(event) {
		if(trun){
			$('.x-side').animate({left: '-200px'},200).siblings('.x-main').animate({left: '0px'},200);
			$(this).css('background-position','0px -61px');
			trun=0;
		}else{
			$('.x-side').animate({left: '0px'},200).siblings('.x-main').animate({left: '200px'},200);
			$(this).css('background-position','0px 0px');
			trun=1;
		}
	});

	function redirectUrl(data,urlState,url){
		$.each(data,function(index,item){
			if(item.url){
				if(item.state == urlState.state){
					url = item.url;
					item['home'] = true;
					return false;
				}
			}
			url = redirectUrl(item.children,urlState,url)
		});
		return url;
	}

});

//获取路由参数
function getParam(){
	return stateParams.search();
}

