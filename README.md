# WEBPROGRAMMIERUNG COOKHUB

## BESCHREIBUNG

Cookhub ist eine Webseite zum Anschauen von verschiedenen Kochrezepten und bietet ebenfalls die Möglichkeit Repze über das eigene Konto hochzuladen und auch wieder zu Löschen.


## VERSIONEN
Services in Benutzung für dieses Projekt:

angular v. 16.2.7
typescript v. 5.1.3
ngx-toastr v. 17.0.2
bootstrap v. 5.3.2
angular/material 16.2.9
json-server v. 0.17.


## INSTALLATIONEN
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
Angular-Materials wird mit Folgenen Befehl hinzugefügt:
```terminal
$ ng add @angular/material 
```
Guides und Verschiedene Komponenten für Angular sind hier zu finden: [Angular Material](https://material.angular.io/) 

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
Ebenfalls muss die JSON Datei ausgewählt werden, die von dem Json-Server Überwacht wird
```terminal
$ json-server --watch db.json
```
Hier wird die db.json die im Projekt liegt und als Datenbank benutzt wird, ausgewählt.
Zum Starten der Webanwenung muss im Terminal "ng serve" ausgehührt werden.

### ngx-toastr
```terminal
$ npm install ngx-toastr
```
Toastr wird gebnutzt um Notifikationen und Fehlermeldungen über Angular anzuzeigen

## START DER ANWENDUNG
Hierdurch wird der Webservice gestartet
```terminal
$ ng serve  
```
Hierdurch wird der Json Server für die Rest-Api gestartet
```terminal
$ ng json-server --watch db.json
```
   
Im Browser deiner Wahl nun [Localhost:4200](http://localhost:4200/home-page) öffnen.

 ## AUTHOREN

 Tino Stojanoski
