// ==UserScript==
// @name           YouTube Link Cleaner
// @namespace      tfr
// @description    Removes unneeded parameters and redirection pages from YouTube links.
// @license        CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @compatible     firefox
// @compatible     chrome
// @oujs:author    tfr
// @include        http://youtube.com/*
// @include        http://www.youtube.com/*
// @include        https://youtube.com/*
// @include        https://www.youtube.com/*
// @version        5
// @grant          none
// ==/UserScript==
 
/* Dieses Skript steht unter CC0 / This script is licensed under CC0:
 * http://creativecommons.org/publicdomain/zero/1.0/deed.de
 * http://creativecommons.org/publicdomain/zero/1.0/deed.en */
 
/* Version 5: update metadata */
/* Version 4: change URL parameters without reloading */
 
/* If on a redirect page, redirect */
if(window.location.pathname == "/redirect") {
  window.location.href.match(/(&|\?)q=(.*?)(&|$)/);
  window.location.replace(window.decodeURIComponent(RegExp.$2));
}
/* If a unneeded parameter exists, remove it */
if(window.location.href.match(/(&(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*|\?(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*$)/)) {
  window.history.replaceState({}, window.document.title, window.location.href.replace(/(&(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*|\?(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*$)/g, ''));
}
LinkCount = 0;
function ChangeLinks() {
  if(LinkCount != window.document.links.length) {
    for (var i = 0; i < window.document.links.length; i++) {
      /* Remove unneeded parameters */
      window.document.links[i].href = window.document.links[i].href.replace(/(&(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*|\?(feature|src_vid|annotation_id|gl|hl)=[a-zA-Z0-9_\-\.]*$)/g, '');
      /* Do not use redirect pages, disable AJAX on links */
      window.document.links[i].className = window.document.links[i].className.replace(/(yt-uix-redirect-link|spf-link)/g, "");
    }
    LinkCount = window.document.links.length;
  }
}
ChangeLinks();
window.setInterval(ChangeLinks, 1000);