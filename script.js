function onloadFunction () {
  setTimeout(function () {
    document.getElementById("load-asset").style.display = "none";
  }, 500);
}

window.addEventListener('load', onloadFunction);