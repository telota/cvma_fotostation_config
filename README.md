# CVMA Fotostation Configuration

## Voraussetzungen

* **npm** (Node Package Manager) muss installiert sein
* **grunt** muss global installiert sein ```$ npm install -g grunt```

## Installation

* Abhängigkeiten via npm installieren
```
$ npm install
```

## Verwendung

* Aktualisierte Fotostation-Konfiguration in diesem Projektordner speichern.
* Der folgende Befehl verschiebt die Änderungen in den *conf*-Ordner, verpackt diesen als ZIP-Archiv im *dist*-Ordner und erhöht anschließend die Versionsnummer:
```
$ grunt
```
* Mit **git** können die Änderungen dann hinzugefügt, committed und gepusht werden. Derzeit wird der *develop*-Branch genutzt.