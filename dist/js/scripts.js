document.addEventListener("click", showPopover);
document.addEventListener("click", showUsagi);

var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal");
// var closeButton = document.querySelector(".closer");

var betaContent = `
<img class="gif" src="../img/sailor-moon-transformation-gif.gif" />
`;
var omegaContent = `
<img class="gif" src="../img/usagi-gif.gif" />
`;

function showPopover(event) {
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = betaContent;
    modalInner.classList.add("open");
    modalOuter.classList.add("open");
  }
  //   if (event.target.matches(".closer")) {
  //     closeButton.classList.add(".open");}
  else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}
function showUsagi(event) {
  if (event.target.matches(".omega")) {
    modalInner.innerHTML = omegaContent;
    modalInner.classList.add("open");
    modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}

document.addEventListener("click", showPopover);
