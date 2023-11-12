# WEBPROGRAMMIERUNG COOKHUB

## BESCHREIBUNG 

CookHub ist eine Webseite zum Anschauen von verschiedenen Kochrezepten und bietet ebenfalls die Möglichkeit, Rezepte über das eigene Konto hochzuladen und auch wieder zu löschen. 

Das Hochladen von eigenen Rezepten ist über die eigene Profilseite möglich. Rezepte können nur hochgeladen werden, wenn man als Benutzer eingeloggt ist.

Um sich mit de eigenen Benutzerdaten einloggen zu können, bietet CookHub die Möglichkeit, einen eigenen Account anzulegen. Das ist über die Registrier-Seite möglich.

Nach dem Login können Rezepte hochgeladen, gelöscht und jederzeit angeschaut werden. 

Auf der Suchseite sind alle Rezepte zu finden. Einige Rezepte sind mit "Tags" versehen, womit man auf der Suchseite nach diesen filtern kann. 

Zur Navigation über die Webseite kann man Header oder Footer verwenden. 

## VERSIONEN
Services in Benutzung für dieses Projekt:

angular v. 16.2.7
typescript v. 5.1.3
ngx-toastr v. 17.0.2
bootstrap v. 5.3.2
angular/material 16.2.9
json-server v. 0.17.


## INSTALLATIONEN 💻
### Node.js
[NodeJS Download](https://nodejs.org/en/download)
Bitte aktuellste Version
### NPM
```terminal
$ npm install 
```
### Angular
```terminal
$ npm install -g @angular/cli 
```
Angular-Materials wird mit folgendem Befehl hinzugefügt:
```terminal
$ ng add @angular/material 
```
Guides und verschiedene Komponenten für Angular sind hier zu finden: [Angular Material](https://material.angular.io/) 

### Rest-Api
Fake Rest-Api with json-server v. 0.17.4
```terminal
$ npm install -g json-server
```
oder
```terminal
$ npm i json-server
```
Der Json-Server läuft über die IP/Port lochalhost:3000 
Ebenfalls muss die JSON Datei ausgewählt werden, die von dem Json-Server Überwacht wird.
```terminal
$ json-server --watch db.json
```
Hier wird die db.json, die im Projekt liegt und als Datenbank benutzt wird, ausgewählt.
Zum Starten der Webanwendung muss im Terminal "ng serve" ausgeführt werden.

### ngx-toastr
```terminal
$ npm install ngx-toastr
```
Toastr wird genutzt, um Benachrichtigungen und Fehlermeldungen über Angular anzuzeigen.

## START DER ANWENDUNG 🚀
Sicherstellen, dass das richtige Verzeichnis ausgewählt ist:
```terminal
$ cd cookhub  
```
Hierdurch wird der Webservice gestartet:
```terminal
$ ng serve  
```
Hierdurch wird der Json Server für die Rest-Api gestartet:
```terminal
$ npx json-server --watch db.json
```
   
Im Browser deiner Wahl kann die Webseite unter dem Link [Localhost:4200](http://localhost:4200/home-page) aufgerufen werden.

 ## AUTOREN ✍️

 Tino Stojanoski, Nadine Blaas
