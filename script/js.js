var metaWidth = $(window).width()
var num = 0
var timer = null
var videoRun = true
var huarongRun = true
var quanxinRun = true
var jiaohuRun = true

// 多个视频处理
var huarongvideo = document.getElementById('huarong_video');
var quanxinvideo = document.getElementById('quanxin_video');
var jiaohuvideo = document.getElementById('jiaohu_video');


var video = document.getElementById('example_video');
var source = document.getElementById('videoMP4');

var li = $('.ma-behavior-tags ul li')
$('.ma-new-world-title').addClass('title-move')
$('.ma-new-world-text').addClass('text-run')

function restVideo (num) {
	video.pause()
    video.setAttribute('src','./lib/' + num + '.mp4');
    video.load();
    video.play();
}

$(window).scroll(function () {
	var scrollTop = $(window).scrollTop()

	if (metaWidth > 1200) {
		rizebig(scrollTop)
	} else {
		rizesall(scrollTop)
	}

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

// 分辨率大于 1200
function rizebig (scrollTop) {
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
		

		if (scrollTop > 2600){
			huarongvideo.pause()
			huarongRun = true

			$('.ma-huarong-grid-bg').removeClass('huarong-bg')
			$('.ma-huarong-grid-img').removeClass('huarong-img')
			$('.ma-huarong-text').removeClass('text-run')
			$('.ma-huarong-title').removeClass('title-run')
		} else {
			if (huarongRun == true) {
				huarongRun = false
				huarongvideo.pause();
				huarongvideo.load();
				huarongvideo.play()
				$('.ma-huarong-title').addClass('title-run')
				$('.ma-huarong-text').addClass('text-run')

				$('.ma-huarong-grid-bg').addClass('huarong-bg')
				$('.ma-huarong-grid-img').addClass('huarong-img')
			}
		}
	} else {
		huarongvideo.pause()
		huarongRun = true
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
		if (scrollTop > 4600){
			quanxinvideo.pause()
			quanxinRun = true

			$('.ma-new-icon-text').removeClass('text-run')
			$('.ma-new-icon-title').removeClass('title-run')
		} else {
			if (quanxinRun == true) {
				quanxinRun = false
				quanxinvideo.pause();
				quanxinvideo.load();
				quanxinvideo.play()
				$('.ma-new-icon-title').addClass('title-run')
				$('.ma-new-icon-text').addClass('text-run')
			}
		}
	} else {
		quanxinvideo.pause()
		quanxinRun = true
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
		if (scrollTop > 5600){
			jiaohuvideo.pause()
			jiaohuRun = true

			$('.ma-system-view-text').removeClass('text-run')
			$('.ma-system-view-title').removeClass('title-run')
		} else {
			if (jiaohuRun == true) {
				jiaohuRun = false
				jiaohuvideo.pause();
				jiaohuvideo.load();
				jiaohuvideo.play()
				$('.ma-system-view-title').addClass('title-run')
				$('.ma-system-view-text').addClass('text-run')
			}
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

	if (scrollTop > 14140) {
		$('.ma-weather-bg1').addClass('bg-opacity-one')
		$('.ma-weather-bg2').addClass('bg-opacity-two')
		$('.ma-weather-bg3').addClass('bg-opacity-three')
		$('.ma-weather-bg4').addClass('bg-opacity-four')
		$('.ma-weather-bg5').addClass('bg-opacity-five')
		$('.ma-weather-bg6').addClass('bg-opacity-six')
		$('.ma-weather-bg7').addClass('bg-opacity-senve')
		$('.ma-weather-bg8').addClass('bg-opacity-eight')
		$('.ma-weather-bg9').addClass('bg-opacity-nine')
		$('.ma-weather-bg10').addClass('bg-opacity-ten')
		$('.ma-weather-bg11').addClass('bg-opacity-eleven')
		$('.ma-weather-bg12').addClass('bg-opacity-twelve')
		$('.ma-weather-bg13').addClass('bg-opacity-thirteen')
		$('.ma-weather-bg14').addClass('bg-opacity-fourteen')
		$('.ma-weather-bg15').addClass('bg-opacity-fifteen')
		$('.ma-weather-bg16').addClass('bg-opacity-sixtheen')

		if (scrollTop > 15738) {
			$('.ma-weather-bg1').removeClass('bg-opacity-one')
			$('.ma-weather-bg2').removeClass('bg-opacity-two')
			$('.ma-weather-bg3').removeClass('bg-opacity-three')
			$('.ma-weather-bg4').removeClass('bg-opacity-four')
			$('.ma-weather-bg5').removeClass('bg-opacity-five')
			$('.ma-weather-bg6').removeClass('bg-opacity-six')
			$('.ma-weather-bg7').removeClass('bg-opacity-senve')
			$('.ma-weather-bg8').removeClass('bg-opacity-eight')
			$('.ma-weather-bg9').removeClass('bg-opacity-nine')
			$('.ma-weather-bg10').removeClass('bg-opacity-ten')
			$('.ma-weather-bg11').removeClass('bg-opacity-eleven')
			$('.ma-weather-bg12').removeClass('bg-opacity-twelve')
			$('.ma-weather-bg13').removeClass('bg-opacity-thirteen')
			$('.ma-weather-bg14').removeClass('bg-opacity-fourteen')
			$('.ma-weather-bg15').removeClass('bg-opacity-fifteen')
			$('.ma-weather-bg16').removeClass('bg-opacity-sixtheen')
		}
	} else {
		$('.ma-weather-bg1').removeClass('bg-opacity-one')
		$('.ma-weather-bg2').removeClass('bg-opacity-two')
		$('.ma-weather-bg3').removeClass('bg-opacity-three')
		$('.ma-weather-bg4').removeClass('bg-opacity-four')
		$('.ma-weather-bg5').removeClass('bg-opacity-five')
		$('.ma-weather-bg6').removeClass('bg-opacity-six')
		$('.ma-weather-bg7').removeClass('bg-opacity-senve')
		$('.ma-weather-bg8').removeClass('bg-opacity-eight')
		$('.ma-weather-bg9').removeClass('bg-opacity-nine')
		$('.ma-weather-bg10').removeClass('bg-opacity-ten')
		$('.ma-weather-bg11').removeClass('bg-opacity-eleven')
		$('.ma-weather-bg12').removeClass('bg-opacity-twelve')
		$('.ma-weather-bg13').removeClass('bg-opacity-thirteen')
		$('.ma-weather-bg14').removeClass('bg-opacity-fourteen')
		$('.ma-weather-bg15').removeClass('bg-opacity-fifteen')
		$('.ma-weather-bg16').removeClass('bg-opacity-sixtheen')
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
		if (scrollTop > 16900){
			video.pause()
			videoRun = true
			num = 0
			clearInterval(timer)
			numRun()
			li.removeClass('active')
			li.eq(0).addClass('active')
		} else {
			if (videoRun == true) {
				numRun()
				restVideo(1)
				videoRun = false
			}
		}
	} else {
		num = 0
		video.pause()
		videoRun = true
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

	if (scrollTop > 17600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-leftwo-title-active').addClass('title-run')
		$('.you-Memory-leftwo-title-active').addClass('text-run')

		if (scrollTop > 18600) {
			$('.you-Memory-leftwo-title-active').removeClass('title-run')
			$('.you-Memory-leftwo-title-active').removeClass('text-run')
		}
	} else {
		$('.you-Memory-leftwo-title-active').removeClass('title-run')
		$('.you-Memory-leftwo-title-active').removeClass('text-run')
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

	if (scrollTop > 23280) {
		word(1)
	} else {
		word(0)
	}
	if (scrollTop > 23330) {
		word(2)
	}
	if (scrollTop > 23380) {
		word(3)
	}
	if (scrollTop > 23430) {
		word(4)
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

	if (scrollTop > 26200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-end-title-active').addClass('title-run')
		$('.you-footer-end-text-active').addClass('text-run')

		if (scrollTop > 27500) {
			$('.you-footer-end-title-active').addClass('title-run')
			$('.you-footer-end-text-active').addClass('text-run')
		}
	} else {
		$('.you-footer-end-title-active').removeClass('title-run')
		$('.you-footer-end-text-active').removeClass('text-run')
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

	if (scrollTop > 27500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-one-title-active').addClass('title-run')
		$('.you-one-text-active').addClass('text-run')

		if (scrollTop > 28900) {
			$('.you-one-title-active').addClass('title-run')
			$('.you-one-text-active').addClass('text-run')
		}
	} else {
		$('.you-one-title-active').removeClass('title-run')
		$('.you-one-text-active').removeClass('text-run')
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

		if (scrollTop > 30100) $('.you-funtouch-left').removeClass('title-run')
	} else {
		$('.you-funtouch-left').removeClass('title-run')
	}
}

// 分辨率小于 1200
function rizesall (scrollTop) {
	if (scrollTop > 50) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-new-text-title').addClass('title-move')
		$('.ma-new-text').addClass('text-run')

		if (scrollTop > 736) {
			$('.ma-new-text-title').removeClass('title-move')
			$('.ma-new-text').removeClass('text-run')
		}
	} else {
		$('.ma-new-text-title').removeClass('title-move')
		$('.ma-new-text').removeClass('text-run')
	}

	if (scrollTop > 509) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		if (scrollTop > 1928){
			huarongvideo.pause()
			huarongRun = true

			$('.ma-huarong-grid-bg').removeClass('huarong-bg')
			$('.ma-huarong-grid-img').removeClass('huarong-img')
			$('.ma-huarong-text').removeClass('text-run')
			$('.ma-huarong-title').removeClass('title-run')
		} else {
			if (huarongRun == true) {
				huarongRun = false
				$('.ma-huarong-title').addClass('title-run')
				$('.ma-huarong-text').addClass('text-run')

				$('.ma-huarong-grid-bg').addClass('huarong-bg')
				$('.ma-huarong-grid-img').addClass('huarong-img')
				huarongvideo.pause();
				huarongvideo.load();
				huarongvideo.play()
				
			}
		}
	} else {
		huarongvideo.pause()
		huarongRun = true
		$('.ma-huarong-grid-bg').removeClass('huarong-bg')
		$('.ma-huarong-grid-img').removeClass('huarong-img')
		$('.ma-huarong-text').removeClass('text-run')
		$('.ma-huarong-title').removeClass('title-run')
	}

	if (scrollTop > 1301) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-template-title').addClass('title-run')
		$('.ma-template-text').addClass('text-run')

		if (scrollTop > 2099) {
			$('.ma-template-text').removeClass('text-run')
			$('.ma-template-title').removeClass('title-run')
		}
	} else {
		$('.ma-template-text').removeClass('text-run')
		$('.ma-template-title').removeClass('title-run')
	}

	if (scrollTop > 1968) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		if (scrollTop > 2866){
			quanxinvideo.pause()
			quanxinRun = true

			$('.ma-new-icon-text').removeClass('text-run')
			$('.ma-new-icon-title').removeClass('title-run')
		} else {
			if (quanxinRun == true) {
				quanxinRun = false
				quanxinvideo.pause();
				quanxinvideo.load();
				quanxinvideo.play()
				$('.ma-new-icon-title').addClass('title-run')
				$('.ma-new-icon-text').addClass('text-run')
			}
		}
	} else {
		quanxinvideo.pause()
		quanxinRun = true
		$('.ma-new-icon-text').removeClass('text-run')
		$('.ma-new-icon-title').removeClass('title-run')
	}

	if (scrollTop > 2756) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-title').addClass('title-move')
		$('.ma-system-text').addClass('text-run')


		if (scrollTop > 3635) {
			$('.ma-system-text').removeClass('text-run')
			$('.ma-system-title').removeClass('title-move')
		}
	} else {
		$('.ma-system-text').removeClass('text-run')
		$('.ma-system-title').removeClass('title-move')
	}

	if (scrollTop > 2974) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-system-view-title').addClass('title-run')
		$('.ma-system-view-text').addClass('text-run')


		if (scrollTop > 4438) {
			$('.ma-system-view-text').removeClass('text-run')
			$('.ma-system-view-title').removeClass('title-run')
		}
	} else {
		$('.ma-system-view-text').removeClass('text-run')
		$('.ma-system-view-title').removeClass('title-run')
	}

	if (scrollTop > 4205) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-running-title').addClass('title-run')
		$('.ma-running-text').addClass('text-run')

		if (scrollTop > 5048) {
			$('.ma-running-text').removeClass('text-run')
			$('.ma-running-title').removeClass('title-run')
		}
	} else {
		$('.ma-running-text').removeClass('text-run')
		$('.ma-running-title').removeClass('title-run')
	}

	if (scrollTop > 4798) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-super-title').addClass('title-run')
		$('.ma-super-text').addClass('text-run')

		if (scrollTop > 5740) {
			$('.ma-super-text').removeClass('text-run')
			$('.ma-super-title').removeClass('title-run')
		}
	} else {
		$('.ma-super-text').removeClass('text-run')
		$('.ma-super-title').removeClass('title-run')
	}

	if (scrollTop > 5464) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-lens-title').addClass('title-run')
		$('.ma-lens-text').addClass('text-run')

		if (scrollTop > 6352) {
			$('.ma-lens-text').removeClass('text-run')
			$('.ma-lens-title').removeClass('title-run')
		}
	} else {
		$('.ma-lens-text').removeClass('text-run')
		$('.ma-lens-title').removeClass('title-run')
	}

	if (scrollTop > 6219) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-time-head-title').addClass('title-move')
		$('.ma-time-head-text').addClass('text-run')

		if (scrollTop > 6987) {
			$('.ma-time-head-text').removeClass('text-run')
			$('.ma-time-head-title').removeClass('title-move')
		}
	} else {
		$('.ma-time-head-text').removeClass('text-run')
		$('.ma-time-head-title').removeClass('title-move')
	}

	if (scrollTop > 6488) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icon-title').addClass('title-run')
		$('.ma-icon-text').addClass('text-run')

		if (scrollTop > 7284) {
			$('.ma-icon-text').removeClass('text-run')
			$('.ma-icon-title').removeClass('title-run')
		}
	} else {
		$('.ma-icon-text').removeClass('text-run')
		$('.ma-icon-title').removeClass('title-run')
	}

	if (scrollTop > 7077) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icon-fly').addClass('animated bounceOutDown')

		// $('.ma-icon-fly-icon1').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon2').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon3').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon4').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon5').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon6').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon7').addClass('animated bounceOutDown')
		// $('.ma-icon-fly-icon8').addClass('animated bounceOutDown')

		if (scrollTop > 7589) {
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

	if (scrollTop > 6951) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-icons-title').addClass('title-run')
		$('.ma-icons-text').addClass('text-run')

		if (scrollTop > 7811) {
			$('.ma-icons-text').removeClass('text-run')
			$('.ma-icons-title').removeClass('title-run')
		}
	} else {
		$('.ma-icons-text').removeClass('text-run')
		$('.ma-icons-title').removeClass('title-run')
	}

	if (scrollTop > 7440) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-clock-title').addClass('title-run')
		$('.ma-clock-text').addClass('text-run')

		if (scrollTop > 8295) {
			$('.ma-clock-text').removeClass('text-run')
			$('.ma-clock-title').removeClass('title-run')
		}
	} else {
		$('.ma-clock-text').removeClass('text-run')
		$('.ma-clock-title').removeClass('title-run')
	}

	if (scrollTop > 7988) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-notice-title').addClass('title-run')
		$('.ma-notice-text').addClass('text-run')
		if (scrollTop > 8853) {
			$('.ma-notice-text').removeClass('text-run')
			$('.ma-notice-title').removeClass('title-run')
		}
	} else {
		$('.ma-notice-text').removeClass('text-run')
		$('.ma-notice-title').removeClass('title-run')
	}

	if (scrollTop > 8587) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-day-title').addClass('title-run')
		$('.ma-day-text').addClass('text-run')
		if (scrollTop > 9497) {
			$('.ma-day-text').removeClass('text-run')
			$('.ma-day-title').removeClass('title-run')
		}
	} else {
		$('.ma-day-text').removeClass('text-run')
		$('.ma-day-title').removeClass('title-run')
	}

	if (scrollTop > 9178) { //这里100代表你要动画的元$('.ma-day-title').addClass('title-run')
		$('.ma-window-head-title').addClass('title-run')
		$('.ma-window-head-text').addClass('text-run')

		if (scrollTop > 10035) {
			$('.ma-window-head-title').removeClass('title-run')
			$('.ma-window-head-text').removeClass('text-run')
		}
	} else {
		$('.ma-window-head-title').removeClass('title-run')
		$('.ma-window-head-text').removeClass('text-run')
	}

	// if (scrollTop > 8067) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
	// 	$('.ma-window-title').addClass('title-run')

	// 	if (scrollTop > 8857) $('.ma-window-title').removeClass('title-run')
	// } else {

	// 	$('.ma-window-title').removeClass('title-run')
	// }

	if (scrollTop > 9798) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-fly-title').addClass('title-run')
		$('.ma-fly-text').addClass('text-run')

		if (scrollTop > 10738) {
			$('.ma-fly-text').removeClass('text-run')
			$('.ma-fly-title').removeClass('title-run')
		}
	} else {
		$('.ma-fly-text').removeClass('text-run')
		$('.ma-fly-title').removeClass('title-run')
	}

	if (scrollTop > 10401) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-weather-title').addClass('title-run')
		$('.ma-weather-text').addClass('text-run')

		if (scrollTop > 11301) {
			$('.ma-weather-text').removeClass('text-run')
			$('.ma-weather-title').removeClass('title-run')
		}
	} else {
		$('.ma-weather-text').removeClass('text-run')
		$('.ma-weather-title').removeClass('title-run')
	}

	// if (scrollTop > 9170) {
	// 	$('.ma-weather-bg1').addClass('bg-opacity-one')
	// 	$('.ma-weather-bg2').addClass('bg-opacity-two')
	// 	$('.ma-weather-bg3').addClass('bg-opacity-three')
	// 	$('.ma-weather-bg4').addClass('bg-opacity-four')
	// 	$('.ma-weather-bg5').addClass('bg-opacity-five')
	// 	$('.ma-weather-bg6').addClass('bg-opacity-six')
	// 	$('.ma-weather-bg7').addClass('bg-opacity-senve')
	// 	$('.ma-weather-bg8').addClass('bg-opacity-eight')
	// 	$('.ma-weather-bg9').addClass('bg-opacity-nine')
	// 	$('.ma-weather-bg10').addClass('bg-opacity-ten')
	// 	$('.ma-weather-bg11').addClass('bg-opacity-eleven')
	// 	$('.ma-weather-bg12').addClass('bg-opacity-twelve')
	// 	$('.ma-weather-bg13').addClass('bg-opacity-thirteen')
	// 	$('.ma-weather-bg14').addClass('bg-opacity-fourteen')
	// 	$('.ma-weather-bg15').addClass('bg-opacity-fifteen')
	// 	$('.ma-weather-bg16').addClass('bg-opacity-sixtheen')

	// 	if (scrollTop > 9872) {
	// 		$('.ma-weather-bg1').removeClass('bg-opacity-one')
	// 		$('.ma-weather-bg2').removeClass('bg-opacity-two')
	// 		$('.ma-weather-bg3').removeClass('bg-opacity-three')
	// 		$('.ma-weather-bg4').removeClass('bg-opacity-four')
	// 		$('.ma-weather-bg5').removeClass('bg-opacity-five')
	// 		$('.ma-weather-bg6').removeClass('bg-opacity-six')
	// 		$('.ma-weather-bg7').removeClass('bg-opacity-senve')
	// 		$('.ma-weather-bg8').removeClass('bg-opacity-eight')
	// 		$('.ma-weather-bg9').removeClass('bg-opacity-nine')
	// 		$('.ma-weather-bg10').removeClass('bg-opacity-ten')
	// 		$('.ma-weather-bg11').removeClass('bg-opacity-eleven')
	// 		$('.ma-weather-bg12').removeClass('bg-opacity-twelve')
	// 		$('.ma-weather-bg13').removeClass('bg-opacity-thirteen')
	// 		$('.ma-weather-bg14').removeClass('bg-opacity-fourteen')
	// 		$('.ma-weather-bg15').removeClass('bg-opacity-fifteen')
	// 		$('.ma-weather-bg16').removeClass('bg-opacity-sixtheen')
	// 	}
	// } else {
	// 	$('.ma-weather-bg1').removeClass('bg-opacity-one')
	// 	$('.ma-weather-bg2').removeClass('bg-opacity-two')
	// 	$('.ma-weather-bg3').removeClass('bg-opacity-three')
	// 	$('.ma-weather-bg4').removeClass('bg-opacity-four')
	// 	$('.ma-weather-bg5').removeClass('bg-opacity-five')
	// 	$('.ma-weather-bg6').removeClass('bg-opacity-six')
	// 	$('.ma-weather-bg7').removeClass('bg-opacity-senve')
	// 	$('.ma-weather-bg8').removeClass('bg-opacity-eight')
	// 	$('.ma-weather-bg9').removeClass('bg-opacity-nine')
	// 	$('.ma-weather-bg10').removeClass('bg-opacity-ten')
	// 	$('.ma-weather-bg11').removeClass('bg-opacity-eleven')
	// 	$('.ma-weather-bg12').removeClass('bg-opacity-twelve')
	// 	$('.ma-weather-bg13').removeClass('bg-opacity-thirteen')
	// 	$('.ma-weather-bg14').removeClass('bg-opacity-fourteen')
	// 	$('.ma-weather-bg15').removeClass('bg-opacity-fifteen')
	// 	$('.ma-weather-bg16').removeClass('bg-opacity-sixtheen')
	// }
	

	if (scrollTop > 11022) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-behavior-title').addClass('title-run')
		$('.ma-behavior-text').addClass('text-run')
		if (scrollTop > 11922) {
			$('.ma-behavior-text').removeClass('text-run')
			$('.ma-behavior-title').removeClass('title-run')
		}
	} else {
		$('.ma-behavior-text').removeClass('text-run')
		$('.ma-behavior-title').removeClass('title-run')
	}

	if (scrollTop > 11519) {
		if (scrollTop > 12223){
			video.pause()
			videoRun = true
			num = 0
			clearInterval(timer)
			numRun()
			li.removeClass('active')
			li.eq(0).addClass('active')
		} else {
			if (videoRun == true) {
				numRun()
				restVideo(1)
				videoRun = false
			}
		}
	} else {
		num = 0
		video.pause()
		videoRun = true
		clearInterval(timer)
		li.removeClass('active')
		li.eq(0).addClass('active')
	}

	if (scrollTop > 11854) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.ma-deformation-title').addClass('title-run')
		$('.ma-deformation-text').addClass('text-run')
		if (scrollTop > 12743) {
			$('.ma-deformation-text').removeClass('text-run')
			$('.ma-deformation-title').removeClass('title-run')
		}
	} else {
		$('.ma-deformation-text').removeClass('text-run')
		$('.ma-deformation-title').removeClass('title-run')
	}


	if (scrollTop > 9997) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-head-title').addClass('title-run')
		$('.you-Visual-head-text').addClass('text-run')

		if (scrollTop > 11111) {
			$('.you-Visual-head-title').removeClass('title-run')
			$('.you-Visual-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-head-title').removeClass('title-run')
		$('.you-Visual-head-text').removeClass('text-run')
	}

	if (scrollTop > 10300) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-left-title').addClass('title-run')
		$('.you-Visual-left-text').addClass('text-run')

		if (scrollTop > 11000) {
			$('.you-Visual-left-title').removeClass('title-run')
			$('.you-Visual-left-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-left-title').removeClass('title-run')
		$('.you-Visual-left-text').removeClass('text-run')
	}

	if (scrollTop > 10900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Visual-leftwo-title').addClass('title-run')
		$('.you-Visual-leftwo-text').addClass('text-run')

		if (scrollTop > 12000) {
			$('.you-Visual-leftwo-title').removeClass('title-run')
			$('.you-Visual-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Visual-leftwo-title').removeClass('title-run')
		$('.you-Visual-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 11400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-head-title').addClass('title-run')
		$('.you-Memory-head-text').addClass('text-run')

		if (scrollTop > 12500) {
			$('.you-Memory-head-title').removeClass('title-run')
			$('.you-Memory-head-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-head-title').removeClass('title-run')
		$('.you-Memory-head-text').removeClass('text-run')
	}

	if (scrollTop > 11700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-fuse-title').addClass('title-run')
		$('.you-fuse-text').addClass('text-run')

		if (scrollTop > 12700) {
			$('.you-fuse-title').removeClass('title-run')
			$('.you-fuse-text').removeClass('text-run')
		}
	} else {
		$('.you-fuse-title').removeClass('title-run')
		$('.you-fuse-text').removeClass('text-run')
	}


	if (scrollTop > 12300) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-leftwo-title').addClass('title-run')
		$('.you-Memory-leftwo-text').addClass('text-run')

		if (scrollTop > 13300) {
			$('.you-Memory-leftwo-title').removeClass('title-run')
			$('.you-Memory-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-Memory-leftwo-title').removeClass('title-run')
		$('.you-Memory-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 12900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-Memory-leftwo-title-active').addClass('title-run')
		$('.you-Memory-leftwo-title-active').addClass('text-run')

		if (scrollTop > 14000) {
			$('.you-Memory-leftwo-title-active').removeClass('title-run')
			$('.you-Memory-leftwo-title-active').removeClass('text-run')
		}
	} else {
		$('.you-Memory-leftwo-title-active').removeClass('title-run')
		$('.you-Memory-leftwo-title-active').removeClass('text-run')
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

	if (scrollTop > 13600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-album-head-title').addClass('title-run')
		$('.you-album-head-text').addClass('text-run')

		if (scrollTop > 14800) {
			$('.you-album-head-title').removeClass('title-run')
			$('.you-album-head-text').removeClass('text-run')
		}
	} else {
		$('.you-album-head-title').removeClass('title-run')
		$('.you-album-head-text').removeClass('text-run')
	}

	if (scrollTop > 14800) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-head-title').addClass('title-run')
		$('.you-work-head-text').addClass('text-run')

		if (scrollTop > 15900) {
			$('.you-work-head-title').removeClass('title-run')
			$('.you-work-head-text').removeClass('text-run')
		}
	} else {
		$('.you-work-head-title').removeClass('title-run')
		$('.you-work-head-text').removeClass('text-run')
	}

	if (scrollTop > 15100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-left-title').addClass('title-run')
		$('.you-work-left-text').addClass('text-run')

		if (scrollTop > 16100) {
			$('.you-work-left-title').removeClass('title-run')
			$('.you-work-left-text').removeClass('text-run')
		}
	} else {
		$('.you-work-left-title').removeClass('title-run')
		$('.you-work-left-text').removeClass('text-run')
	}

	if (scrollTop > 15700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-work-leftwo-title').addClass('title-run')
		$('.you-work-leftwo-text').addClass('text-run')

		if (scrollTop > 16800) {
			$('.you-work-leftwo-title').removeClass('title-run')
			$('.you-work-leftwo-text').removeClass('text-run')
		}
	} else {
		$('.you-work-leftwo-title').removeClass('title-run')
		$('.you-work-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 16100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-lifethree-title').addClass('title-run')
		$('.you-footer-lifethree-text').addClass('text-run')

		if (scrollTop > 17300) {
			$('.you-footer-lifethree-title').removeClass('title-run')
			$('.you-footer-lifethree-text').removeClass('text-run')
		}
	} else {
		$('.you-footer-lifethree-title').removeClass('title-run')
		$('.you-footer-lifethree-text').removeClass('text-run')
	}

	if (scrollTop > 16700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-head-title').addClass('title-run')
		$('.you-open-head-text').addClass('text-run')

		if (scrollTop > 17800) {
			$('.you-open-head-title').addClass('title-run')
			$('.you-open-head-text').addClass('text-run')
		}
	} else {
		$('.you-open-head-title').removeClass('title-run')
		$('.you-open-head-text').removeClass('text-run')
	}

	if (scrollTop > 17200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-left-title').addClass('title-run')
		$('.you-open-left-text').addClass('text-run')

		if (scrollTop > 18400) {
			$('.you-open-left-title').addClass('title-run')
			$('.you-open-left-text').addClass('text-run')
		}
	} else {
		$('.you-open-left-title').removeClass('title-run')
		$('.you-open-left-text').removeClass('text-run')
	}

	if (scrollTop > 17600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-open-leftwo-title').addClass('title-run')
		$('.you-open-leftwo-text').addClass('text-run')

		if (scrollTop > 18600) {
			$('.you-open-leftwo-title').addClass('title-run')
			$('.you-open-leftwo-text').addClass('text-run')
		}
	} else {
		$('.you-open-leftwo-title').removeClass('title-run')
		$('.you-open-leftwo-text').removeClass('text-run')
	}

	if (scrollTop > 18000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-end-title').addClass('title-run')
		$('.you-footer-end-text').addClass('text-run')

		if (scrollTop > 19200) {
			$('.you-footer-end-title').addClass('title-run')
			$('.you-footer-end-text').addClass('text-run')
		}
	} else {
		$('.you-footer-end-title').removeClass('title-run')
		$('.you-footer-end-text').removeClass('text-run')
	}

	if (scrollTop > 18800) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-footer-end-title-active').addClass('title-run')
		$('.you-footer-end-text-active').addClass('text-run')

		if (scrollTop > 20300) {
			$('.you-footer-end-title-active').addClass('title-run')
			$('.you-footer-end-text-active').addClass('text-run')
		}
	} else {
		$('.you-footer-end-title-active').removeClass('title-run')
		$('.you-footer-end-text-active').removeClass('text-run')
	}

	if (scrollTop > 19000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-marvellous').addClass('title-run')

		if (scrollTop > 20100) {
			$('.you-marvellous').addClass('title-run')
		}
	} else {
		$('.you-marvellous').removeClass('title-run')
	}

	if (scrollTop > 19400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-one-title').addClass('title-run')
		$('.you-one-text').addClass('text-run')

		if (scrollTop > 20500) {
			$('.you-one-title').addClass('title-run')
			$('.you-one-text').addClass('text-run')
		}
	} else {
		$('.you-one-title').removeClass('title-run')
		$('.you-one-text').removeClass('text-run')
	}
	if (scrollTop > 19800) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
		$('.you-one-title-active').addClass('title-run')
		$('.you-one-text-active').addClass('text-run')

		if (scrollTop > 20900) {
			$('.you-one-title-active').addClass('title-run')
			$('.you-one-text-active').addClass('text-run')
		}
	} else {
		$('.you-one-title-active').removeClass('title-run')
		$('.you-one-text-active').removeClass('text-run')
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
}

