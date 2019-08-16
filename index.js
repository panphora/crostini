// setup
let isCrostiniActivated = false;
let crostiniStyles = `
<style class="crostini-styles">
.crostini {
  position: fixed;
  z-index: 1;
  left: 0;
  right:0;
  bottom: 30px;
  visibility: hidden;
  display: flex;
  height: 50px;
  margin: auto;
  max-width: 50px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  font-size: 17px;
  white-space: nowrap;
}

.crostini .crostini__close-icon {
  position: relative;
  width: 50px;
  height: 50px;
  margin-left: auto;
  cursor: pointer;
  background-color: #222;
  animation: simpleFadein 1s, simpleFadeout 1.5s 5.5s;
}

.crostini .crostini__close-icon:hover {
  background-color: #000;
}

.crostini .crostini__close-icon:hover:before, .crostini .crostini__close-icon:hover:after {
  background-color: #fff;
}

.crostini .crostini__close-icon:before {
  position: absolute;
  content: '';
  top: 24px;
  left: 13px;
  width: 26px;
  height: 2px;
  transform: rotate(-45deg);
  background-color: #ddd;
}

.crostini .crostini__close-icon:after {
  position: absolute;
  content: '';
  top: 24px;
  left: 13px;
  width: 26px;
  height: 2px;
  transform: rotate(45deg);
  background-color: #ddd;
}

.crostini .crostini__desc {
  max-width: calc(100% - 50px);
  overflow: hidden;
  white-space: nowrap;
  padding: 16px;
  color: #fff;
}

.crostini.crostini--show {
  visibility: visible;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 5s 1s, shrink 0.5s 6s, fadeout 0.5s 6.5s;
}

@keyframes simpleFadein {
  0% {opacity: 0;}
  90% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes simpleFadeout {
  0% {opacity: 1;}
  70% {opacity: 0;}
  100% {opacity: 0;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes expand {
  from {min-width: 50px}
  to {min-width: 320px}
}

@keyframes stay {
  from {min-width: 320px}
  to {min-width: 320px}
}

@keyframes shrink {
  from {min-width: 320px;} 
  to {min-width: 50px;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 60px; opacity: 0;}
}
</style>
`;

document.body.insertAdjacentHTML("beforeend", crostiniStyles);

// main function:
// pop up a toast notification
function crostini (msg, options) {
  // don't allow more than one toast notification at the same time
  if (isCrostiniActivated) {
    return;
  }

  isCrostiniActivated = true;

  let crostiniHtml = `<div class="crostini crostini--show"><div class="crostini__desc">${msg}</div><div class="crostini__close-icon"></div></div>`;
  document.body.insertAdjacentHTML("beforeend", crostiniHtml);
  var crostiniElem = document.querySelector(".crostini");

  crostiniElem.addEventListener("animationend", onAnimationEnd);
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
  if (event.animationName === "fadeout") {
    removeCrostiniElement();
  }
}

export default crostini;








