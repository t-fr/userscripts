**Hinweis:** Zurzeit funktioniert der Player auf https://video.golem.de/... nicht. Bitte die URL der Seite in http://video.golem.de/... ändern. [Weitere Informationen](https://openuserjs.org/scripts/tfr/HTML5-Video_f%C3%BCr_Golem.de/issues/Does_not_work)

Wandelt den Golem.de-eigenen Flash-Player in einen HTML5-Player um. Dazu wird der native Firefox-Player benutzt.

**Funktionen:**
- HD ein- und ausschalten (falls vorhanden)
- HTML5-Player temporär deaktivieren und auf Flash ausweichen (zum Wiederaktivieren von HTML5 die Seite neu laden)
- Links mit Vorschau zu ähnlichen Videos, wenn Abspielvorgang beendet wurde

**Hinweis:** Der Browser muss das Abspielen von MP4-Dateien (H.264 und AAC) ermöglichen, ansonsten erscheint statt des Videos nur eine Fehlermeldung „Video-Format oder MIME-Typ wird nicht unterstützt“. (In dem Fall kann man problemlos auf die Flash-Version umschalten.)

[![Anzeige des Videos nach dem Laden der Seite](https://www.picflash.org/img/2014/05/18/TBlargeTCCEVQ.png "Anzeige des Videos nach dem Laden der Seite")](https://www.picflash.org/picture.php?key=TCCEVQ&action=show) [![Anzeige des Videos bei Mouseover (Links für Aktivierung/Deaktivierung von HD sowie für die Deaktivierung der HTML5-Funktion)](https://www.picflash.org/img/2014/05/18/TBlarge0YZ5GB.png "Anzeige des Videos bei Mouseover (Links für Aktivierung/Deaktivierung von HD sowie für die Deaktivierung der HTML5-Funktion)")](https://www.picflash.org/picture.php?key=0YZ5GB&action=show) [![Anzeige ähnlicher Videos nach Ende des Abspielvorgangs](https://www.picflash.org/img/2014/05/18/TBlargeK0GQU2.png "Anzeige ähnlicher Videos nach Ende des Abspielvorgangs")](https://www.picflash.org/picture.php?key=K0GQU2&action=show)

Links: Anzeige des Videos nach dem Laden der Seite
Mitte: Anzeige des Videos bei Mouseover (Links für Aktivierung/Deaktivierung von HD sowie für die Deaktivierung der HTML5-Funktion)
Rechts: Anzeige ähnlicher Videos nach Ende des Abspielvorgangs

Erfolgreich getestet mit:
- [Firefox 40.0.2](https://www.mozilla.org/firefox/new/) mit [Greasemonkey 3.3](https://addons.mozilla.org/firefox/addon/greasemonkey/)

Google Chrome mit Tampermonkey oder Opera mit Tampermonkey Beta/Violent monkey wird nicht unterstützt.

Es besteht die Möglichkeit, mich per [PN im Golem-Forum](http://forum.golem.de/pm.php?0,page=send,to_id=49624) zu kontaktieren.

**Versionsgeschichte:**
- Version 1 (22.10.2013): Erste Version
- Version 2 (18.01.2014): Unterstützt jetzt auch HTTPS
- Version 3 (19.01.2014): Skript funktioniert jetzt auch bei deaktivierten Cookies
- Version 4 (19.01.2014): Bei Aufruf einer neuen Seite oder Reload nach Deaktivierung der HTML5-Version wird wieder HTML5-Video geladen (bisher neuer Tab benötigt)
- Version 5 (16.08.2015): Metadaten aktualisiert
- Version 6 (16.08.2015): Probleme mit doppelten Playern und Verzögerungen lösen

Dieses Skript auf: [GitHub](https://github.com/t-fr/userscripts/tree/master/HTML5-Video%20f%C3%BCr%20Golem.de) • [Greasy Fork](https://greasyfork.org/scripts/1195-html5-video-f%C3%BCr-golem-de) • [OpenUserJS](https://openuserjs.org/scripts/tfr/HTML5-Video_f%C3%BCr_Golem.de) • [Webextender](http://www.webextender.net/scripts/show/180446.html)