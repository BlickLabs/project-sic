function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic/index.html"!==window.location.pathname&&"/project-sic/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("navbar-scroll"),$(".navbar-logo").removeClass("show-icon"),$(".navbar-logo-scroll").addClass("show-icon"),navSeparator.style.backgroundColor="#5275a7",$(".navbar-sections-title").addClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").addClass("show-icon"),$(".navbar-dropdown-icon").removeClass("show-icon"),$(".navbar-hamburger-icon-scroll").addClass("show-icon"),$(".navbar-hamburger-icon").removeClass("show-icon")):(siteNavbar.classList.remove("navbar-scroll"),$(".navbar-logo").addClass("show-icon"),$(".navbar-logo-scroll").removeClass("show-icon"),navSeparator.style.backgroundColor="#ffffff",$(".navbar-sections-title").removeClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").removeClass("show-icon"),$(".navbar-dropdown-icon").addClass("show-icon"),$(".navbar-hamburger-icon-scroll").removeClass("show-icon"),$(".navbar-hamburger-icon").addClass("show-icon")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction2(){document.getElementById("myDropdown2").classList.toggle("show")}function myFunction3(){document.getElementById("myDropdown3").classList.toggle("show")}function myFunctionHamburger(){document.getElementById("myDropdownHamburger").classList.toggle("show")}function myFunction2Hamburger(){document.getElementById("myDropdown2Hamburger").classList.toggle("show")}function myFunction3Hamburger(){document.getElementById("myDropdown3Hamburger").classList.toggle("show")}var aboutCarousel=$(".about-cards-carousel");aboutCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoWidth:!0,margin:38,responsive:{0:{items:1,autoWidth:!0,center:!0,loop:!0},1221:{items:3}}}),function(){$.validator.setDefaults({invalidHandler:function(e,o){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var o=e?t:s;n.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(o)};n.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){r(1===parseInt(o)),e.reset()}).fail(function(){r(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:700,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-navigation-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),navSeparator=document.querySelector(".navbar-separator");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(){window.onclick=function(e){if(!e.target.matches(".open-dropdown")){var o,n=document.getElementsByClassName("dropdown-content");for(o=0;o<n.length;o++){var a=n[o];a.classList.contains("show")&&a.classList.remove("show")}}}}();