var metaWidth = $(window).width()
var num = 1621
var timer = null
var timers = null
var videoRun = true
var huarongRun = true
var quanxinRun = true
var jiaohuRun = true
var kongzhiRun = true
var houtaiRun = true
var kabao1Run = true
var kabao2Run = true
var kabao3Run = true
var iconRun = true
var clockRun = true
var tianqiRun = true
var bianxingRun = true
var leidianRun = true
var tianqi1Run = true
var zujianRun = true
var yuanziRun = true

// 多个视频处理
var huarongvideo = document.getElementById('huarong_video');
var quanxinvideo = document.getElementById('quanxin_video');
var jiaohuvideo = document.getElementById('jiaohu_video');
var kongzhivideo = document.getElementById('kongzhi_video');
var houtaivideo = document.getElementById('houtai_video');
var kabao1video = document.getElementById('kabao1_video');
var kabao2video = document.getElementById('kabao2_video');
var kabao3video = document.getElementById('kabao3_video');
var iconvideo = document.getElementById('icon_video');
var clockvideo = document.getElementById('clock_video');
var tianqivideo = document.getElementById('tianqi_video');
var bianxingvideo = document.getElementById('bianxing_video');
var leidianvideo = document.getElementById('leidian_video');
var tianqi1video = document.getElementById('tianqi1_video');
var zujianvideo = document.getElementById('zujian_video');
var yuanzivideo = document.getElementById('yuanzi_video');

var video = document.getElementById('example_video1');
var source = document.getElementById('videoMP4');
var tianqi1source = document.getElementById('tianq1MP4');

var li = $('.ma-behavior-tags ul li')
$('.ma-new-world-title').addClass('title-move')
$('.ma-new-world-text').addClass('text-run')

function restVideo(num) {
    var idName = 'example_video' + num

    $('.ma-behavior-video').css({ "display": "none" })
    $('#' + idName).css({ "display": "block" })

    $('#' + idName)[0].pause()
    $('#' + idName)[0].currentTime = 0
    $('#' + idName)[0].playbackRate = 4
    $('#' + idName)[0].play()
}

function tianqiVideo(num) {
    var idName = 'tianqi' + num + '_video'

    $('.tiankong_shichuang').css({ "display": "none" })
    $('#' + idName).css({ "display": "block" })

    $('#' + idName)[0].pause()
    $('#' + idName)[0].currentTime = 0
    $('#' + idName)[0].play()
}

new Vue({
    el: '#app',
    data: function() {
        return {
            values: 100,
            step: 50
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        changeFly(val) {
            this.values = val
            if (val == 0) {
                tianqiVideo(3)
            } else if (val == 50) {
                tianqiVideo(2)
            } else {
                tianqiVideo(1)
            }
        },
        handleScroll() {
            let top = document.documentElement.scrollTop || document.body.scrollTop // 获取页面滚动高度

            if (metaWidth > 1200) {
                if (top < 13379 || top > 14428) {
                    this.values = 100
                }
            } else {
                if (top < 9798 || top > 10738) {
                    this.values = 100
                }
            }


        }
    }
})

$(window).scroll(function() {
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

    new Swiper('.swiper-container3', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
    })

});