running()

function running() {
	// 平行世界--旋转
	var obj = {}

	if (metaWidth > 1200) {
		obj = {
			effect: 'coverflow',
			slidesPerView: 3,
			centeredSlides: true,
			coverflowEffect: {
				rotate: -40,
				stretch: -30,
				depth: 80,
				modifier: 1,
				slideShadows: false
			}
		}
	} else {
		obj = {
			effect: 'coverflow',
			slidesPerView: 3,
			centeredSlides: true,
			coverflowEffect: {
				rotate: -50,
				stretch: -2,
				depth: 200,
				modifier: 1,
				slideShadows: false
			}
		}
	}
	var worldRun = new Swiper('.swiper-ma-world', obj);

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
    	num += 267
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
	restVideo($(this).index() + 1)
})


// 相册
$('.you-album-ul').on('click','li',function(){
	$(this).addClass('curr')
	.stop()
	.animate({
	width:'510px',
	},'slow')
	.removeClass('currbox')
	.siblings()
	.stop()
	.animate({
	width:'210px'
	},'slow')
	.removeClass('curr')
	.addClass('currbox');
	$(this).find('p').stop().fadeIn('slow').parent().addClass('you-album-active').parent().removeClass('you-album-active').siblings().find('p').stop().fadeOut('slow');
})

 var cona = new Swiper('.swiper-cona', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	simulateTouch:false,
	mousewheel: false,
})

var conb = new Swiper('.swiper-conb', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	simulateTouch:false,
	mousewheel: false,
})

var cond = new Swiper('.swiper-cond', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	lsimulateTouch:false,
	mousewheel: false,
})

var conf = new Swiper('.swiper-conf', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	simulateTouch:false,
	mousewheel: false,
})

var conc = new Swiper('.swiper-conc', {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	simulateTouch:false,
	mousewheel: false,
	controller: {
	control: [cona,conb,cond,conf],
	}
})

// 文档编辑
function word(val) {
	clearInterval(timer)
	timer = setTimeout(function () {
		conc.slideTo(val);
		$('.you-worl-speed').stop()
		.animate({left:40 * val +'px'})
	 }, 10);
}
