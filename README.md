WEBPROGRAMMIERUNG COOKHUB


BESCHREIBUNG

VERSIONEN
Services in Benutzung für dieses Projekt:

angular v. 16.2.7
typescript v. 5.1.3
ngx-toastr v. 17.0.2
bootstrap v. 5.3.2
angular/material 16.2.9
json-server v. 0.17.


INSTALLATIONEN


Fake Rest-APi with json-server v. 0.17.4  -----> für benutzung " npm install -g json-server" oder "npm i json-server"
Der Json-Server läuft über die IP/Port lochalhost:3000 
Um die JSON Datei auszuwählen die von dem Json-Server Überwacht wird, muss der Befehl "json-server --watch db.json"
Hier wird die db.json die im Projekt liegt und als Datenbank benutzt wird, ausgewählt.
Zum Starten der Webanwenung muss im Terminal "ng serve" ausgehührt werden.

 Angular-Materials wird mit Folgenen Befehl hinzugefügt: "ng add @angular/material" 
 Guides und Verschiedene Komponenten für Angular sind hier zu finden: https://material.angular.io/ 


START DER ANWENDUNG

ng serve                                -> Hierdurch wird der Webservice gestartet
ng json-server --watch db.json          -> Hierdurch wird der Json Server für die Rest-Api gestartet

Im Browser deiner Wahl nun http://localhost:4200/home-page öffnen.

 AUTHOREN

 Tino Stojanoski
