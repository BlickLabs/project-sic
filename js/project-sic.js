function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic/index.html"!==window.location.pathname&&"/project-sic/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("navbar-scroll"),navLogoWhite.style.display="none",navLogoBlack.style.display="block",navSeparator.style.backgroundColor="#5275a7",$(".navbar-sections-title").addClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").addClass("show-icon"),$(".navbar-dropdown-icon").removeClass("show-icon")):(siteNavbar.classList.remove("navbar-scroll"),navLogoWhite.style.display="block",navLogoBlack.style.display="none",navSeparator.style.backgroundColor="#ffffff",$(".navbar-sections-title").removeClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").removeClass("show-icon"),$(".navbar-dropdown-icon").addClass("show-icon")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction2(){document.getElementById("myDropdown2").classList.toggle("show")}function myFunction3(){document.getElementById("myDropdown3").classList.toggle("show")}function myFunctionHamburger(){document.getElementById("myDropdownHamburger").classList.toggle("show")}function myFunction2Hamburger(){document.getElementById("myDropdown2Hamburger").classList.toggle("show")}function myFunction3Hamburger(){document.getElementById("myDropdown3Hamburger").classList.toggle("show")}!function(){$.validator.setDefaults({invalidHandler:function(e,o){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),r=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),s=function(e){var o=e?a:r;n.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(o)};n.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){s(1===parseInt(o)),e.reset()}).fail(function(){s(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoplayTimeout:5e3,smartSpeed:700,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-navigation-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),navLogoWhite=document.querySelector(".navbar-logo"),navLogoBlack=document.querySelector(".navbar-logo-scroll"),navSeparator=document.querySelector(".navbar-separator"),navDropdownWhite=document.querySelector(".navbar-dropdown-icon"),navDropdownBlue=document.querySelector(".navbar-dropdown-icon-scroll");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(){window.onclick=function(e){if(!e.target.matches(".navbar-sections-title")){var o,n=document.getElementsByClassName("dropdown-content");for(o=0;o<n.length;o++){var t=n[o];t.classList.contains("show")&&t.classList.remove("show")}}}}();