// ==UserScript==
// @name           Bypass YouTube age verification
// @name:de        Youtube-Altersverifikation umgehen
// @namespace      tfr
// @description    Bypass YouTube age verification without logging in.
// @description:de Umgehe die Altersverifikation ohne Einloggen.
// @license        CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @compatible     firefox
// @compatible     chrome
// @oujs:author    tfr
// @include        http://www.youtube.com/watch*
// @include        https://www.youtube.com/watch*
// @version        5
// @grant          none
// ==/UserScript==

/* Version 5: Update metadata block */ 
/* Version 4: Correct string search index from 1 to -1 */ 
/* Version 3: https://greasyfork.org/es/forum/discussion/4509 */ 
/* Version 2: Error in code, bypass in playlists was not working */

/* This script is licensed under CC0 / Dieses Skript steht unter CC0:
 * http://creativecommons.org/publicdomain/zero/1.0/deed.de
 * http://creativecommons.org/publicdomain/zero/1.0/deed.en */

if(window.document.getElementById("watch7-player-age-gate-content"))
  {
    var videoid = window.location.search.substr(window.location.search.indexOf("v=") + 2);
    if(videoid.indexOf("&") > -1)
      {
        videoid = videoid.substr(0, videoid.indexOf("&"));
      }
    videoid = decodeURIComponent(videoid);
    window.document.getElementById("player-api").remove();
    var playerparent = window.document.getElementById("player-unavailable");
    var playerframe = window.document.createElement("iframe");
    playerframe.setAttribute("src", "//www.youtube.com/embed/" + videoid + "?autoplay=1&showinfo=0");
    playerframe.setAttribute("id", "player-frame");
    playerframe.setAttribute("style", "position:absolute; z-index:99999; width:100%; height:100%;");
    playerparent.appendChild(playerframe);
  }