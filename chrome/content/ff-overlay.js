orgArgeeCodeTextension.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ orgArgeeCodeTextension.showFirefoxContextMenu(e); }, false);
};

orgArgeeCodeTextension.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-orgArgeeCodeTextension").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { orgArgeeCodeTextension.onFirefoxLoad(); }, false);
