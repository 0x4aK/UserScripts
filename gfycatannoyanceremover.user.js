// ==UserScript==
// @name         GfycatAnnoyanceRemover
// @version      0.5
// @description  Modifies Gfycat embeds to remove unnecessary stuff
// @author       0x4aK
// @match        https://gfycat.com/ifr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gfycat.com
// @grant        none
// @run-at       document-body
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
.iframe-container > :not(.iframe-player-container) {
    display: none !important;
}
.iframe-player-container > :not(.player-container) {
    display: none !important;
}
.video-player-container > :not(.video-container) {
    display: none !important
}`,
    })
  );
})();
