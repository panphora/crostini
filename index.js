// setup
var isCrostiniActivated = false;
var crostiniStyles = `
<style class="crostini-styles">
.crostini, .crostini * {
  box-sizing: border-box;
}

.crostini {
  position: fixed;
  z-index: 10000;
  left: 0;
  right:0;
  bottom: 30px;
  visibility: hidden;
  display: flex;
  height: 50px;
  margin: auto;
  max-width: 50px;
  background-color: #222;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
}

.crostini--top {
  top: 30px;
  bottom: auto;
}

.crostini.crostini--show.crostini--top {
  visibility: visible;
  animation: crostiniFadeinTop 0.5s, crostiniExpand 0.5s 0.5s, crostiniStay 5s 1s, crostiniShrink 0.5s 6s, crostiniFadeoutBottom 0.5s 6.5s;
}

.crostini .crostini__close-icon {
  position: relative;
  width: 50px;
  height: 100%;
  margin-left: auto;
  cursor: pointer;
  border-left: 1px solid rgba(255,255,255,.18);
  animation: crostiniSimpleFadein 1s, crostiniSimpleFadeout 1.5s 5.5s;
}

.crostini .crostini__close-icon:hover {
  background-color: rgba(255,255,255,.15);
}

.crostini .crostini__close-icon:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  width: 26px;
  height: 2px;
  margin: -1px 0 0 -13px;
  transform: rotate(-45deg);
  background-color: rgba(255,255,255,.85);
}

.crostini .crostini__close-icon:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  width: 26px;
  height: 2px;
  margin: -1px 0 0 -13px;
  transform: rotate(45deg);
  background-color: rgba(255,255,255,.85);
}

.crostini .crostini__close-icon:hover:before, .crostini .crostini__close-icon:hover:after {
  background-color: #fff;
}

.crostini .crostini__desc {
  display: flex;
  align-items: center;
  max-width: calc(100% - 50px);
  overflow: hidden;
  white-space: nowrap;
  padding: 0px 16px;
  animation: crostiniSimpleFadein 1s;
}

.crostini .crostini__desc-inner {
  position: relative;
  top: -1px;
}

.crostini.crostini--show {
  visibility: visible;
  animation: crostiniFadein 0.5s, crostiniExpand 0.5s 0.5s, crostiniStay 5s 1s, crostiniShrink 0.5s 6s, crostiniFadeout 0.5s 6.5s;
}

/* ERROR STYLES */

.crostini.crostini--error {
  background-color: #c41f33;
}

.crostini.crostini--error .crostini__close-icon:hover:before, .crostini.crostini--error .crostini__close-icon:hover:after {
  opacity: 1;
}

@keyframes crostiniSimpleFadein {
  0% {opacity: 0;}
  90% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes crostiniSimpleFadeout {
  0% {opacity: 1;}
  70% {opacity: 0;}
  100% {opacity: 0;}
}

@keyframes crostiniFadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes crostiniFadeinTop {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@keyframes crostiniExpand {
  from {min-width: 50px}
  to {min-width: 360px}
}

@keyframes crostiniStay {
  from {min-width: 360px}
  to {min-width: 360px}
}

@keyframes crostiniShrink {
  from {min-width: 360px;} 
  to {min-width: 50px;}
}

@keyframes crostiniFadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 60px; opacity: 0;}
}

@keyframes crostiniFadeoutBottom {
  from {top: 30px; opacity: 1;}
  to {top: 60px; opacity: 0;}
}
</style>
`;

if (!document.querySelector(".crostini-styles")) {
  document.body.insertAdjacentHTML("beforeend", crostiniStyles);
}

// main function:
// pop up a toast notification
function crostini (msg, options) {
  // don't allow more than one toast notification at the same time
  if (isCrostiniActivated) {
    return;
  }

  isCrostiniActivated = true;

  var crostiniHtml = `<div class="crostini crostini--show"><div class="crostini__desc"><div class="crostini__desc-inner">${msg}</div></div><div class="crostini__close-icon"></div></div>`;
  var tempElem = document.createElement('div');
  tempElem.innerHTML = crostiniHtml;
  var crostiniElem = tempElem.firstChild;

  if (options) {
    if (options.type === "error") {
      crostiniElem.classList.add("crostini--error");
    }

    if (options.slideInFromTop) {
      crostiniElem.classList.add("crostini--top");
    }

    if (options.backgroundColor) {
      crostiniElem.style.backgroundColor = options.backgroundColor;
    }

    if (options.textColor) {
      crostiniElem.style.color = options.textColor;
    }

    if (options.customCss) {
      var stylesString = crostiniElem.getAttribute("style") || "";
      crostiniElem.setAttribute("style", stylesString + options.customCss);
    }
  }

  crostiniElem.addEventListener("animationend", onAnimationEnd);
  document.body.appendChild(crostiniElem);
}

// crostini close button event listener
document.body.addEventListener("click", function (event) {
  if (event.target.closest(".crostini__close-icon")) {
    removeCrostiniElement();
  }
});

// HELPERS

function removeCrostiniElement () {
  var crostiniElem = document.querySelector(".crostini");

  if (crostiniElem) {
    crostiniElem.parentElement.removeChild(crostiniElem);
    crostiniElem.removeEventListener("animationend", onAnimationEnd);
  }

  isCrostiniActivated = false;
}

function onAnimationEnd (event) {
  if (event.animationName === "crostiniFadeout" || event.animationName === "crostiniFadeoutBottom") {
    removeCrostiniElement();
  }
}

export default crostini;

