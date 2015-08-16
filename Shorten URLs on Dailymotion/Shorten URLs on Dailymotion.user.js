// ==UserScript==
// @name           Shorten URLs on Dailymotion
// @name:de        Kürze URLs auf Dailymotion
// @namespace      tfr
// @description    Remove video name from URLs on Dailymotion page
// @description:de Entferne Videoname aus URLs auf der Dailymotion-Seite
// @license        CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @compatible     firefox Works with Firefox and Greasemonkey
// @compatible     chrome Works with Chrome and Tampermonkey
// @compatible     opera Works with Opera and Tampermonkey Beta or Violent monkey
// @oujs:author    tfr
// @include        http://www.dailymotion.com/*
// @include        https://www.dailymotion.com/*
// @include        http://dailymotion.com/*
// @include        https://dailymotion.com/*
// @version        2
// @grant          none
// ==/UserScript==
 
/* Version 2: Update Metadata */
 
/* This script is licensed under CC0 / Dieses Skript steht unter CC0:
 * http://creativecommons.org/publicdomain/zero/1.0/deed.de
 * http://creativecommons.org/publicdomain/zero/1.0/deed.en */

if(window.location.pathname.substr(0, 8) == "/video/x") {
  var videoid = window.location.pathname.substr(8);
  if(videoid.indexOf("_") > -1) {
    videoid = videoid.substr(0, videoid.indexOf("_"));
  }
  while(videoid.length < 6) {
    videoid = "0" + videoid;
  }
  if (window.location.pathname != "/video/x" + videoid) window.location.pathname = "/video/x" + videoid;
  if (window.location.search != "") window.location.search = "";
}

LinkCount = 0;
function ChangeLinks() {
  if(LinkCount != window.document.links.length) {
    for (var i = 0; i < window.document.links.length; i++) {
      if(window.document.links[i].pathname.substr(0, 8) == "/video/x") {
        var videoid = window.document.links[i].pathname.substr(8);
        if(videoid.indexOf("_") > -1) {
          videoid = videoid.substr(0, videoid.indexOf("_"));
        }
        while(videoid.length < 6) {
          videoid = "0" + videoid;
        }
        window.document.links[i].pathname = "/video/x" + videoid;
        window.document.links[i].search = "";
      }
    }
    LinkCount = window.document.links.length;
  }
}
ChangeLinks();
window.setInterval(ChangeLinks, 1000);