// 分辨率大于 1200
function rizebig(scrollTop) {
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

    if (scrollTop > 1512) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。


        if (scrollTop > 2980) {
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
                huarongvideo.currentTime = 0;
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
        if (scrollTop > 4133) {
            zujianvideo.pause()
            zujianRun = true

            $('.ma-template-text').removeClass('text-run')
            $('.ma-template-title').removeClass('title-run')
        } else {
            if (zujianRun == true) {
                zujianRun = false
                zujianvideo.pause();
                zujianvideo.currentTime = 0;
                zujianvideo.play()
                $('.ma-template-title').addClass('title-run')
                $('.ma-template-text').addClass('text-run')
            }
        }
    } else {
        zujianvideo.pause()
        zujianRun = true
        $('.ma-template-text').removeClass('text-run')
        $('.ma-template-title').removeClass('title-run')
    }

    if (scrollTop > 3667) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 5085) {
            quanxinvideo.pause()
            quanxinRun = true

            $('.ma-new-icon-text').removeClass('text-run')
            $('.ma-new-icon-title').removeClass('title-run')
        } else {
            if (quanxinRun == true) {
                quanxinRun = false
                quanxinvideo.pause();
                quanxinvideo.currentTime = 0;
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

    if (scrollTop > 4566) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-system-title').addClass('title-move')
        $('.ma-system-text').addClass('text-run')


        if (scrollTop > 5642) {
            $('.ma-system-text').removeClass('text-run')
            $('.ma-system-title').removeClass('title-move')
        }
    } else {
        $('.ma-system-text').removeClass('text-run')
        $('.ma-system-title').removeClass('title-move')
    }


    if (scrollTop > 4863) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 6667) {
            jiaohuvideo.pause()
            jiaohuRun = true
            kongzhivideo.pause()


            $('.ma-system-view-text').removeClass('text-run')
            $('.ma-system-view-title').removeClass('title-run')
        } else {
            if (jiaohuRun == true) {
                jiaohuRun = false
                jiaohuvideo.pause();
                jiaohuvideo.currentTime = 0;
                jiaohuvideo.play()

                kongzhivideo.pause()
                kongzhivideo.currentTime = 0;
                kongzhivideo.play()

                $('.ma-system-view-title').addClass('title-run')
                $('.ma-system-view-text').addClass('text-run')
            }
        }
    } else {
        jiaohuvideo.pause()
        jiaohuRun = true
        kongzhivideo.pause()

        $('.ma-system-view-text').removeClass('text-run')
        $('.ma-system-view-title').removeClass('title-run')
    }

    if (scrollTop > 6041) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 7237) {
            houtaivideo.pause()
            houtaiRun = true


            $('.ma-running-title').removeClass('title-run')
            $('.ma-running-text').removeClass('text-run')
        } else {
            if (houtaiRun == true) {
                houtaiRun = false
                houtaivideo.pause();
                houtaivideo.currentTime = 0;
                houtaivideo.play()

                $('.ma-running-title').addClass('title-run')
                $('.ma-running-text').addClass('text-run')
            }
        }
    } else {
        houtaivideo.pause()
        houtaiRun = true
        $('.ma-running-text').removeClass('text-run')
        $('.ma-running-title').removeClass('title-run')
    }



    if (scrollTop > 6603) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 8112) {
            kabao1video.pause()
            kabao2video.pause()
            kabao3video.pause()
            kabao1Run = true


            $('.ma-super-text').removeClass('text-run')
            $('.ma-super-title').removeClass('title-run')
        } else {
            if (kabao1Run == true) {
                kabao1Run = false
                kabao1video.pause();
                kabao1video.currentTime = 0;
                kabao1video.play()

                kabao2video.pause();
                kabao2video.currentTime = 0;
                kabao2video.play()

                kabao3video.pause();
                kabao3video.currentTime = 0;
                kabao3video.play()

                $('.ma-super-title').addClass('title-run')
                $('.ma-super-text').addClass('text-run')
            }
        }
    } else {
        kabao1video.pause()
        kabao2video.pause()
        kabao3video.pause()
        kabao1Run = true
        $('.ma-super-text').removeClass('text-run')
        $('.ma-super-title').removeClass('title-run')
    }

    if (scrollTop > 7615) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-lens-title').addClass('title-run')
        $('.ma-lens-text').addClass('text-run')

        if (scrollTop > 8957) {
            $('.ma-lens-text').removeClass('text-run')
            $('.ma-lens-title').removeClass('title-run')
        }
    } else {
        $('.ma-lens-text').removeClass('text-run')
        $('.ma-lens-title').removeClass('title-run')
    }

    if (scrollTop > 8404) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-time-head-title').addClass('title-move')
        $('.ma-time-head-text').addClass('text-run')

        if (scrollTop > 9448) {
            $('.ma-time-head-text').removeClass('text-run')
            $('.ma-time-head-title').removeClass('title-move')
        }
    } else {
        $('.ma-time-head-text').removeClass('text-run')
        $('.ma-time-head-title').removeClass('title-move')
    }

    if (scrollTop > 8830) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-icon-title').addClass('title-run')
        $('.ma-icon-text').addClass('text-run')

        if (scrollTop > 10233) {
            $('.ma-icon-text').removeClass('text-run')
            $('.ma-icon-title').removeClass('title-run')
        }
    } else {
        $('.ma-icon-text').removeClass('text-run')
        $('.ma-icon-title').removeClass('title-run')
    }

    if (scrollTop > 9230) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-icon-fly').addClass('animated bounceOutDown')
        $('.ma-icon-bg-run').addClass('icon-bg')

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
            $('.ma-icon-bg-run').removeClass('icon-bg')
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
        $('.ma-icon-bg-run').removeClass('icon-bg')
            // $('.ma-icon-fly-icon1').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon2').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon3').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon4').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon5').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon6').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon7').removeClass('animated bounceOutDown')
            // $('.ma-icon-fly-icon8').removeClass('animated bounceOutDown')
    }

    if (scrollTop > 9674) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 11033) {
            iconvideo.pause()
            iconRun = true


            $('.ma-icons-text').removeClass('text-run')
            $('.ma-icons-title').removeClass('title-run')
        } else {
            if (iconRun == true) {
                iconRun = false
                iconvideo.pause();
                iconvideo.currentTime = 0;
                iconvideo.play()

                $('.ma-icons-title').addClass('title-run')
                $('.ma-icons-text').addClass('text-run')
            }
        }
    } else {
        iconvideo.pause()
        iconRun = true
        $('.ma-icons-text').removeClass('text-run')
        $('.ma-icons-title').removeClass('title-run')
    }

    if (scrollTop > 10658) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 11858) {
            clockvideo.pause()
            clockRun = true


            $('.ma-clock-text').removeClass('text-run')
            $('.ma-clock-title').removeClass('title-run')
        } else {
            if (clockRun == true) {
                clockRun = false
                clockvideo.pause();
                clockvideo.currentTime = 0;
                clockvideo.play()

                $('.ma-clock-title').addClass('title-run')
                $('.ma-clock-text').addClass('text-run')
            }
        }
    } else {
        clockvideo.pause()
        clockRun = true
        $('.ma-clock-text').removeClass('text-run')
        $('.ma-clock-title').removeClass('title-run')
    }

    if (scrollTop > 11357) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 12470) {
            yuanzivideo.pause()
            yuanziRun = true


            $('.ma-notice-text').removeClass('text-run')
            $('.ma-notice-title').removeClass('title-run')
        } else {
            if (yuanziRun == true) {
                yuanziRun = false
                yuanzivideo.pause();
                yuanzivideo.currentTime = 0;
                yuanzivideo.play()

                $('.ma-notice-title').addClass('title-run')
                $('.ma-notice-text').addClass('text-run')
            }
        }
    } else {
        yuanzivideo.pause()
        yuanziRun = true
        $('.ma-notice-text').removeClass('text-run')
        $('.ma-notice-title').removeClass('title-run')
    }

    if (scrollTop > 12055) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 13332) {
            tianqivideo.pause()
            tianqiRun = true


            $('.ma-day-text').removeClass('text-run')
            $('.ma-day-title').removeClass('title-run')
        } else {
            if (tianqiRun == true) {
                tianqiRun = false
                tianqivideo.pause();
                tianqivideo.currentTime = 0;
                tianqivideo.play()

                $('.ma-day-title').addClass('title-run')
                $('.ma-day-text').addClass('text-run')
            }
        }
    } else {
        tianqivideo.pause()
        tianqiRun = true
        $('.ma-day-text').removeClass('text-run')
        $('.ma-day-title').removeClass('title-run')
    }

    if (scrollTop > 12696) { //这里100代表你要动画的元$('.ma-day-title').addClass('title-run')
        $('.ma-window-head-title').addClass('title-run')
        $('.ma-window-head-text').addClass('text-run')

        if (scrollTop > 13705) {
            $('.ma-window-head-title').removeClass('title-run')
            $('.ma-window-head-text').removeClass('text-run')
        }
    } else {
        $('.ma-window-head-title').removeClass('title-run')
        $('.ma-window-head-text').removeClass('text-run')
    }

    if (scrollTop > 13275) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-window-title').addClass('title-run')

        if (scrollTop > 14473) $('.ma-window-title').removeClass('title-run')
    } else {

        $('.ma-window-title').removeClass('title-run')
    }

    if (scrollTop > 13782) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 15320) {
            leidianvideo.pause()
            tianqi1video.pause()
            leidianRun = true
            $('.ma-fly-text').removeClass('text-run')
            $('.ma-fly-title').removeClass('title-run')
        } else {

            if (leidianRun == true) {
                leidianRun = false
                leidianvideo.pause();
                leidianvideo.currentTime = 0;
                leidianvideo.play()

                tianqi1video.pause();
                tianqi1video.currentTime = 0;
                tianqi1video.play()

                $('.ma-fly-title').addClass('title-run')
                $('.ma-fly-text').addClass('text-run')
            }
        }
    } else {
        leidianvideo.pause()
        tianqi1video.pause()
        leidianRun = true
        $('.ma-fly-text').removeClass('text-run')
        $('.ma-fly-title').removeClass('title-run')
    }

    if (scrollTop > 14811) {
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

        if (scrollTop > 16137) {
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

    if (scrollTop > 14811) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-weather-title').addClass('title-run')
        $('.ma-weather-text').addClass('text-run')

        if (scrollTop > 16137) {
            $('.ma-weather-text').removeClass('text-run')
            $('.ma-weather-title').removeClass('title-run')
        }
    } else {
        $('.ma-weather-text').removeClass('text-run')
        $('.ma-weather-title').removeClass('title-run')
    }

    if (scrollTop > 15586) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.ma-behavior-title').addClass('title-run')
        $('.ma-behavior-text').addClass('text-run')

        if (scrollTop > 16842) {
            $('.ma-behavior-text').removeClass('text-run')
            $('.ma-behavior-title').removeClass('title-run')
        }
    } else {
        $('.ma-behavior-text').removeClass('text-run')
        $('.ma-behavior-title').removeClass('title-run')
    }

    if (scrollTop > 15586) {
        if (scrollTop > 17154) {
            video.pause()
            videoRun = true
            num = 1621
            clearInterval(timers)
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
        num = 1621
        video.pause()
        videoRun = true
        clearInterval(timers)
        li.removeClass('active')
        li.eq(0).addClass('active')
    }

    if (scrollTop > 16600) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 18063) {
            bianxingvideo.pause()
            bianxingRun = true


            $('.ma-deformation-text').removeClass('text-run')
            $('.ma-deformation-title').removeClass('title-run')
        } else {
            if (bianxingRun == true) {
                bianxingRun = false
                bianxingvideo.pause();
                bianxingvideo.currentTime = 0;
                bianxingvideo.play()

                $('.ma-deformation-title').addClass('title-run')
                $('.ma-deformation-text').addClass('text-run')
            }
        }
    } else {
        bianxingvideo.pause()
        bianxingRun = true
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

    $(document).ready(function() {
        $('.you-fuse-img-fu').fadeOut('slow')
        $('.you-album-img').fadeIn('slow')
        $('.you-photo').fadeOut('slow')
    })


    if (scrollTop > 20518) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Memory-leftwo-title').addClass('title-run')
        $('.you-Memory-leftwo-text').addClass('text-run')

        if (scrollTop > 22165) {
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

    if (scrollTop > 20980) {
        optimize()
        if (scrollTop > 22047) {
            unoptimize()
        }
    } else {
        unoptimize()
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

    if (scrollTop > 29100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-funtouch-left').addClass('title-run')

        if (scrollTop > 30100) $('.you-funtouch-left').removeClass('title-run')
    } else {
        $('.you-funtouch-left').removeClass('title-run')
    }
}

// 分辨率小于 1200
function rizesall(scrollTop) {
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
        if (scrollTop > 1928) {
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
                huarongvideo.currentTime = 0;
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
        if (scrollTop > 2099) {
            zujianvideo.pause()
            zujianRun = true

            $('.ma-template-text').removeClass('text-run')
            $('.ma-template-title').removeClass('title-run')
        } else {
            if (zujianRun == true) {
                zujianRun = false
                zujianvideo.pause();
                zujianvideo.currentTime = 0;
                zujianvideo.play()
                $('.ma-template-title').addClass('title-run')
                $('.ma-template-text').addClass('text-run')
            }
        }
    } else {
        zujianvideo.pause()
        zujianRun = true
        $('.ma-template-text').removeClass('text-run')
        $('.ma-template-title').removeClass('title-run')
    }

    if (scrollTop > 1968) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 2866) {
            quanxinvideo.pause()
            quanxinRun = true

            $('.ma-new-icon-text').removeClass('text-run')
            $('.ma-new-icon-title').removeClass('title-run')
        } else {
            if (quanxinRun == true) {
                quanxinRun = false
                quanxinvideo.pause();
                quanxinvideo.currentTime = 0;
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
    console.log(scrollTop)
    if (scrollTop > 3238) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。

        if (scrollTop > 4259) {
            jiaohuvideo.pause()
            jiaohuRun = true
            $('.ma-system-view-text-left').removeClass('text-run')
            $('.ma-system-view-title-left').removeClass('title-run')
        } else {
            if (jiaohuRun == true) {
                jiaohuRun = false
                jiaohuvideo.pause();
                jiaohuvideo.currentTime = 0;
                jiaohuvideo.play()
                $('.ma-system-view-title-left').addClass('title-run')
                $('.ma-system-view-text-left').addClass('text-run')
            }
        }
    } else {
        jiaohuRun = true
        jiaohuvideo.pause();
        $('.ma-system-view-text-left').removeClass('text-run')
        $('.ma-system-view-title-left').removeClass('title-run')
    }

    if (scrollTop > 3861) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 4085) {
            kongzhivideo.pause()
            kongzhiRun = true
            $('.ma-system-view-title-right').removeClass('title-run')
            $('.ma-system-view-text-right').removeClass('text-run')
        } else {
            if (kongzhiRun == true) {
                kongzhiRun = false
                kongzhivideo.pause();
                kongzhivideo.currentTime = 0;
                kongzhivideo.play()
                $('.ma-system-view-title-right').addClass('title-run')
                $('.ma-system-view-text-right').addClass('text-run')
            }
        }
    } else {
        kongzhiRun = true
        kongzhivideo.pause();
        $('.ma-system-view-text-right').removeClass('text-run')
        $('.ma-system-view-title-right').removeClass('title-run')
    }

    if (scrollTop > 4205) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 5230) {
            houtaivideo.pause()
            houtaiRun = true


            $('.ma-running-title').removeClass('title-run')
            $('.ma-running-text').removeClass('text-run')
        } else {
            if (houtaiRun == true) {
                houtaiRun = false
                houtaivideo.pause();
                houtaivideo.currentTime = 0;
                houtaivideo.play()

                $('.ma-running-title').addClass('title-run')
                $('.ma-running-text').addClass('text-run')
            }
        }
    } else {
        houtaivideo.pause()
        houtaiRun = true
        $('.ma-running-text').removeClass('text-run')
        $('.ma-running-title').removeClass('title-run')
    }

    if (scrollTop > 4798) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 5740) {
            kabao1video.pause()
            kabao1Run = true


            $('.ma-super-text').removeClass('text-run')
            $('.ma-super-title').removeClass('title-run')
        } else {
            if (kabao1Run == true) {
                kabao1Run = false
                kabao1video.pause();
                kabao1video.currentTime = 0;
                kabao1video.play()

                $('.ma-super-title').addClass('title-run')
                $('.ma-super-text').addClass('text-run')
            }
        }

    } else {
        kabao1video.pause()
        kabao1Run = true
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
        if (scrollTop > 8068) {
            iconvideo.pause()
            iconRun = true


            $('.ma-icons-text').removeClass('text-run')
            $('.ma-icons-title').removeClass('title-run')
        } else {
            if (iconRun == true) {
                iconRun = false
                iconvideo.pause();
                iconvideo.currentTime = 0;
                iconvideo.play()

                $('.ma-icons-title').addClass('title-run')
                $('.ma-icons-text').addClass('text-run')
            }
        }
    } else {
        iconvideo.pause()
        iconRun = true
        $('.ma-icons-text').removeClass('text-run')
        $('.ma-icons-title').removeClass('title-run')
    }

    if (scrollTop > 7440) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 8295) {
            clockvideo.pause()
            clockRun = true


            $('.ma-clock-text').removeClass('text-run')
            $('.ma-clock-title').removeClass('title-run')
        } else {
            if (clockRun == true) {
                clockRun = false
                clockvideo.pause();
                clockvideo.currentTime = 0;
                clockvideo.play()

                $('.ma-clock-title').addClass('title-run')
                $('.ma-clock-text').addClass('text-run')
            }
        }
    } else {
        clockvideo.pause()
        clockRun = true
        $('.ma-clock-text').removeClass('text-run')
        $('.ma-clock-title').removeClass('title-run')
    }

    if (scrollTop > 7988) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 8953) {
            yuanzivideo.pause()
            yuanziRun = true


            $('.ma-notice-text').removeClass('text-run')
            $('.ma-notice-title').removeClass('title-run')
        } else {
            if (yuanziRun == true) {
                yuanziRun = false
                yuanzivideo.pause();
                yuanzivideo.currentTime = 0;
                yuanzivideo.play()

                $('.ma-notice-title').addClass('title-run')
                $('.ma-notice-text').addClass('text-run')
            }
        }
    } else {
        yuanzivideo.pause()
        yuanziRun = true
        $('.ma-notice-text').removeClass('text-run')
        $('.ma-notice-title').removeClass('title-run')
    }

    if (scrollTop > 8587) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 9497) {
            tianqivideo.pause()
            tianqiRun = true


            $('.ma-day-text').removeClass('text-run')
            $('.ma-day-title').removeClass('title-run')
        } else {
            if (tianqiRun == true) {
                tianqiRun = false
                tianqivideo.pause();
                tianqivideo.currentTime = 0;
                tianqivideo.play()

                $('.ma-day-title').addClass('title-run')
                $('.ma-day-text').addClass('text-run')
            }
        }
    } else {
        tianqivideo.pause()
        tianqiRun = true
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
        if (scrollTop > 10738) {
            leidianvideo.pause()
            tianqi1video.pause()
            leidianRun = true
            $('.ma-fly-text').removeClass('text-run')
            $('.ma-fly-title').removeClass('title-run')
        } else {

            if (leidianRun == true) {
                leidianRun = false
                leidianvideo.pause();
                leidianvideo.currentTime = 0;
                leidianvideo.play()

                tianqi1video.pause();
                tianqi1video.currentTime = 0;
                tianqi1video.play()

                $('.ma-fly-title').addClass('title-run')
                $('.ma-fly-text').addClass('text-run')
            }
        }
    } else {
        leidianvideo.pause()
        tianqi1video.pause()
        leidianRun = true
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
        if (scrollTop > 12223) {
            video.pause()
            videoRun = true
            num = 1621
            clearInterval(timers)
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
        num = 1621
        video.pause()
        videoRun = true
        clearInterval(timers)
        li.removeClass('active')
        li.eq(0).addClass('active')
    }

    if (scrollTop > 11854) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        if (scrollTop > 12743) {
            bianxingvideo.pause()
            bianxingRun = true


            $('.ma-deformation-text').removeClass('text-run')
            $('.ma-deformation-title').removeClass('title-run')
        } else {
            if (bianxingRun == true) {
                bianxingRun = false
                bianxingvideo.pause();
                bianxingvideo.currentTime = 0;
                bianxingvideo.play()

                $('.ma-deformation-title').addClass('title-run')
                $('.ma-deformation-text').addClass('text-run')
            }
        }
    } else {
        bianxingvideo.pause()
        bianxingRun = true
        $('.ma-deformation-text').removeClass('text-run')
        $('.ma-deformation-title').removeClass('title-run')
    }


    if (scrollTop > 12400) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Visual-head-title').addClass('title-run')
        $('.you-Visual-head-text').addClass('text-run')

        if (scrollTop > 13700) {
            $('.you-Visual-head-title').removeClass('title-run')
            $('.you-Visual-head-text').removeClass('text-run')
        }
    } else {
        $('.you-Visual-head-title').removeClass('title-run')
        $('.you-Visual-head-text').removeClass('text-run')
    }

    if (scrollTop > 12900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Visual-left-title').addClass('title-run')
        $('.you-Visual-left-text').addClass('text-run')

        if (scrollTop > 14000) {
            $('.you-Visual-left-title').removeClass('title-run')
            $('.you-Visual-left-text').removeClass('text-run')
        }
    } else {
        $('.you-Visual-left-title').removeClass('title-run')
        $('.you-Visual-left-text').removeClass('text-run')
    }

    if (scrollTop > 13500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Visual-leftwo-title').addClass('title-run')
        $('.you-Visual-leftwo-text').addClass('text-run')

        if (scrollTop > 14500) {
            $('.you-Visual-leftwo-title').removeClass('title-run')
            $('.you-Visual-leftwo-text').removeClass('text-run')
        }
    } else {
        $('.you-Visual-leftwo-title').removeClass('title-run')
        $('.you-Visual-leftwo-text').removeClass('text-run')
    }

    if (scrollTop > 13800) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Memory-head-title').addClass('title-run')
        $('.you-Memory-head-text').addClass('text-run')

        if (scrollTop > 15000) {
            $('.you-Memory-head-title').removeClass('title-run')
            $('.you-Memory-head-text').removeClass('text-run')
        }
    } else {
        $('.you-Memory-head-title').removeClass('title-run')
        $('.you-Memory-head-text').removeClass('text-run')
    }

    if (scrollTop > 14100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-fuse-title').addClass('title-run')
        $('.you-fuse-text').addClass('text-run')

        if (scrollTop > 15200) {
            $('.you-fuse-title').removeClass('title-run')
            $('.you-fuse-text').removeClass('text-run')
        }
    } else {
        $('.you-fuse-title').removeClass('title-run')
        $('.you-fuse-text').removeClass('text-run')
    }

    $(document).ready(function() {
        $('.you-fuse-img-fu').fadeIn('slow')
        $('.you-album-img').fadeOut('slow')
        $('.you-photo').fadeIn('slow')
    })

    if (scrollTop > 14700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Memory-leftwo-title').addClass('title-run')
        $('.you-Memory-leftwo-text').addClass('text-run')

        if (scrollTop > 15700) {
            $('.you-Memory-leftwo-title').removeClass('title-run')
            $('.you-Memory-leftwo-text').removeClass('text-run')
        }
    } else {
        $('.you-Memory-leftwo-title').removeClass('title-run')
        $('.you-Memory-leftwo-text').removeClass('text-run')
    }

    if (scrollTop > 15300) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-Memory-leftwo-title-active').addClass('title-run')
        $('.you-Memory-leftwo-title-active').addClass('text-run')

        if (scrollTop > 16300) {
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

    if (scrollTop > 15900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-album-head-title').addClass('title-run')
        $('.you-album-head-text').addClass('text-run')

        if (scrollTop > 17000) {
            $('.you-album-head-title').removeClass('title-run')
            $('.you-album-head-text').removeClass('text-run')
        }
    } else {
        $('.you-album-head-title').removeClass('title-run')
        $('.you-album-head-text').removeClass('text-run')
    }

    if (scrollTop > 16200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.photo-head-title').addClass('title-run')
        $('.photo-head-text').addClass('text-run')

        if (scrollTop > 17300) {
            $('.photo-head-title').removeClass('title-run')
            $('.photo-head-text').removeClass('text-run')
        }
    } else {
        $('.photo-head-title').removeClass('title-run')
        $('.photo-head-text').removeClass('text-run')
    }

    if (scrollTop > 16900) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-work-head-title').addClass('title-run')
        $('.you-work-head-text').addClass('text-run')

        if (scrollTop > 17900) {
            $('.you-work-head-title').removeClass('title-run')
            $('.you-work-head-text').removeClass('text-run')
        }
    } else {
        $('.you-work-head-title').removeClass('title-run')
        $('.you-work-head-text').removeClass('text-run')
    }

    if (scrollTop > 17100) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-work-left-title').addClass('title-run')
        $('.you-work-left-text').addClass('text-run')

        if (scrollTop > 18200) {
            $('.you-work-left-title').removeClass('title-run')
            $('.you-work-left-text').removeClass('text-run')
        }
    } else {
        $('.you-work-left-title').removeClass('title-run')
        $('.you-work-left-text').removeClass('text-run')
    }

    if (scrollTop > 17700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-work-leftwo-title').addClass('title-run')
        $('.you-work-leftwo-text').addClass('text-run')

        if (scrollTop > 18700) {
            $('.you-work-leftwo-title').removeClass('title-run')
            $('.you-work-leftwo-text').removeClass('text-run')
        }
    } else {
        $('.you-work-leftwo-title').removeClass('title-run')
        $('.you-work-leftwo-text').removeClass('text-run')
    }

    if (scrollTop > 18200) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-footer-lifethree-title').addClass('title-run')
        $('.you-footer-lifethree-text').addClass('text-run')

        if (scrollTop > 19200) {
            $('.you-footer-lifethree-title').removeClass('title-run')
            $('.you-footer-lifethree-text').removeClass('text-run')
        }
    } else {
        $('.you-footer-lifethree-title').removeClass('title-run')
        $('.you-footer-lifethree-text').removeClass('text-run')
    }

    if (scrollTop > 18700) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-open-head-title').addClass('title-run')
        $('.you-open-head-text').addClass('text-run')

        if (scrollTop > 19800) {
            $('.you-open-head-title').addClass('title-run')
            $('.you-open-head-text').addClass('text-run')
        }
    } else {
        $('.you-open-head-title').removeClass('title-run')
        $('.you-open-head-text').removeClass('text-run')
    }

    if (scrollTop > 19000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-open-left-title').addClass('title-run')
        $('.you-open-left-text').addClass('text-run')

        if (scrollTop > 20000) {
            $('.you-open-left-title').addClass('title-run')
            $('.you-open-left-text').addClass('text-run')
        }
    } else {
        $('.you-open-left-title').removeClass('title-run')
        $('.you-open-left-text').removeClass('text-run')
    }

    if (scrollTop > 19500) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-open-leftwo-title').addClass('title-run')
        $('.you-open-leftwo-text').addClass('text-run')

        if (scrollTop > 20600) {
            $('.you-open-leftwo-title').addClass('title-run')
            $('.you-open-leftwo-text').addClass('text-run')
        }
    } else {
        $('.you-open-leftwo-title').removeClass('title-run')
        $('.you-open-leftwo-text').removeClass('text-run')
    }

    if (scrollTop > 20000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-footer-end-title').addClass('title-run')
        $('.you-footer-end-text').addClass('text-run')

        if (scrollTop > 21000) {
            $('.you-footer-end-title').addClass('title-run')
            $('.you-footer-end-text').addClass('text-run')
        }
    } else {
        $('.you-footer-end-title').removeClass('title-run')
        $('.you-footer-end-text').removeClass('text-run')
    }

    if (scrollTop > 20555) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-footer-end-title-active').addClass('title-run')
        $('.you-footer-end-text-active').addClass('text-run')

        if (scrollTop > 21555) {
            $('.you-footer-end-title-active').addClass('title-run')
            $('.you-footer-end-text-active').addClass('text-run')
        }
    } else {
        $('.you-footer-end-title-active').removeClass('title-run')
        $('.you-footer-end-text-active').removeClass('text-run')
    }

    if (scrollTop > 21000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-marvellous').addClass('title-run')

        if (scrollTop > 22555) {
            $('.you-marvellous').addClass('title-run')
        }
    } else {
        $('.you-marvellous').removeClass('title-run')
    }

    if (scrollTop > 21000) { //这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
        $('.you-one-title').addClass('title-run')
        $('.you-one-text').addClass('text-run')

        if (scrollTop > 22700) {
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
                rotate: -50,
                stretch: -80,
                depth: 100,
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

    $('.ma-btn-left').click(function() {
        worldRun.slidePrev();
        $('.ma-desk-img').attr('src', './images/desk-02.png')
    })
    $('.ma-btn-right').click(function() {
        worldRun.slideNext();
        $('.ma-desk-img').attr('src', './images/desk-01.png')
    })
}

// 行为壁纸
function numRun() {
    var odo = new Odometer('.ma-behavior-step', {
        num: num
    });


    //改变数值
    timers = setInterval(() => {
        num += 49
        odo.update(num)

        if (num >= 8000) {
            clearInterval(timers)
            num = 1621
            odo.update(8000)

        }
    }, 50)


}

// 换取花颜色
li.click(function() {
    li.removeClass('active')
    $(this).addClass('active')
    num = 1621
    clearInterval(timers)
    numRun()
    restVideo($(this).index() + 1)
})


// 相册
$('.you-album-ul').on('click', 'li', function() {
    if ($(this).hasClass('curr')) {
        return false
    }
    $(this).addClass('curr')
        .stop()
        .animate({
            width: '510px',
        }, 'slow')
        .removeClass('currbox')
        .siblings()
        .stop()
        .animate({
            width: '210px'
        }, 'slow')
        .removeClass('curr')
        .addClass('currbox');
        $(this).find('div').addClass('you-album-active').stop().animate({
            height: '258px'
        }, 'slow').parent().siblings().find('div').removeClass('you-album-active').stop().animate({
            height: '150px'
        }, 'slow')        
    $(this).find('p').stop().fadeIn('slow').parent().parent().siblings().find('p').stop().fadeOut('slow');
})

var cona = new Swiper('.swiper-cona', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    simulateTouch: false,
    mousewheel: false,
})

var conb = new Swiper('.swiper-conb', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    simulateTouch: false,
    mousewheel: false,
})

var cond = new Swiper('.swiper-cond', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    lsimulateTouch: false,
    mousewheel: false,
})

var conf = new Swiper('.swiper-conf', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    simulateTouch: false,
    mousewheel: false,
})

var conc = new Swiper('.swiper-conc', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    simulateTouch: false,
    mousewheel: false,
    controller: {
        control: [cona, conb, cond, conf],
    }
})

// 文档编辑
function word(val) {
    clearInterval(timer)
    timer = setTimeout(function() {
        conc.slideTo(val);
        $('.you-worl-speed').stop()
            .animate({ left: 40 * val + 'px' })
    }, 10);
}

// 进程优化
function optimize() {
    $('.you-filled-fix').stop()
        .animate({ height: '50px' }, 'slow')
    $('.you-water-fix')
        .stop()
        .animate({ top: '78px' }, 'slow')
}

function unoptimize() {
    $('.you-filled-fix').stop()
        .animate({ height: '128px' }, 'slow')
    $('.you-water-fix')
        .stop()
        .animate({ top: '0px' }, 'slow')
}