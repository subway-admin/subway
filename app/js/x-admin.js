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
			layui.tree({
				elem: '#sidebar' //指定元素
				,target: '' //是否新选项卡打开（比如节点返回href才有效）
				,click: function(item,$event){ //点击节点回调
					//layer.msg('当前节名称：'+ item.name + '<br>全部参数：'+ JSON.stringify(item));
					if(!item.url && !item.array_url){
						return;
					}
					if(item.tab_reset){
						$('.layui-tab-title').empty();
						$('.layui-tab-content').empty();
					}
					//console.log(item);
					if(item.url){
						for (var i = 0; i <$('.x-iframe').length; i++) {
							if($('.x-iframe').eq(i).attr('src')==item.url){
								element.tabChange('x-tab', i);
							}
						}
					}else{
						if(!!item.array_url){
							$.each(item.array_url,function(index,list){
								element.tabAdd('x-tab', {
									title: list.name//用于演示
									,content: '<iframe frameborder="0" src="'+list.url+'" class="x-iframe"></iframe>'
								});
								$('.layui-tab-content').find(".layui-tab-item").eq(0).addClass('layui-show');
								//$('.layui-tab-title').find('li i').html('');
							});
						}
					}
					if(item.tab_reset){
						$('.layui-tab-title').find('li').first().addClass('layui-this');
					}




					//element.tabChange('x-tab', $('.layui-tab-title li').length-1);

					//$('.layui-tab-title li').eq(0).find('i').remove();
					//$('.layui-tab-title li').eq(1).find('i').remove();
					//$('.layui-tab-title li').eq(2).find('i').remove();

				}
				,nodes: data.nodes
			});
		},
		error:function(xhr, ajaxOptions, thrownError){
		}
	});


  //导航的hover效果、二级菜单等功能，需要依赖element模块
  // 侧边栏点击隐藏兄弟元素
	$('.layui-nav-item').click(function(event) {
		$(this).siblings().removeClass('layui-nav-itemed');
	});


	//$('.layui-tab-title li').eq(0).find('i').remove();
	//$('.layui-tab-title li').eq(1).find('i').remove();
	//$('.layui-tab-title li').eq(2).find('i').remove();

	height = $('.layui-layout-admin .site-demo').height();
	$('.layui-layout-admin .site-demo').height(height-100);

	if($(window).width()<750){
		trun = 0;
		$('.x-slide_left').css('background-position','0px -61px');
	}else{
		trun = 1;
	}

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

});

function addTab(obj){
	var element = layui.element(),$ = layui.jquery;
	element.tabAdd('x-tab', obj);
	//element.tabChange('x-tab', $('.layui-tab-title li').length-1);
	$('.layui-tab-title li').removeClass('layui-this').last().addClass('layui-this');
	$('.layui-tab-content .layui-tab-item').removeClass('layui-show').last().addClass('layui-show');
}

