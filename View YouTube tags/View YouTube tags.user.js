// ==UserScript==
// @name        View YouTube tags
// @namespace   89bb7b8930b27c9ac23a004b3dcc707a
// @include     http://www.youtube.com/watch*
// @include     https://www.youtube.com/watch*
// @version     2
// @grant       none
// @description View tags on YouTube description pages. / Zeige Schlagwörter auf Youtube-Beschreibungsseiten an.
// ==/UserScript==

/* Dieses Skript steht unter CC0 / This script is licensed under CC0:
 * http://creativecommons.org/publicdomain/zero/1.0/deed.de
 * http://creativecommons.org/publicdomain/zero/1.0/deed.en */

/* Disable AJAX on links because it is buggy */
for(var i = window.document.getElementsByClassName("spf-link").length - 1; i >= 0; i--) {
  window.document.getElementsByClassName("spf-link")[i].className = window.document.getElementsByClassName("spf-link")[i].className.replace(/spf-link/g, "");
}
if(typeof ytplayer !== "undefined" && typeof ytplayer.config !== "undefined" && typeof ytplayer.config.args !== "undefined" && typeof ytplayer.config.args.keywords !== "undefined") {
  var keywords = ytplayer.config.args.keywords;
  var label = "Tags";
  var nli = document.createElement('li');
  keywords = keywords.replace(/, /g, ",").replace(/,/g, ", ");
  nli.innerHTML = "<h4 class=\"title\">" + label + "<\/h4><div class=\"content\"><p>" + keywords + "<\/p><\/div>";
  document.getElementsByClassName("watch-extras-section")[0].appendChild(nli);
}