var n=!1;function i(){var i=document.querySelector(".crostini");i&&(i.parentElement.removeChild(i),i.removeEventListener("animationend",o)),n=!1}function o(n){"crostiniFadeout"!==n.animationName&&"crostiniFadeoutBottom"!==n.animationName||i()}document.querySelector(".crostini-styles")||document.body.insertAdjacentHTML("beforeend","\n<style class=\"crostini-styles\">\n.crostini, .crostini * {\n  box-sizing: border-box;\n}\n\n.crostini {\n  position: fixed;\n  z-index: 10000;\n  left: 0;\n  right:0;\n  bottom: 30px;\n  visibility: hidden;\n  display: flex;\n  height: 50px;\n  margin: auto;\n  max-width: 50px;\n  background-color: #222;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  font-size: 18px;\n  font-weight: 500;\n  white-space: nowrap;\n  line-height: 1;\n}\n\n.crostini--top {\n  top: 30px;\n  bottom: auto;\n}\n\n.crostini.crostini--show.crostini--top {\n  visibility: visible;\n  animation: crostiniFadeinTop 0.5s, crostiniExpand 0.5s 0.5s, crostiniStay 5s 1s, crostiniShrink 0.5s 6s, crostiniFadeoutBottom 0.5s 6.5s;\n}\n\n.crostini .crostini__close-icon {\n  position: relative;\n  width: 50px;\n  height: 100%;\n  margin-left: auto;\n  cursor: pointer;\n  border-left: 1px solid rgba(255,255,255,.18);\n  animation: crostiniSimpleFadein 1s, crostiniSimpleFadeout 1.5s 5.5s;\n}\n\n.crostini .crostini__close-icon:hover {\n  background-color: rgba(255,255,255,.15);\n}\n\n.crostini .crostini__close-icon:before {\n  position: absolute;\n  content: '';\n  top: 50%;\n  left: 50%;\n  width: 26px;\n  height: 2px;\n  margin: -1px 0 0 -13px;\n  transform: rotate(-45deg);\n  background-color: rgba(255,255,255,.85);\n}\n\n.crostini .crostini__close-icon:after {\n  position: absolute;\n  content: '';\n  top: 50%;\n  left: 50%;\n  width: 26px;\n  height: 2px;\n  margin: -1px 0 0 -13px;\n  transform: rotate(45deg);\n  background-color: rgba(255,255,255,.85);\n}\n\n.crostini .crostini__close-icon:hover:before, .crostini .crostini__close-icon:hover:after {\n  background-color: #fff;\n}\n\n.crostini .crostini__desc {\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 50px);\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 0px 16px;\n  animation: crostiniSimpleFadein 1s;\n}\n\n.crostini .crostini__desc-inner {\n  position: relative;\n  top: -1px;\n}\n\n.crostini.crostini--show {\n  visibility: visible;\n  animation: crostiniFadein 0.5s, crostiniExpand 0.5s 0.5s, crostiniStay 5s 1s, crostiniShrink 0.5s 6s, crostiniFadeout 0.5s 6.5s;\n}\n\n/* ERROR STYLES */\n\n.crostini.crostini--error {\n  background-color: #c41f33;\n}\n\n.crostini.crostini--error .crostini__close-icon:hover:before, .crostini.crostini--error .crostini__close-icon:hover:after {\n  opacity: 1;\n}\n\n@keyframes crostiniSimpleFadein {\n  0% {opacity: 0;}\n  90% {opacity: 0;}\n  100% {opacity: 1;}\n}\n\n@keyframes crostiniSimpleFadeout {\n  0% {opacity: 1;}\n  70% {opacity: 0;}\n  100% {opacity: 0;}\n}\n\n@keyframes crostiniFadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes crostiniFadeinTop {\n  from {top: 0; opacity: 0;}\n  to {top: 30px; opacity: 1;}\n}\n\n@keyframes crostiniExpand {\n  from {min-width: 50px}\n  to {min-width: 360px}\n}\n\n@keyframes crostiniStay {\n  from {min-width: 360px}\n  to {min-width: 360px}\n}\n\n@keyframes crostiniShrink {\n  from {min-width: 360px;} \n  to {min-width: 50px;}\n}\n\n@keyframes crostiniFadeout {\n  from {bottom: 30px; opacity: 1;}\n  to {bottom: 60px; opacity: 0;}\n}\n\n@keyframes crostiniFadeoutBottom {\n  from {top: 30px; opacity: 1;}\n  to {top: 60px; opacity: 0;}\n}\n</style>\n"),document.body.addEventListener("click",function(n){n.target.closest(".crostini__close-icon")&&i()}),module.exports=function(i,t){if(!n){n=!0;var r='<div class="crostini crostini--show"><div class="crostini__desc"><div class="crostini__desc-inner">'+i+'</div></div><div class="crostini__close-icon"></div></div>',e=document.createElement("div");e.innerHTML=r;var s=e.firstChild;if(t&&("error"===t.type&&s.classList.add("crostini--error"),t.slideInFromTop&&s.classList.add("crostini--top"),t.backgroundColor&&(s.style.backgroundColor=t.backgroundColor),t.textColor&&(s.style.color=t.textColor),t.customCss)){var c=s.getAttribute("style")||"";s.setAttribute("style",c+t.customCss)}s.addEventListener("animationend",o),document.body.appendChild(s)}};
//# sourceMappingURL=crostini.js.map
