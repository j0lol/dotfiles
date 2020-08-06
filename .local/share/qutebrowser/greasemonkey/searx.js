// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://searx.xyz/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var div = document.createElement('div');
    // div.innerHTML = "links:";
    // set style
    // div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('id', 'links'); // and make sure myclass has some styles in css
    document.body.appendChild(div);

    // Your code here...
    var link = document.createElement("H1");   // Create a <button> element
    link.innerHTML = "Links:";                   // Insert text
    var att = document.createAttribute("style");        // Create a "href" attribute
    att.value = "color: #eee";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Videos: ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Invidious";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://vid.mint.lgbt";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Youtube";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://www.youtube.com/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Twitch";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://www.twitch.tv/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Messages: ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Mail";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://mail.catgirl.party";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Cock.li";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://mail.cock.li/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Discord";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://discord.com/channels/@me";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Element";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://element.catgirl.party";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);


    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Security: ";                   // Insert text
    document.getElementById("links").appendChild(link);



    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Bitwarden";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://vault.bitwarden.com/#/vault";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);



    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

        // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Arch: ";                   // Insert text
    document.getElementById("links").appendChild(link);


    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Homepage";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://archlinux.org/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Wiki";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://wiki.archlinux.org/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Repos";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://www.archlinux.org/packages/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "AUR";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://aur.archlinux.org/packages/?O=0&SeB=nd&K=&outdated=&SB=n&SO=a&PP=50&do_Search=Go";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Hosting and shit: ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "OVH";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://ca.ovh.com/manager/dedicated/#/iaas/vps/vps265118.vps.ovh.ca/dashboard";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Porkbun
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Porkbun";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://www.porkbun.com/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Dev: ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Github";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://github.com";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Porkbun
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Gitlab";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://gitlab.com/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);

    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Porkbun
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Router GUI";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "http://192.168.1.254/00000111500/gui/#/main/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
 
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Trans Reddit: ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/egg_irl";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/egg_irl/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/traa";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/traaaaaaannnnnnnnnns/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);

    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Leftist Reddit: ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/AfashReddit";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/AntifascistsofReddit/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/BTube";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/BreadTube/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/CA";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/COMPLETEANARCHY/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/DLeft";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/DankLeft/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/Vaush";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/VaushV/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);
    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Fun Reddit: ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/polandball";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/polandball/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
 
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);
    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Tech Reddit: ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/linuxmasterrace";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/linuxmasterrace/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/unixporn";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/unixporn/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);
    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Gaming Reddit: ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/Minecraft";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/Minecraft/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/Detailcraft";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/Detailcraft/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/Nintendo";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/Nintendo/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "r/NX";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://old.reddit.com/r/NintendoSwitch/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
 
    // br
    var link = document.createElement("BR");   // Create a <button> element
    document.getElementById("links").appendChild(link);
    
    // Title
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = "Banking: ";                   // Insert text
    document.getElementById("links").appendChild(link);

    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "Bank";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://lloydsbank.com/";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    
    // Dash
    var link = document.createElement("SPAN");   // Create a <button> element
    link.innerHTML = " - ";                   // Insert text
    document.getElementById("links").appendChild(link);
    
    // Your code here...
    var link = document.createElement("A");   // Create a <button> element
    link.innerHTML = "PayPal";                   // Insert text
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://paypal.com";            // Set the value of the href attribute
    link.setAttributeNode(att);
    document.getElementById("links").appendChild(link);
    

    var dom = document.createElement('style'),
    dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = 'body { background: #1e1f29 none !important; \
    color: #D5D8D7 !important; } .searx-navbar { background: #1e1f29; } \
    input { background-color: #0002 !important; border: 1px solid black !important; border-radius: 5px; } \
    .btn { background-color: #1e1f29 !important; border: none !important; } \
    .btn:hover { background-color: #1e1f29 !important; border: none !important; } \
    .footer { display: none; } #main-logo { display: none; } .instance { display: none; } \
    .pull-right a:nth-of-type(1) { display: none; } \
    a { color: #7c60a3 !important; } \
    a:hover {color:#fff !important;} \
    .advanced { display: none; } \
    #links {padding:50px; width:100%; padding-top:0;} \
    .input-group[class*="col-"] {width: 100%;} \
    .input-group-btn {display: none;} \
    .col-md-offset-2 {margin-left: 0 !important;} \
    .input-group.search-margin { width: 100%; }.external-link { color: #7c60a3 !important; }#categories *, .modal-wrapper * { background: #1e1f29 none !important; color: #D5D8D7 !important; }#categories * { border: 0 !important; }.panel-body { color: #C5C8C6 !important; background: #1e1f29 !important; border: none !important; }.panel-heading { color: #C5C8C6 !important; background: #1e1f29 !important; }.panel { border: none; box-shadow: none; background: 0 0; }select.form-control { border: none !important; }.custom-select { border: none; color: red; background: none; }select { background-color: #1e1f29 !important; box-shadow: none !important; }#categories :checked + label { border-bottom: 4px solid #7c60a3 !important; }  \
    .result-default:hover, .result-code:hover, .result-torrent:hover, .result-videos:hover, .result-map:hover {background-color: #1e1f29;}'
    dom_body.appendChild(dom);

})();


