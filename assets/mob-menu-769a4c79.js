(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l=document.getElementsByTagName("header"),c=window.location.pathname.split("/").pop().split(".")[0];if(["hotel","restaurant","room"].includes(c))for(let t=0;t<l.length;t++)l[t].classList.add("revers");(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(n){for(var o=this,i=(o.document||o.ownerDocument).querySelectorAll(n),e=0;i[e]&&i[e]!==o;)++e;return Boolean(i[e])}),typeof t.closest!="function"&&(t.closest=function(n){for(var o=this;o&&o.nodeType===1;){if(o.matches(n))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");t.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var s=this.getAttribute("data-modal"),r=document.querySelector('.modal[data-modal="'+s+'"]');r.classList.add("active"),n.classList.add("active")})}),o.forEach(function(i){i.addEventListener("click",function(e){var s=this.closest(".modal");s.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});$(".slider-section").slick({dots:!1,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}}]});$(".slider-line").slick({dots:!1,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:375,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}}]});(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu-list")};t.openMenuBtn.addEventListener("click",n),t.closeMenuBtn.addEventListener("click",n),t.menuList.addEventListener("click",o);function n(){t.menu.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll")}function o(){t.menu.classList.add("is-hidden"),t.body.classList.remove("no-scroll")}})();