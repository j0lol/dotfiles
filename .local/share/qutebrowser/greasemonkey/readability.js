// ==UserScript==
// @name         Invidious
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///home/jo/.local/share/qutebrowser/userscripts/readability.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    document.title = "Readability Script"

    var dom = document.createElement('style'),
    dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = 'body{background-color:#1e1f29;color:#ddd; font-family:Inter !important;} a{ color: #7c60a3}'
    dom_body.appendChild(dom);

})();
