layui.use(['element','tree', 'layer'], function(){
	var layer = layui.layer,
	$ = layui.jquery;
  	element = layui.element();

	layui.tree({
		elem: '#sidebar' //指定元素
		,target: '' //是否新选项卡打开（比如节点返回href才有效）
		,click: function(item,$event){ //点击节点回调
			layer.msg('当前节名称：'+ item.name + '<br>全部参数：'+ JSON.stringify(item));
			console.log(item);
			for (var i = 0; i <$('.x-iframe').length; i++) {
				if($('.x-iframe').eq(i).attr('src')==item.nghref){
					element.tabChange('x-tab', i);
					return;
				}
			};
			res = element.tabAdd('x-tab', {
				title: item.name//用于演示
				,content: '<iframe frameborder="0" src="'+item.nghref+'" class="x-iframe"></iframe>'
			});


			element.tabChange('x-tab', $('.layui-tab-title li').length-1);

			$('.layui-tab-title li').eq(0).find('i').remove();

		}
		,nodes: [ //节点
			{
				name: '常用文件夹'
				,id: 1
				,alias: 'changyong'
				,children: [
				{
					name: '所有未读（设置跳转）'
					,id: 11
					,href: 'http://www.layui.com/'
					,alias: 'weidu'
				}, {
					name: '置顶邮件'
					,id: 12
				}, {
					name: '标签邮件'
					,id: 13
				}
			]
			}, {
				name: '我的邮箱',
				href:""
				,nghref:"./category.html"
				,id: 2
				,spread: true
				,children: [
					{
						name: 'QQ邮箱'
						,id: 21
						,spread: true
						,children: [
						{
							name: '收件箱'
							,id: 211
							,children: [
							{
								name: '所有未读'
								,id: 2111
							}, {
								name: '置顶邮件'
								,id: 2112
							}, {
								name: '标签邮件'
								,id: 2113
							}
						]
						}, {
							name: '已发出的邮件'
							,id: 212
						}, {
							name: '垃圾邮件'
							,id: 213
						}
					]
					}, {
						name: '阿里云邮'
						,id: 22
						,children: [
							{
								name: '收件箱'
								,id: 221
							}, {
								name: '已发出的邮件'
								,id: 222
							}, {
								name: '垃圾邮件'
								,id: 223
							}
						]
					}
				]
			}
			,{
				name: '收藏夹'
				,id: 3
				,alias: 'changyong'
				,children: [
					{
						name: '爱情动作片'
						,id: 31
						,alias: 'love'
					}, {
						name: '技术栈'
						,id: 12
						,children: [
							{
								name: '前端'
								,id: 121
							}
							,{
								name: '全端'
								,id: 122
							}
						]
					}
				]
			}
		]
	});

  //导航的hover效果、二级菜单等功能，需要依赖element模块
  // 侧边栏点击隐藏兄弟元素
	$('.layui-nav-item').click(function(event) {
		$(this).siblings().removeClass('layui-nav-itemed');
	});

	$('.layui-tab-title li').eq(0).find('i').remove();

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






  	//监听导航点击
  	element.on('nav(side)', function(elem){
    	title = elem.find('cite').text();
    	url = elem.find('a').attr('_href');
    	// alert(url);

    	for (var i = 0; i <$('.x-iframe').length; i++) {
    		if($('.x-iframe').eq(i).attr('src')==url){
    			element.tabChange('x-tab', i);
    			return;
    		}
    	};

    	res = element.tabAdd('x-tab', {
	        title: title//用于演示
	        ,content: '<iframe frameborder="0" src="'+url+'" class="x-iframe"></iframe>'
		    });


		element.tabChange('x-tab', $('.layui-tab-title li').length-1);

    	$('.layui-tab-title li').eq(0).find('i').remove();
  });
});


