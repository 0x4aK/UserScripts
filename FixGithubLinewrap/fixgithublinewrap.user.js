// ==UserScript==
// @name         FixGitHubLinewrap
// @version      0.2
// @description  Fix line wrapping in GitHub files
// @author       0x4aK
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/0x4aK/UserScripts/raw/master/FixGithubLinewrap/fixgithublinewrap.user.js
// @updateURL    https://github.com/0x4aK/UserScripts/raw/master/FixGithubLinewrap/fixgithublinewrap.user.js
// ==/UserScript==

(function () {
  "use strict";

  const s = document.createElement("style");
  s.textContent = `
.blob-code-inner {
    white-space: pre
}`;

  document.head.appendChild(s);
})();
