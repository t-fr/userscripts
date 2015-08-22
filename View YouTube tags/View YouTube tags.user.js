// ==UserScript==
// @name           View YouTube tags
// @name:de        Zeige YouTube-Tags
// @namespace      tfr
// @description    View tags on YouTube description pages.
// @description:de Zeige Schlagwörter auf Youtube-Beschreibungsseiten an.
// @author         tfr (https://github.com/t-fr/)
// @license        CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @license        MIT license; https://pastebin.com/raw.php?i=4TMeeUXC
// @compatible     firefox Works with Firefox and Greasemonkey
// @compatible     chrome Works with Chrome and Tampermonkey
// @compatible     opera Works with Opera and Tampermonkey Beta or Violent monkey
// @oujs:author    tfr
// @include        http://www.youtube.com/watch*
// @include        https://www.youtube.com/watch*
// @version        4
// @grant          none
// ==/UserScript==

/* This script is dual-licensed under CC0 and the MIT license.
 * You can choose which one you want to use.
 * CC0 license: http://creativecommons.org/publicdomain/zero/1.0/deed.en
 * MIT license: https://pastebin.com/raw.php?i=4TMeeUXC
 *
 * Dieses Skript steht sowohl unter CC0 als auch unter der MIT-Lizenz.
 * Sie können sich aussuchen, welche Lizenz Sie nutzen.
 * CC0-Lizenz: http://creativecommons.org/publicdomain/zero/1.0/deed.de
 * MIT-Lizenz: https://pastebin.com/raw.php?i=4TMeeUXC
 */

/* Version 4: Update license data
 * Version 3: Update metadata, add German description
 */

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