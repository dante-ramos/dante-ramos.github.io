"use strict";!function(){var a=!1;$(window).scroll(function(){function i(){var a=$("#barra-inferior").outerHeight(),i=$("#navtop").outerHeight();return $(window).scrollTop()>$(window).height()-2*a-i}i()&&!a&&(a=!0,$("#barra-inferior").addClass("fixed").removeClass("absolute"),$("#navtop").addClass("hidden"),$("#stickynav").removeClass("hidden"),$("#contenidoiniciocentro").css("display","none")),!i()&&a&&(a=!1,!$("#iconomenu").hasClass("glyphicon-menu-hamburger")&&$("#stickynav ul").hasClass("activo")&&($("#iconomenu").addClass("glyphicon-menu-hamburger"),$("#stickynav ul").removeClass("activo")),$("#barra-inferior").removeClass("fixed").addClass("absolute"),$("#navtop").removeClass("hidden"),$("#stickynav").addClass("hidden"),$("#contenidoiniciocentro").css("display","block"))});var i=1;setInterval(function(){$("#galeria .inner").css({left:"-"+100*i+"vw"}),++i==$(".inner > .image").length&&(i=0)},5e3),$("a[href^='#']").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if((a=a.length&&a||$("[name="+this.hash.slice(1)+"]")).length){var i=a.offset().top;return $("html,body").animate({scrollTop:i},1e3),!1}}}),$("#iconomenu").click(function(){$("#stickynav ul").toggleClass("activo"),$(this).toggleClass("glyphicon-menu-hamburger"),$("#stickynav ul.activo li a").on("click",function(){$("#stickynav ul.activo").removeClass("activo"),$("#iconomenu").addClass("glyphicon-menu-hamburger")})}),$(window).on("scroll",function(){$(".seccion").each(function(){if($(window).scrollTop()>=$(this).offset().top-140){var a=$(this).attr("id");$("#navsticky a.activo").removeClass("activo"),$('a[href="#'+a+'"]').addClass("activo")}})})}();