function typed1(){var e=new Typed(".typed1",{strings:["Más de 25 años resolviendo necesidades en Tecnología de Cómputo ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(o){homeCoverCarousel.trigger("next.owl.carousel"),e.destroy()}})}function typed2(){var e=new Typed(".typed2",{strings:["Expertos en reparación de equipos de cómputo ^2000"],showCursor:!1,loop:!1,typeSpeed:35,startDelay:700,onComplete:function(o){homeCoverCarousel.trigger("next.owl.carousel"),e.destroy()}})}function typed3(){var e=document.getElementsByClassName("typed3")[1],o=new Typed(e,{strings:["Técnicos especializados en diversas áreas de T.I. ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function typed4(){var e=document.getElementsByClassName("typed4")[1],o=new Typed(e,{strings:["Soluciones a la media de cada cliente ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function typed5(){var e=document.getElementsByClassName("typed5")[1],o=new Typed(e,{strings:["Amplia cobertura en América Latina ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function typed1En(){var e=new Typed(".typed1en",{strings:["Over 25 years supporting the technological markets for the leading brands in the industry ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(o){homeCoverCarousel.trigger("next.owl.carousel"),e.destroy()}})}function typed2En(){var e=new Typed(".typed2en",{strings:["High expertise in computer solutions ^2000"],showCursor:!1,loop:!1,typeSpeed:35,startDelay:700,onComplete:function(o){homeCoverCarousel.trigger("next.owl.carousel"),e.destroy()}})}function typed3En(){var e=document.getElementsByClassName("typed3en")[1],o=new Typed(e,{strings:["Certified technicians ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function typed4En(){var e=document.getElementsByClassName("typed4en")[1],o=new Typed(e,{strings:["Customised solutions for each customer need ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function typed5En(){var e=document.getElementsByClassName("typed5en")[1],o=new Typed(e,{strings:["Wide coverage in Latin America ^2000"],showCursor:!1,typeSpeed:35,startDelay:700,onComplete:function(e){homeCoverCarousel.trigger("next.owl.carousel"),o.destroy()}})}function doSomething(e){"/index.html"!==window.location.pathname&&"/index-en.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic/index.html"!==window.location.pathname&&"/project-sic/index-en.html"!==window.location.pathname&&"/project-sic/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("navbar-scroll"),$(".navbar-logo").removeClass("show-icon"),$(".navbar-logo-scroll").addClass("show-icon"),navSeparator.style.backgroundColor="#5275a7",$(".navbar-sections-title").addClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").addClass("show-icon"),$(".navbar-dropdown-icon").removeClass("show-icon"),$(".navbar-hamburger-icon-scroll").addClass("show-icon"),$(".navbar-hamburger-icon").removeClass("show-icon")):(siteNavbar.classList.remove("navbar-scroll"),$(".navbar-logo").addClass("show-icon"),$(".navbar-logo-scroll").removeClass("show-icon"),navSeparator.style.backgroundColor="#ffffff",$(".navbar-sections-title").removeClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").removeClass("show-icon"),$(".navbar-dropdown-icon").addClass("show-icon"),$(".navbar-hamburger-icon-scroll").removeClass("show-icon"),$(".navbar-hamburger-icon").addClass("show-icon")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function functionDropdownSoluciones(){document.getElementById("dropdownSoluciones").classList.toggle("show")}function myFunction2(){document.getElementById("myDropdown2").classList.toggle("show")}function myFunction3(){document.getElementById("myDropdown3").classList.toggle("show")}function myFunctionHamburger(){document.getElementById("myDropdownHamburger").classList.toggle("show")}function functionDropdownSolucionesHamburger(){document.getElementById("dropdownSolucionesHamburger").classList.toggle("show")}function myFunction2Hamburger(){document.getElementById("myDropdown2Hamburger").classList.toggle("show")}function myFunction3Hamburger(){document.getElementById("myDropdown3Hamburger").classList.toggle("show")}var aboutCarousel=$(".about-cards-carousel");aboutCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoWidth:!0,margin:38,responsive:{0:{items:1,autoWidth:!0,center:!0,loop:!0},1221:{items:3}}}),aboutCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-navigation-controls'></div>")}),function(){$.validator.setDefaults({invalidHandler:function(e,o){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),i=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),a=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var o=e?i:a;n.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(o)};n.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){s(1===parseInt(o)),e.reset()}).fail(function(){s(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),document.addEventListener("DOMContentLoaded",function(){navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0&&navigator.userAgent.search("Mobile")<0?document.querySelector(".ws_safari").style.display="flex":document.querySelector(".ws_all").style.display="flex"}),$('form[name="sic-contact-form"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico"},submitHandler:function(e){var o=$('form[name="sic-contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/contact/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-contact-form"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+n+" errores.")}}),$('form[name="sic-contact-form-en"]').validate({name:"required",email:"required",messages:{name:"Please, enter your name",email:"Please, enter your email"},submitHandler:function(e){var o=$('form[name="sic-contact-form-en"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/contact/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("The email has been sent. Thanks for contact us!"),$('form[name="sic-contact-form-en"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify yout information. You have "+n+" errors.")}});var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.on("changed.owl.carousel",function(e){console.log(e.item.index),"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic/index.html"!==window.location.pathname&&"/project-sic/"!==window.location.pathname||(0===e.item.index||3===e.item.index?typed1():4===e.item.index?typed2():5===e.item.index?typed3():6===e.item.index?typed4():7===e.item.index&&typed5()),"/index-en.html"!==window.location.pathname&&"/project-sic/index-en.html"!==window.location.pathname||(0===e.item.index||3===e.item.index?typed1En():4===e.item.index?typed2En():5===e.item.index?typed3En():6===e.item.index?typed4En():7===e.item.index&&typed5En())}).owlCarousel({loop:!0,nav:!1,dots:!0,mouseDrag:!1,touchDrag:!1,smartSpeed:1500,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-navigation-controls'></div>")});var logosHomeCarousel=$(".home-clients-carousel");logosHomeCarousel.owlCarousel({loop:!0,center:!1,autoplay:!1,autoplayTimeout:3e3,autoWidth:!0,margin:0,nav:!1,dots:!1,navText:['<img class="navigation-icon" src="img/icons/arrow-blue-left.png" />','<img class="navigation-icon" src="img/icons/arrow-blue-right.png" />']}),$(function(){$("#changeCdmx").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15056.113334600932!2d-99.1590839!3d19.3679258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec1e2c54ac88ff04!2sSIC!5e0!3m2!1ses-419!2smx!4v1527528235518")}),$("#changeEdomex").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15042.278221475199!2d-99.2110856!3d19.5171465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b00e535cc2c176b!2sSIC+Comercializaci%C3%B3n+y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528449192")}),$("#changeGuadalajara").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14931.97732739294!2d-103.3849958!3d20.6698096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc849ef5165d88145!2sSIC+Comercializaci%C3%B3n+y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528639364")}),$("#changeMonterrey").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.935083291552!2d-100.3428762!3d25.6801186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85955ecaad366e8a!2sSic+Comercializaci%C3%B3n+Y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528793920")}),$("#changeBogota").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.584938552632!2d-74.05992098523778!3d4.667846896609352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af5bfee325b%3A0xe7bda34e87ca683b!2sCra.+16a+%2380-79%2C+Bogot%C3%A1%2C+Colombia!5e0!3m2!1ses-419!2smx!4v1528730961578")}),$("#changeMedellin").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.40316057219!2d-75.57219848523091!3d6.210438395504208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282bbf4d4c25%3A0x5f65bca9083f1efb!2sCra.+43+%2310-2%2C+Medell%C3%ADn%2C+Antioquia%2C+Colombia!5e0!3m2!1ses-419!2smx!4v1528731654201")}),$("#changeSantiago").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2083490823106!2d-70.63159388480086!3d-33.44387798077579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c578eb440f4d%3A0xcec2af30369b8d9!2sSeminario+263%2C+Providencia%2C+Regi%C3%B3n+Metropolitana%2C+Chile!5e0!3m2!1ses-419!2smx!4v1528731413223")}),$("#changeBuenosAires").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.28630949665!2d-58.3854958!3d-34.608673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d28e5176b8b0c2a!2sSIC+Argentina!5e0!3m2!1ses-419!2smx!4v1527529211008")})}),$(function(){$(".material-input").focus(function(){$(this).parent().addClass("is-active is-completed")}),$(".material-input").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")})});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),navSeparator=document.querySelector(".navbar-separator");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(){window.onclick=function(e){if(!e.target.matches(".open-dropdown")){var o,n=document.getElementsByClassName("dropdown-content");for(o=0;o<n.length;o++){var t=n[o];t.classList.contains("show")&&t.classList.remove("show")}}}}(),$('form[name="sic-quote-form"]').validate({name:"required",email:"required",company:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico",company:"Por favor selleciona una solución"},submitHandler:function(e){var o=$('form[name="sic-quote-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/quote/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-quote-form"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+n+" errores.")}}),$('form[name="sic-quote-form-en"]').validate({name:"required",email:"required",company:"required",messages:{name:"Please, enter your name",email:"Please, enter your email",company:"Please, select a solution"},submitHandler:function(e){var o=$('form[name="sic-quote-form-en"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/quote/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("The email has been sent. Thanks for contact us!"),$('form[name="sic-quote-form-en"]')[0].reset())})},invalidHandler:function(e,o){var n=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify yout information. You have "+n+" errors.")}});var solutionsCarousel=$(".solutions-carousel"),solutionsCarouselMobile=$(".solutions-carousel-mobile");solutionsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")}),solutionsCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")});var whereWeAreCarousel=$(".where-carousel"),whereWeAreCarouselMobile=$(".where-carousel-mobile"),wherePinsCarouselMobile=$(".where-pins-carousel-mobile");whereWeAreCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whereWeAreCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),whereWeAreCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),whereWeAreCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),wherePinsCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),wherePinsCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-pins-carousel-navigation-mobile'></div>")});