// ==UserScript==
// @name         Invidious
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vid.mint.lgbt/
// @match        https://vid.mint.lgbt/*
// @match        https://invidious.snopyta.org/
// @match        https://invidious.snopyta.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var dom = document.createElement('style'),
    dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = 'body{background-color:#1e1f29; font-family:Inter !important;}#player-container:after {content:",m for MPV"}'
    dom_body.appendChild(dom);

})();
