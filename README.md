# CVMA Fotostation Configuration

## Voraussetzungen

* **npm** (Node Package Manager) muss installiert sein
* **grunt** muss global installiert sein ```$ npm install -g grunt```

## Installation

* Abhängigkeiten via npm installieren
```
$ npm install
```

## Verwaltung mit Grunt

* Aktualisierte Fotostation-Konfiguration in diesem Projektordner speichern.
* Der folgende Befehl verschiebt die Änderungen in den *conf*-Ordner, verpackt diesen als ZIP-Archiv im *dist*-Ordner und erhöht anschließend die Versionsnummer:
```
$ npm run grunt
```
* Mit **git** können die Änderungen dann hinzugefügt, committed und gepusht werden. Derzeit wird der *develop*-Branch genutzt.

## Verwaltung mit FotoStation 

* FotoStation: https://www.fotostation.com/
* Um das konfigurierte Metadatenschema in FotoStation nutzen zu können, sind folgende Schritte nötig: 
    - Entpacken Sie die Zip-Datei der Fotostation-Konfiguration ```cvma_fotostation_config_<version>.zip``` 
    - Öffnen Sie FotoStation
    - Wählen Sie in der Menüleiste: Datei > Konfiguration > Konfiguration laden...
    - Es öffnet sich ein Ordnerauswahldialog. Wählen Sie den Ordner, der die Unterordner ```Shared``` und ```Windows``` enthält. 
    - FotoStation muss anschließend neugestartet werden.

## Benutzung der Konfiguration auf MacOS

Um die FotoStation-Konfiguration auf MacOS muss der Ordner ```Windows``` aus dem entpackten Zip-Verzeichnis zu ```Mac``` umbenannt werden. Anschließend kann FotoStation die Konfiguration auch auf MacOS nutzen.




