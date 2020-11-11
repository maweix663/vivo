var metaWidth = $(document).width()
var num = 0
var timer = null
var li = $('.ma-behavior-tags ul li')
$(window).scroll(function () {
	var scrollTop = $(window).scrollTop()
	console.log(scrollTop)
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

		$('.ma-huarong-grid-bg').addClass('huarong-bg')
		$('.ma-huarong-grid-img').addClass('huarong-img')

		if (scrollTop > 2600) {
			$('.ma-huarong-grid-bg').removeClass('huarong-bg')
			$('.ma-huarong-grid-img').removeClass('huarong-img')
			$('.ma-huarong-text').removeClass('text-run')
			$('.ma-huarong-title').removeClass('title-run')
		}
	} else {
		$('.ma-huarong-grid-bg').removeClass('huarong-bg')
		$('.ma-huarong-grid-img').removeClass('huarong-img')
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

	if (scrollTop > 3450) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-icon-title').addClass('title-run')
		$('.ma-new-icon-text').addClass('text-run')

		if (scrollTop > 4600) {
			$('.ma-new-icon-text').removeClass('text-run')
			$('.ma-new-icon-title').removeClass('title-run')
		}
	} else {
		$('.ma-new-icon-text').removeClass('text-run')
		$('.ma-new-icon-title').removeClass('title-run')
	}

	if (scrollTop > 4450) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-title').addClass('title-move')
		$('.ma-system-text').addClass('text-run')


		if (scrollTop > 5300) {
			$('.ma-system-text').removeClass('text-run')
			$('.ma-system-title').removeClass('title-move')
		}
	} else {
		$('.ma-system-text').removeClass('text-run')
		$('.ma-system-title').removeClass('title-move')
	}

	if (scrollTop > 4550) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-view-title').addClass('title-run')
		$('.ma-system-view-text').addClass('text-run')


		if (scrollTop > 5600) {
			$('.ma-system-view-text').removeClass('text-run')
			$('.ma-system-view-title').removeClass('title-run')
		}
	} else {
		$('.ma-system-view-text').removeClass('text-run')
		$('.ma-system-view-title').removeClass('title-run')
	}

	if (scrollTop > 5750) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-running-title').addClass('title-run')
		$('.ma-running-text').addClass('text-run')

		if (scrollTop > 6800) {
			$('.ma-running-text').removeClass('text-run')
			$('.ma-running-title').removeClass('title-run')
		}
	} else {
		$('.ma-running-text').removeClass('text-run')
		$('.ma-running-title').removeClass('title-run')
	}

	if (scrollTop > 6200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-super-title').addClass('title-run')
		$('.ma-super-text').addClass('text-run')

		if (scrollTop > 7200) {
			$('.ma-super-text').removeClass('text-run')
			$('.ma-super-title').removeClass('title-run')
		}
	} else {
		$('.ma-super-text').removeClass('text-run')
		$('.ma-super-title').removeClass('title-run')
	}

	if (scrollTop > 7050) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-lens-title').addClass('title-run')
		$('.ma-lens-text').addClass('text-run')

		if (scrollTop > 8020) {
			$('.ma-lens-text').removeClass('text-run')
			$('.ma-lens-title').removeClass('title-run')
		}
	} else {
		$('.ma-lens-text').removeClass('text-run')
		$('.ma-lens-title').removeClass('title-run')
	}

	if (scrollTop > 8050) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-time-head-title').addClass('title-move')
		$('.ma-time-head-text').addClass('text-run')

		if (scrollTop > 9180) {
			$('.ma-time-head-text').removeClass('text-run')
			$('.ma-time-head-title').removeClass('title-move')
		}
	} else {
		$('.ma-time-head-text').removeClass('text-run')
		$('.ma-time-head-title').removeClass('title-move')
	}

	if (scrollTop > 8380) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icon-title').addClass('title-run')
		$('.ma-icon-text').addClass('text-run')

		if (scrollTop > 9350) {
			$('.ma-icon-text').removeClass('text-run')
			$('.ma-icon-title').removeClass('title-run')
		}
	} else {
		$('.ma-icon-text').removeClass('text-run')
		$('.ma-icon-title').removeClass('title-run')
	}

	if (scrollTop > 9230) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icon-fly').addClass('animated bounceOutDown')

		// $('.ma-icon-fly-icon1').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon2').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon3').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon4').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon5').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon6').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon7').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon8').addClass('animated bounceOutDown')

		if (scrollTop > 10000) {
			$('.ma-icon-fly').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon1').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon2').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon3').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon4').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon5').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon6').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon7').removeClass('animated bounceOutDown')
			// $('.ma-icon-fly-icon8').removeClass('animated bounceOutDown')
		}
	} else {
		$('.ma-icon-fly').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon1').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon2').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon3').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon4').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon5').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon6').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon7').removeClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon8').removeClass('animated bounceOutDown')
	}

	if (scrollTop > 9150) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icons-title').addClass('title-run')
		$('.ma-icons-text').addClass('text-run')

		if (scrollTop > 10180) {
			$('.ma-icons-text').removeClass('text-run')
			$('.ma-icons-title').removeClass('title-run')
		}
	} else {
		$('.ma-icons-text').removeClass('text-run')
		$('.ma-icons-title').removeClass('title-run')
	}

	if (scrollTop > 10000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-clock-title').addClass('title-run')
		$('.ma-clock-text').addClass('text-run')

		if (scrollTop > 10970) {
			$('.ma-clock-text').removeClass('text-run')
			$('.ma-clock-title').removeClass('title-run')
		}
	} else {
		$('.ma-clock-text').removeClass('text-run')
		$('.ma-clock-title').removeClass('title-run')
	}

	if (scrollTop > 10950) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-notice-title').addClass('title-run')
		$('.ma-notice-text').addClass('text-run')
		if (scrollTop > 12000) {
			$('.ma-notice-text').removeClass('text-run')
			$('.ma-notice-title').removeClass('title-run')
		}
	} else {
		$('.ma-notice-text').removeClass('text-run')
		$('.ma-notice-title').removeClass('title-run')
	}

	if (scrollTop > 11726) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-day-title').addClass('title-run')
		$('.ma-day-text').addClass('text-run')
		if (scrollTop > 12768) {
			$('.ma-day-text').removeClass('text-run')
			$('.ma-day-title').removeClass('title-run')
		}
	} else {
		$('.ma-day-text').removeClass('text-run')
		$('.ma-day-title').removeClass('title-run')
	}

	if (scrollTop > 12276) { //这里100代表你要动画的元$('.ma-day-title').addClass('title-run')
		$('.ma-window-head-title').addClass('title-run')
		$('.ma-window-head-text').addClass('text-run')

		if (scrollTop > 13303) {
			$('.ma-window-head-title').removeClass('title-run')
			$('.ma-window-head-text').removeClass('text-run')
		}
	} else {
		$('.ma-window-head-title').removeClass('title-run')
		$('.ma-window-head-text').removeClass('text-run')
	}

	if (scrollTop > 12862) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-window-title').addClass('title-run')

		if (scrollTop > 13840) $('.ma-window-title').removeClass('title-run')
	} else {

		$('.ma-window-title').removeClass('title-run')
	}

	if (scrollTop > 13379) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-fly-title').addClass('title-run')
		$('.ma-fly-text').addClass('text-run')

		if (scrollTop > 14428) {
			$('.ma-fly-text').removeClass('text-run')
			$('.ma-fly-title').removeClass('title-run')
		}
	} else {
		$('.ma-fly-text').removeClass('text-run')
		$('.ma-fly-title').removeClass('title-run')
	}

	if (scrollTop > 14437) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-weather-title').addClass('title-run')
		$('.ma-weather-text').addClass('text-run')

		if (scrollTop > 15528) {
			$('.ma-weather-text').removeClass('text-run')
			$('.ma-weather-title').removeClass('title-run')
		}
	} else {
		$('.ma-weather-text').removeClass('text-run')
		$('.ma-weather-title').removeClass('title-run')
	}

	if (scrollTop > 15007) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-behavior-title').addClass('title-run')
		$('.ma-behavior-text').addClass('text-run')
		if (scrollTop > 16042) {
			$('.ma-behavior-text').removeClass('text-run')
			$('.ma-behavior-title').removeClass('title-run')
		}
	} else {
		$('.ma-behavior-text').removeClass('text-run')
		$('.ma-behavior-title').removeClass('title-run')
	}

	
	if (scrollTop > 15340) {
		numRun()

		if (scrollTop > 16900){
			num = 0
			clearInterval(timer)
			numRun()
			li.removeClass('active')
			li.eq(0).addClass('active')
		}
	} else {
		num = 0
		clearInterval(timer)
		li.removeClass('active')
		li.eq(0).addClass('active')
	}

	if (scrollTop > 16026) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-deformation-title').addClass('title-run')
		$('.ma-deformation-text').addClass('text-run')
		if (scrollTop > 17046) {
			$('.ma-deformation-text').removeClass('text-run')
			$('.ma-deformation-title').removeClass('title-run')
		}
	} else {
		$('.ma-deformation-text').removeClass('text-run')
		$('.ma-deformation-title').removeClass('title-run')
	}


	if (scrollTop > 16900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-head-title').addClass('title-run')
		$('.you-Visual-head-text').addClass('text-run')

		if (scrollTop > 18300) {
			$('.you-Visual-head-title').removeClass('title-run')
			$('.you-Visual-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-head-title').removeClass('title-run')
		$('.you-Visual-head-text').removeClass('text-run')
	}

	if (scrollTop > 17400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-left-title').addClass('title-run')
		$('.you-Visual-left-text').addClass('text-run')

		if (scrollTop > 18400) {
			$('.you-Visual-left-title').removeClass('title-run')
			$('.you-Visual-left-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-left-title').removeClass('title-run')
		$('.you-Visual-left-text').removeClass('text-run')
	}

	if (scrollTop > 18400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-leftwo-title').addClass('title-run')
		$('.you-Visual-leftwo-text').addClass('text-run')

		if (scrollTop > 19400) {
			$('.you-Visual-leftwo-title').removeClass('title-run')
			$('.you-Visual-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-leftwo-title').removeClass('title-run')
		$('.you-Visual-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 19000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-head-title').addClass('title-run')
		$('.you-Memory-head-text').addClass('text-run')

		if (scrollTop > 20200) {
			$('.you-Memory-head-title').removeClass('title-run')
			$('.you-Memory-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-head-title').removeClass('title-run')
		$('.you-Memory-head-text').removeClass('text-run')
	}

	if (scrollTop > 19400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-fuse-title').addClass('title-run')
		$('.you-fuse-text').addClass('text-run')

		if (scrollTop > 20700) {
			$('.you-fuse-title').removeClass('title-run')
			$('.you-fuse-text').removeClass('text-run')
		}
	} else {
		$('.you-fuse-title').removeClass('title-run')
		$('.you-fuse-text').removeClass('text-run')
	}


	if (scrollTop > 20000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-leftwo-title').addClass('title-run')
		$('.you-Memory-leftwo-text').addClass('text-run')

		if (scrollTop > 21200) {
			$('.you-Memory-leftwo-title').removeClass('title-run')
			$('.you-Memory-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-leftwo-title').removeClass('title-run')
		$('.you-Memory-leftwo-text').removeClass('text-run')
	}

	// if (scrollTop > 21500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
	// 	$('.you-fluent-title').addClass('title-run')
	// 	$('.you-fluent-text').addClass('text-run')

	// 	if (scrollTop > 22500) {
	// 		$('.you-fluent-title').removeClass('title-run')
	// 		$('.you-fluent-text').removeClass('text-run')
	// 	}
	// } else {
	// 	$('.you-fluent-title').removeClass('title-run')
	// 	$('.you-fluent-text').removeClass('text-run')
	// }

	if (scrollTop > 20000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-album-head-title').addClass('title-run')
		$('.you-album-head-text').addClass('text-run')

		if (scrollTop > 22200) {
			$('.you-album-head-title').removeClass('title-run')
			$('.you-album-head-text').removeClass('text-run')
		}
	} else {
		$('.you-album-head-title').removeClass('title-run')
		$('.you-album-head-text').removeClass('text-run')
	}

	if (scrollTop > 22200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
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

	if (scrollTop > 22300) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-left-title').addClass('title-run')
		$('.you-work-left-text').addClass('text-run')

		if (scrollTop > 23600) {
			$('.you-work-left-title').removeClass('title-run')
			$('.you-work-left-text').removeClass('text-run')
		}
	} else {
		$('.you-work-left-title').removeClass('title-run')
		$('.you-work-left-text').removeClass('text-run')
	}

	if (scrollTop > 23400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
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

	if (scrollTop > 24200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-lifethree-title').addClass('title-run')
		$('.you-footer-lifethree-text').addClass('text-run')

		if (scrollTop > 25400) {
			$('.you-footer-lifethree-title').removeClass('title-run')
			$('.you-footer-lifethree-text').removeClass('text-run')
		}
	} else {
		$('.you-footer-lifethree-title').removeClass('title-run')
		$('.you-footer-lifethree-text').removeClass('text-run')
	}

	if (scrollTop > 24800) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
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

	if (scrollTop > 25100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-left-title').addClass('title-run')
		$('.you-open-left-text').addClass('text-run')

		if (scrollTop > 26500) {
			$('.you-open-left-title').addClass('title-run')
			$('.you-open-left-text').addClass('text-run')
		}
	} else {
		$('.you-open-left-title').removeClass('title-run')
		$('.you-open-left-text').removeClass('text-run')
	}

	if (scrollTop > 25600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-leftwo-title').addClass('title-run')
		$('.you-open-leftwo-text').addClass('text-run')

		if (scrollTop > 27000) {
			$('.you-open-leftwo-title').addClass('title-run')
			$('.you-open-leftwo-text').addClass('text-run')
		}
	} else {
		$('.you-open-leftwo-title').removeClass('title-run')
		$('.you-open-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 26200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-end-title').addClass('title-run')
		$('.you-footer-end-text').addClass('text-run')

		if (scrollTop > 27500) {
			$('.you-footer-end-title').addClass('title-run')
			$('.you-footer-end-text').addClass('text-run')
		}
	} else {
		$('.you-footer-end-title').removeClass('title-run')
		$('.you-footer-end-text').removeClass('text-run')
	}

	if (scrollTop > 27400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-marvellous').addClass('title-run')

		if (scrollTop > 28600) {
			$('.you-marvellous').addClass('title-run')
		}
	} else {
		$('.you-marvellous').removeClass('title-run')
	}

	if (scrollTop > 27500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-one-title').addClass('title-run')
		$('.you-one-text').addClass('text-run')

		if (scrollTop > 28900) {
			$('.you-one-title').addClass('title-run')
			$('.you-one-text').addClass('text-run')
		}
	} else {
		$('.you-one-title').removeClass('title-run')
		$('.you-one-text').removeClass('text-run')
	}
	if (scrollTop > 28000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-funtouch-left-title').addClass('title-run')
		$('.you-funtouch-left-text').addClass('text-run')

		if (scrollTop > 29500) {
			$('.you-funtouch-left-title').addClass('title-run')
			$('.you-funtouch-left-text').addClass('text-run')
		}
	} else {
		$('.you-funtouch-left-title').removeClass('title-run')
		$('.you-funtouch-left-text').removeClass('text-run')
	}


	if (scrollTop > 29100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
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
		if (scrollTop > 30100) $('.you-funtouch-left').removeClass('title-run')
	} else {
		$('.you-funtouch-left').removeClass('title-run')
	}

	new Swiper('.swiper-container1', {
		slidesPerView: 3,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		  },
	})

	new Swiper('.swiper-container2', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		  },
	})

	new Swiper('.swiper-container3', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		  },
	})

});

$(window).resize(function () {
	if (metaWidth >= 1024) {
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
			stretch: -30,
			depth: 80,
			modifier: 1,
			slideShadows: false
		}
	});

	$('.ma-btn-left').click(function () {
		worldRun.slidePrev();
	})
	$('.ma-btn-right').click(function () {
		worldRun.slideNext();
	})
}

// 行为壁纸
function numRun() {
	clearInterval(timer)
    var odo = new Odometer('.ma-behavior-step',{
        num : num
    });


    //改变数值
    timer = setInterval(()=>{
    	num += 623
    	odo.update(num)

    	if (num >= 8000) {
    		num = 0
    		odo.update(8000)
	    	clearInterval(timer)
	    }
    },1000)

    
}

// 换取花颜色
li.click(function(){
	li.removeClass('active')
	$(this).addClass('active')
	num = 0
	clearInterval(timer)
	numRun()
})


// 相册
// $('.you-album-ul .you-album-night').animate({width:'460px'},'slow');
$('.you-album-ul').on('click','li',function(){
	$(this).addClass('curr')
	.stop()
	.animate({
	width:'460px'
	},'slow')
	.siblings()
	.stop()
	.animate({
	width:'175px'
	},'slow')
	.removeClass('curr');
})
