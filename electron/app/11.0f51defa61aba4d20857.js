(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BvDR:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return v});var o=n("JvIM"),r=new WeakMap;function i(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?function(t,e,n){var o=e.parentNode,i=e.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"}(t,e,o):function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""}(t,e))}function a(t){return t===t.getRootNode().activeElement}var u="input, textarea, [no-blur]",c=.3;var s="$ionPaddingTimer";function l(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[s];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[s]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var d=!0,f=!0;function v(t,e){var n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),v=e.getBoolean("inputBlurring",!0),p=e.getBoolean("scrollPadding",!0),m=new WeakMap,g=new WeakMap;function h(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),u=t.closest("ion-content");if(e){if(u&&s&&!m.has(t)){var l=function(t,e,n){if(!n||!e)return function(){};var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}}(t,e,u);m.set(t,l)}u&&r&&!g.has(t)&&(l=function(t,e,n,r){var u,s=function(t){u=Object(o.j)(t)},l=function(s){if(u){var l=Object(o.j)(s);(function(t,e,n){if(e&&l){var o=e.x-l.x,r=e.y-l.y;return o*o+r*r>36}return!1})(0,u)||a(e)||(s.preventDefault(),s.stopPropagation(),function(t,e,n,o){var r=function(t,e,n){return function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top+15,u=.5*Math.min(e.bottom,o-n)-i,s=a-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,d/c)),scrollPadding:n,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){i(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r))}};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",l,!0)}}(t,e,u,n),g.set(t,l))}}v&&d&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),p&&f&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);for(var E=0,y=Array.from(t.querySelectorAll("ion-input, ion-textarea"));E<y.length;E++)h(y[E]);t.body.addEventListener("ionInputDidLoad",function(t){h(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,s&&((n=m.get(e))&&n(),m.delete(e)),r&&((n=g.get(e))&&n(),g.delete(e))})}}}]);