function doSomething(o){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic/index.html"!==window.location.pathname&&"/project-sic/"!==window.location.pathname||(o>30?(siteNavbar.classList.add("navbar-scroll"),$(".navbar-logo").removeClass("show-icon"),$(".navbar-logo-scroll").addClass("show-icon"),navSeparator.style.backgroundColor="#5275a7",$(".navbar-sections-title").addClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").addClass("show-icon"),$(".navbar-dropdown-icon").removeClass("show-icon"),$(".navbar-hamburger-icon-scroll").addClass("show-icon"),$(".navbar-hamburger-icon").removeClass("show-icon")):(siteNavbar.classList.remove("navbar-scroll"),$(".navbar-logo").addClass("show-icon"),$(".navbar-logo-scroll").removeClass("show-icon"),navSeparator.style.backgroundColor="#ffffff",$(".navbar-sections-title").removeClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").removeClass("show-icon"),$(".navbar-dropdown-icon").addClass("show-icon"),$(".navbar-hamburger-icon-scroll").removeClass("show-icon"),$(".navbar-hamburger-icon").addClass("show-icon")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction2(){document.getElementById("myDropdown2").classList.toggle("show")}function myFunction3(){document.getElementById("myDropdown3").classList.toggle("show")}function myFunctionHamburger(){document.getElementById("myDropdownHamburger").classList.toggle("show")}function myFunction2Hamburger(){document.getElementById("myDropdown2Hamburger").classList.toggle("show")}function myFunction3Hamburger(){document.getElementById("myDropdown3Hamburger").classList.toggle("show")}var aboutCarousel=$(".about-cards-carousel");aboutCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoWidth:!0,margin:38,responsive:{0:{items:1,autoWidth:!0,center:!0,loop:!0},1221:{items:3}}}),function(){$.validator.setDefaults({invalidHandler:function(o,e){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(o){var e=$(o).serialize(),n=$(o).find("select, input, textarea, button").not("[disabled]"),i=$(o).find(".form-message"),s=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),a=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),t=function(o){var e=o?s:a;n.removeAttr("disabled"),i.removeClass(o?"error":"success"),i.addClass(o?"success":"error"),i.html(e)};n.attr("disabled","disabled"),i.html(""),$(o).find(".button-wrapper .loader").length||$(o).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(o).attr("action"),method:"POST",data:e}).done(function(e){t(1===parseInt(e)),o.reset()}).fail(function(){t(!1)}).always(function(){n.removeAttr("disabled"),$(o).find(".button-wrapper").removeClass("disabled")})}})}(),$('form[name="sic-contact-form"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico"},submitHandler:function(o){var e=$('form[name="sic-contact-form"]').serialize();console.log(e),$.ajax({url:"http://integrations.blick.mx/sic/contact/form/",method:"POST",data:e}).done(function(o){1===parseInt(o)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-contact-form"]')[0].reset())})},invalidHandler:function(o,e){var n=e.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+n+" errores.")}});var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:700,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-navigation-controls'></div>")}),$(function(){$(".material-input").focus(function(){$(this).parent().addClass("is-active is-completed")}),$(".material-input").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")})});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),navSeparator=document.querySelector(".navbar-separator");doSomething(),window.addEventListener("scroll",function(o){last_known_scroll_position=o.view?o.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(o){last_known_scroll_position=o.view?o.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(o){o.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(o){o.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(o){o.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(o){o.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(o){o.preventDefault(),hideMenu()}),function(){window.onclick=function(o){if(!o.target.matches(".open-dropdown")){var e,n=document.getElementsByClassName("dropdown-content");for(e=0;e<n.length;e++){var i=n[e];i.classList.contains("show")&&i.classList.remove("show")}}}}(),$('form[name="sic-quote-form"]').validate({name:"required",email:"required",company:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico",company:"Por favor introduce tu correo electrónico"},submitHandler:function(o){var e=$('form[name="sic-quote-form"]').serialize();console.log(e),$.ajax({url:"http://integrations.blick.mx/sic/quote/form/",method:"POST",data:e}).done(function(o){1===parseInt(o)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-quote-form"]')[0].reset())})},invalidHandler:function(o,e){var n=e.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+n+" errores.")}});var solutionsCarousel=$(".solutions-carousel"),solutionsCarouselMobile=$(".solutions-carousel-mobile");solutionsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarousel.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")}),solutionsCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarouselMobile.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")});var whereWeAreCarousel=$(".where-carousel"),whereWeAreCarouselMobile=$(".where-carousel-mobile"),wherePinsCarouselMobile=$(".where-pins-carousel-mobile");whereWeAreCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whereWeAreCarousel.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),whereWeAreCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),whereWeAreCarouselMobile.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),wherePinsCarouselMobile.owlCarousel({loop:!1,nav:!1,dots:!0,responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),wherePinsCarouselMobile.each(function(o){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-pins-carousel-navigation'></div>")});