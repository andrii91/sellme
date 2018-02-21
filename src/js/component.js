/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


$(document).ready(function () {
  if ($(window).width() > 1200) {
    $('.title span, .programs .programs-items .item h3, .info-block, .box_info h2, .whom-item .row, .result-img, .info-item p span, .guarantees-item').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
      offset: "10%"
    });
    $('.price-item').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: '50%'
    });
    $('.right, .info-img').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
      offset: '0%'
    });
    $('.left, .skills-list li').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
      offset: '0%'
    });

    $('.up').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
      offset: '30%'
    });

    $('.down').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
      offset: '30%'
    });
    $('.head-content').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated slideInUp', // Class to add to the elements when they are visible
      offset: 0
    });
    $('.speaker').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
      offset: '10%'
    });
    $('.go_through-box').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated rotateIn', // Class to add to the elements when they are visible
      offset: '30%'
    });
  }


  $('.programs-items .item h3').click(function () {
    $(this).parent().toggleClass('active');
    $(this).parent().find('.more').slideToggle(200);
  });
  $('.footer-list li a, .modal-btn').fancybox();

  $('.modal-btn').click(function () {
    $('input[name="course"]').val($(this).data('course'));
  })
});