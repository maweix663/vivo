$(window).scroll(function(){
	console.log($(window).scrollTop());
	var scrollTop = $(window).scrollTop()
	if(scrollTop > 100){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-world-title').addClass('title-run')

		if (scrollTop > 1300) $('.ma-new-world-title').removeClass('title-run')
	} else {
		$('.ma-new-world-title').removeClass('title-run')
	}

	if(scrollTop > 650){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-text-title').addClass('title-run')

		if (scrollTop > 1500) $('.ma-new-text-title').removeClass('title-run')
	} else {
		
		$('.ma-new-text-title').removeClass('title-run')
	}

	if(scrollTop > 1650){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-huarong-title').addClass('title-run')

		if (scrollTop > 2600) $('.ma-huarong-title').removeClass('title-run')
	} else {
		
		$('.ma-huarong-title').removeClass('title-run')
	}

	if(scrollTop > 2450){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-template-title').addClass('title-run')

		if (scrollTop > 3800) $('.ma-template-title').removeClass('title-run')
	} else {
		
		$('.ma-template-title').removeClass('title-run')
	}

	if(scrollTop > 3550){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-title').addClass('title-run')

		if (scrollTop > 4400) $('.ma-system-title').removeClass('title-run')
	} else {
		
		$('.ma-system-title').removeClass('title-run')
	}

	
	
});