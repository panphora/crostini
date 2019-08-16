let crostiniStyles = `
<style class="crostini-styles">
.crostini {
  display: flex;
  visibility: hidden;
  max-width: 50px;
  height: 50px;
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  position: fixed;
  z-index: 1;
  left: 0;right:0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
}

.crostini .crostini__close-icon {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #111;
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
  color: #fff;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
}

.crostini.crostini--show {
  visibility: visible;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s;
}

/*.crostini__close-icon {
  animation: simpleFadein 1s, simpleFadeout 1s 3.5s;
}*/

@keyframes simpleFadein {
  0% {opacity: 0;}
  90% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes simpleFadeout {
  from {opacity: 1;}
  to {opacity: 0;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes expand {
  from {min-width: 50px}
  to {min-width: 350px}
}

@keyframes stay {
  from {min-width: 350px}
  to {min-width: 350px}
}

@keyframes shrink {
  from {min-width: 350px;} 
  to {min-width: 50px;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 60px; opacity: 0;}
}
</style>
`;

document.body.insertAdjacentHTML("beforeend", crostiniStyles);



let isCrostiniActivated = false;

function removeCrostiniElement () {
  var crostiniElem = document.querySelector(".crostini");

  if (crostiniElem) {
    crostiniElem.parentElement.removeChild(crostiniElem);
  }

  isCrostiniActivated = false;
}

document.body.addEventListener("click", function (event) {
  if (event.target.closest(".crostini__close-icon")) {
    removeCrostiniElement();
  }
});

let crostini = function (msg, options) {
  if (isCrostiniActivated) {
    return;
  }

  isCrostiniActivated = true;
  let crostiniHtml = `<div class="crostini crostini--show"><div class="crostini__close-icon"></div><div class="crostini__desc">${msg}</div></div>`;
  document.body.insertAdjacentHTML("beforeend", crostiniHtml);
  var crostiniElem = document.querySelector(".crostini");

  crostiniElem.addEventListener("animationend", function(event) {
    if (event.animationName === "fadeout") {
      removeCrostiniElement();
    }
  });
}

export default crostini;








