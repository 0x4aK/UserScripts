// ==UserScript==
// @name         GfycatAnnoyanceRemover
// @version      0.3
// @description  Modifies Gfycat embeds to remove unnecessary stuff
// @author       0x4aK
// @match        https://gfycat.com/ifr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gfycat.com
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/0x4aK/UserScripts/raw/master/gfycatannoyanceremover.user.js
// @updateURL    https://github.com/0x4aK/UserScripts/raw/master/gfycatannoyanceremover.user.js
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", () => {
    document.querySelector("video").controls = true;
  });

  document.head.appendChild(
    Object.assign(document.createElement("style"), {
      textContent: `
.iframe-container .iframe-player-container {
    height: inherit !important;
}
.iframe__bottom {
    display: none !important;
}
.iframe-top {
    display: none !important;
}
.player-bottom {
    display: none !important;
}`,
    })
  );
})();
