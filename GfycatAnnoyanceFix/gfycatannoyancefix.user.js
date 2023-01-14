// ==UserScript==
// @name         GfycatAnnoyanceFix
// @version      0.1
// @description  Modifies Gfycat embeds to remove unnecessary stuff
// @author       0x4aK
// @match        https://gfycat.com/ifr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gfycat.com
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/0x4aK/UserScripts/raw/master/GfycatAnnoyanceFix/gfycatannoyancefix.user.js
// @updateURL    https://github.com/0x4aK/UserScripts/raw/master/GfycatAnnoyanceFix/gfycatannoyancefix.user.js
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", () => {
    document.querySelector("video").controls = true;
    document.querySelector("iframe__bottom").remove();
  });

  const s = document.createElement("style");
  s.textContent = `
.iframe-container .iframe-player-container {
    height: inherit !important;
}`;

  document.head.appendChild(s);
})();
