$(window).scroll(function () {
	var scrollTop = $(window).scrollTop()
	if (scrollTop > 100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-world-title').addClass('title-move')
		$('.ma-new-world-text').addClass('text-run')


		if (scrollTop > 1300) {
			$('.ma-new-world-title').removeClass('title-move')
			$('.ma-new-world-text').removeClass('text-run')
		}
	} else {
		$('.ma-new-world-title').removeClass('title-move')
		$('.ma-new-world-text').removeClass('text-run')
	}

	if (scrollTop > 650) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-text-title').addClass('title-run')
		$('.ma-new-text').addClass('text-run')

		if (scrollTop > 1500) {
			$('.ma-new-text-title').removeClass('title-run')
			$('.ma-new-text').removeClass('text-run')
		}
	} else {
		$('.ma-new-text-title').removeClass('title-run')
		$('.ma-new-text').removeClass('text-run')
	}

	if (scrollTop > 1650) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-huarong-title').addClass('title-run')
		$('.ma-huarong-text').addClass('text-run')

		if (scrollTop > 2600) {
			$('.ma-huarong-text').removeClass('text-run')
			$('.ma-huarong-title').removeClass('title-run')
		}
	} else {
		$('.ma-huarong-text').removeClass('text-run')
		$('.ma-huarong-title').removeClass('title-run')
	}

	if (scrollTop > 2450) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-template-title').addClass('title-run')
		$('.ma-template-text').addClass('text-run')

		if (scrollTop > 3800) {
			$('.ma-template-text').removeClass('text-run')
			$('.ma-template-title').removeClass('title-run')
		}
	} else {
		$('.ma-template-text').removeClass('text-run')
		$('.ma-template-title').removeClass('title-run')
	}

	if (scrollTop > 3550) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-title').addClass('title-move')
		$('.ma-system-text').addClass('text-run')


		if (scrollTop > 4400) {
			$('.ma-system-text').removeClass('text-run')
			$('.ma-system-title').removeClass('title-move')
		}
	} else {
		$('.ma-system-text').removeClass('text-run')
		$('.ma-system-title').removeClass('title-move')
	}

	if (scrollTop > 3650) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-view-title').addClass('title-run')
		$('.ma-system-view-text').addClass('text-run')


		if (scrollTop > 4700) {
			$('.ma-system-view-text').removeClass('text-run')
			$('.ma-system-view-title').removeClass('title-run')
		}
	} else {
		$('.ma-system-view-text').removeClass('text-run')
		$('.ma-system-view-title').removeClass('title-run')
	}

	if (scrollTop > 4850) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-running-title').addClass('title-run')
		$('.ma-running-text').addClass('text-run')

		if (scrollTop > 5900) {
			$('.ma-running-text').removeClass('text-run')
			$('.ma-running-title').removeClass('title-run')
		}
	} else {
		$('.ma-running-text').removeClass('text-run')
		$('.ma-running-title').removeClass('title-run')
	}

	if (scrollTop > 5300) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-super-title').addClass('title-run')
		$('.ma-super-text').addClass('text-run')

		if (scrollTop > 6300) {
			$('.ma-super-text').removeClass('text-run')
			$('.ma-super-title').removeClass('title-run')
		}
	} else {
		$('.ma-super-text').removeClass('text-run')
		$('.ma-super-title').removeClass('title-run')
	}

	if (scrollTop > 6150) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-lens-title').addClass('title-run')
		$('.ma-lens-text').addClass('text-run')

		if (scrollTop > 7120) {
			$('.ma-lens-text').removeClass('text-run')
			$('.ma-lens-title').removeClass('title-run')
		}
	} else {
		$('.ma-lens-text').removeClass('text-run')
		$('.ma-lens-title').removeClass('title-run')
	}

	if (scrollTop > 7150) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-time-head-title').addClass('title-move')
		$('.ma-time-head-text').addClass('text-run')

		if (scrollTop > 8280) {
			$('.ma-time-head-text').removeClass('text-run')
			$('.ma-time-head-title').removeClass('title-move')
		}
	} else {
		$('.ma-time-head-text').removeClass('text-run')
		$('.ma-time-head-title').removeClass('title-move')
	}

	if (scrollTop > 7480) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icon-title').addClass('title-run')
		$('.ma-icon-text').addClass('text-run')

		if (scrollTop > 8450) {
			$('.ma-icon-text').removeClass('text-run')
			$('.ma-icon-title').removeClass('title-run')
		}
	} else {
		$('.ma-icon-text').removeClass('text-run')
		$('.ma-icon-title').removeClass('title-run')
	}

	if (scrollTop > 8250) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icons-title').addClass('title-run')
		$('.ma-icons-text').addClass('text-run')

		if (scrollTop > 9280) {
			$('.ma-icons-text').removeClass('text-run')
			$('.ma-icons-title').removeClass('title-run')
		}
	} else {
		$('.ma-icons-text').removeClass('text-run')
		$('.ma-icons-title').removeClass('title-run')
	}

	if (scrollTop > 9100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-clock-title').addClass('title-run')
		$('.ma-clock-text').addClass('text-run')

		if (scrollTop > 10070) {
			$('.ma-clock-text').removeClass('text-run')
			$('.ma-clock-title').removeClass('title-run')
		}
	} else {
		$('.ma-clock-text').removeClass('text-run')
		$('.ma-clock-title').removeClass('title-run')
	}

	if (scrollTop > 10050) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-notice-title').addClass('title-run')
		$('.ma-notice-text').addClass('text-run')
		if (scrollTop > 11100) {
			$('.ma-notice-text').removeClass('text-run')
			$('.ma-notice-title').removeClass('title-run')
		}
	} else {
		$('.ma-notice-text').removeClass('text-run')
		$('.ma-notice-title').removeClass('title-run')
	}

	if (scrollTop > 10826) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-day-title').addClass('title-run')
		$('.ma-day-text').addClass('text-run')
		if (scrollTop > 11868) {
			$('.ma-day-text').removeClass('text-run')
			$('.ma-day-title').removeClass('title-run')
		}
	} else {
		$('.ma-day-text').removeClass('text-run')
		$('.ma-day-title').removeClass('title-run')
	}

	if (scrollTop > 11376) { //这里100代表你要动画的元$('.ma-day-title').addClass('title-run')
		$('.ma-window-head-title').addClass('title-run')
		$('.ma-window-head-text').addClass('text-run')

		if (scrollTop > 12403) {
			$('.ma-window-head-title').removeClass('title-run')
			$('.ma-window-head-text').removeClass('text-run')
		}
	} else {
		$('.ma-window-head-title').removeClass('title-run')
		$('.ma-window-head-text').removeClass('text-run')
	}

	if (scrollTop > 11962) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-window-title').addClass('title-run')

		if (scrollTop > 12940) $('.ma-window-title').removeClass('title-run')
	} else {

		$('.ma-window-title').removeClass('title-run')
	}

	if (scrollTop > 12479) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-fly-title').addClass('title-run')
		$('.ma-fly-text').addClass('text-run')

		if (scrollTop > 13528) {
			$('.ma-fly-text').removeClass('text-run')
			$('.ma-fly-title').removeClass('title-run')
		}
	} else {
		$('.ma-fly-text').removeClass('text-run')
		$('.ma-fly-title').removeClass('title-run')
	}

	if (scrollTop > 13537) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-weather-title').addClass('title-run')
		$('.ma-weather-text').addClass('text-run')

		if (scrollTop > 14628) {
			$('.ma-weather-text').removeClass('text-run')
			$('.ma-weather-title').removeClass('title-run')
		}
	} else {
		$('.ma-weather-text').removeClass('text-run')
		$('.ma-weather-title').removeClass('title-run')
	}

	if (scrollTop > 14107) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-behavior-title').addClass('title-run')
		$('.ma-behavior-text').addClass('text-run')
		if (scrollTop > 15142) {
			$('.ma-behavior-text').removeClass('text-run')
			$('.ma-behavior-title').removeClass('title-run')
		}
	} else {
		$('.ma-behavior-text').removeClass('text-run')
		$('.ma-behavior-title').removeClass('title-run')
	}

	if (scrollTop > 15126) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-deformation-title').addClass('title-run')
		$('.ma-deformation-text').addClass('text-run')
		if (scrollTop > 16146) {
			$('.ma-deformation-text').removeClass('text-run')
			$('.ma-deformation-title').removeClass('title-run')
		}
	} else {
		$('.ma-deformation-text').removeClass('text-run')
		$('.ma-deformation-title').removeClass('title-run')
	}


	if (scrollTop > 16000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-head-title').addClass('title-run')
		$('.you-Visual-head-text').addClass('text-run')

		if (scrollTop > 17400) {
			$('.you-Visual-head-title').removeClass('title-run')
			$('.you-Visual-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-head-title').removeClass('title-run')
		$('.you-Visual-head-text').removeClass('text-run')
	}

	if (scrollTop > 16500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-left-title').addClass('title-run')
		$('.you-Visual-left-text').addClass('text-run')

		if (scrollTop > 17500) {
			$('.you-Visual-left-title').removeClass('title-run')
			$('.you-Visual-left-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-left-title').removeClass('title-run')
		$('.you-Visual-left-text').removeClass('text-run')
	}

	if (scrollTop > 17500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-leftwo-title').addClass('title-run')
		$('.you-Visual-leftwo-text').addClass('text-run')

		if (scrollTop > 18500) {
			$('.you-Visual-leftwo-title').removeClass('title-run')
			$('.you-Visual-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-leftwo-title').removeClass('title-run')
		$('.you-Visual-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 18000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-head-title').addClass('title-run')
		$('.you-Memory-head-text').addClass('text-run')

		if (scrollTop > 19400) {
			$('.you-Memory-head-title').removeClass('title-run')
			$('.you-Memory-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-head-title').removeClass('title-run')
		$('.you-Memory-head-text').removeClass('text-run')
	}

	if (scrollTop > 18500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-fuse-title').addClass('title-run')
		$('.you-fuse-text').addClass('text-run')

		if (scrollTop > 19700) {
			$('.you-fuse-title').removeClass('title-run')
			$('.you-fuse-text').removeClass('text-run')
		}
	} else {
		$('.you-fuse-title').removeClass('title-run')
		$('.you-fuse-text').removeClass('text-run')
	}


	if (scrollTop > 19500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-leftwo-title').addClass('title-run')
		$('.you-Memory-leftwo-text').addClass('text-run')

		if (scrollTop > 20900) {
			$('.you-Memory-leftwo-title').removeClass('title-run')
			$('.you-Memory-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-leftwo-title').removeClass('title-run')
		$('.you-Memory-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 20600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-fluent-title').addClass('title-run')
		$('.you-fluent-text').addClass('text-run')

		if (scrollTop > 21600) {
			$('.you-fluent-title').removeClass('title-run')
			$('.you-fluent-text').removeClass('text-run')
		}
	} else {
		$('.you-fluent-title').removeClass('title-run')
		$('.you-fluent-text').removeClass('text-run')
	}

	if (scrollTop > 20900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-album-head-title').addClass('title-run')
		$('.you-album-head-text').addClass('text-run')

		if (scrollTop > 22000) {
			$('.you-album-head-title').removeClass('title-run')
			$('.you-album-head-text').removeClass('text-run')
		}
	} else {
		$('.you-album-head-title').removeClass('title-run')
		$('.you-album-head-text').removeClass('text-run')
	}

	if (scrollTop > 22000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-head-title').addClass('title-run')
		$('.you-work-head-text').addClass('text-run')

		if (scrollTop > 23300) {
			$('.you-work-head-title').removeClass('title-run')
			$('.you-work-head-text').removeClass('text-run')
		}
	} else {
		$('.you-work-head-title').removeClass('title-run')
		$('.you-work-head-text').removeClass('text-run')
	}

	if (scrollTop > 22500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-left-title').addClass('title-run')
		$('.you-work-left-text').addClass('text-run')

		if (scrollTop > 23500) {
			$('.you-work-left-title').removeClass('title-run')
			$('.you-work-left-text').removeClass('text-run')
		}
	} else {
		$('.you-work-left-title').removeClass('title-run')
		$('.you-work-left-text').removeClass('text-run')
	}

	if (scrollTop > 23500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-leftwo-title').addClass('title-run')
		$('.you-work-leftwo-text').addClass('text-run')

		if (scrollTop > 24500) {
			$('.you-work-leftwo-title').removeClass('title-run')
			$('.you-work-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-work-leftwo-title').removeClass('title-run')
		$('.you-work-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 24000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-lifethree-title').addClass('title-run')
		$('.you-footer-lifethree-text').addClass('text-run')

		if (scrollTop > 25300) {
			$('.you-footer-lifethree-title').removeClass('title-run')
			$('.you-footer-lifethree-text').removeClass('text-run')
		}
	} else {
		$('.you-footer-lifethree-title').removeClass('title-run')
		$('.you-footer-lifethree-text').removeClass('text-run')
	}

	if (scrollTop > 25000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-head-title').addClass('title-run')
		$('.you-open-head-text').addClass('text-run')

		if (scrollTop > 26000) {
			$('.you-open-head-title').addClass('title-run')
			$('.you-open-head-text').addClass('text-run')
		}
	} else {
		$('.you-open-head-title').removeClass('title-run')
		$('.you-open-head-text').removeClass('text-run')
	}

	if (scrollTop > 25200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-left-title').addClass('title-run')
		$('.you-open-left-text').addClass('text-run')

		if (scrollTop > 26300) {
			$('.you-open-left-title').addClass('title-run')
			$('.you-open-left-text').addClass('text-run')
		}
	} else {
		$('.you-open-left-title').removeClass('title-run')
		$('.you-open-left-text').removeClass('text-run')
	}

	if (scrollTop > 26000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-leftwo-title').addClass('title-run')
		$('.you-open-leftwo-text').addClass('text-run')

		if (scrollTop > 26900) {
			$('.you-open-leftwo-title').addClass('title-run')
			$('.you-open-leftwo-text').addClass('text-run')
		}
	} else {
		$('.you-open-leftwo-title').removeClass('title-run')
		$('.you-open-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 26400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-end-title').addClass('title-run')
		$('.you-footer-end-text').addClass('text-run')

		if (scrollTop > 27300) {
			$('.you-footer-end-title').addClass('title-run')
			$('.you-footer-end-text').addClass('text-run')
		}
	} else {
		$('.you-footer-end-title').removeClass('title-run')
		$('.you-footer-end-text').removeClass('text-run')
	}

	if (scrollTop > 27500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-marvellous').addClass('title-run')

		if (scrollTop > 28400) {
			$('.you-marvellous').addClass('title-run')
		}
	} else {
		$('.you-marvellous').removeClass('title-run')
	}

	if (scrollTop > 27900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-one-title').addClass('title-run')
		$('.you-one-text').addClass('text-run')

		if (scrollTop > 28700) {
			$('.you-one-title').addClass('title-run')
			$('.you-one-text').addClass('text-run')
		}
	} else {
		$('.you-one-title').removeClass('title-run')
		$('.you-one-text').removeClass('text-run')
	}
	if (scrollTop > 27900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-funtouch-left-title').addClass('title-run')
		$('.you-funtouch-left-text').addClass('text-run')

		if (scrollTop > 28700) {
			$('.you-funtouch-left-title').addClass('title-run')
			$('.you-funtouch-left-text').addClass('text-run')
		}
	} else {
		$('.you-funtouch-left-title').removeClass('title-run')
		$('.you-funtouch-left-text').removeClass('text-run')
	}

	
	if (scrollTop > 28200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-funtouch-left').addClass('title-run')

		// 回到顶部
		if (scrollTop > 500) {
			$('.ma-mask').css({
				"display": "block"
			})
		} else {
			$('.ma-mask').css({
				"display": "none"
			})
		}
		if (scrollTop > 29200) $('.you-funtouch-left').removeClass('title-run')
	} else {
		$('.you-funtouch-left').removeClass('title-run')
	}

	new Swiper('.swiper-container1',{
		autoplay:3000,
		speed:1000,
		autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay
		loop:true,
		centeredSlides : true,
		slidesPerView:2,
		pagination : '.swiper-pagination',
		paginationClickable:true,//点击分页器是否会切换
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		onInit:function(swiper){//回调函数，初始化后执行。
			swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
			},	
	}) 

	new Swiper('.swiper-container2',{
		scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
		draggable: false,
		snapOnRelease: true,
		dragSize: 20,
		}
		})

});

$(window).resize(function () {
	var metaWidth = $(document).width()

	if (metaWidth >= 1200) {
		running()
	}

});



function running() {
	// 平行世界--旋转
	var worldRun = new Swiper('.swiper-ma-world', {
		effect: 'coverflow',
		slidesPerView: 3,
		centeredSlides: true,
		coverflowEffect: {
			rotate: -50,
			stretch: -50,
			depth: 80,
			modifier: 1,
			shadows: false
		}
	});

	$('.ma-btn-left').click(function () {
		worldRun.slidePrev();
	})
	$('.ma-btn-right').click(function () {
		worldRun.slideNext();
	})
}