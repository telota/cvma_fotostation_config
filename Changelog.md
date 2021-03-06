# CVMA Fotostation Konfiguration Changelog

## v.1.1.6

* `dc:description` kann nun bearbeitet werden.

## v.1.1.3

* Versionsnummer in der Bearbeitungsmaske aktualisiert

## v.1.1.1

*06.04.2018*

* "In Ordner kopieren"-Aktion angepasst
    - Nachfrage, wohin kopiert werden soll
    - Standard: `%userprofile%/Desktop/FotoStation`
* "Auf Desktop kopieren"-Aktion hinzugefügt
    - Ausgewählte Dateien werden automatisch kopiert
    - Unterordner wird automatisch angelegt
    - Ziel: `%userprofile%/Desktop/Fotostation`
* Unnötige Print-Templates entfernt
* Übersichtsliste angepasst

## v.1.1.0

*23.02.2018*

* Archiv-Shortcuts: Unterordner mit einlesen
* Recherchekonfiguration hinzugefügt
    - Nur Zugriff auf das JPG-Bildarchiv
    - Keine Metadatenaktionen (Bearbeitung kann jedoch nicht deaktiviert werden)
    - Kein Zugriff auf gesamten Dateiexplorer
* Enthält die Änderungen von v.1.0.11

## v.1.0.11

*23.02.2018*

* Aktionen reaktiviert (rechte Seitenleiste)
* Archiv-Shortcuts hinzugefügt (linke Seitenleiste: JPG und Originale)
* Jobs- und Projects-Reiter deaktiviert (linke Seitenleiste)
* Vorauswahl für das Feld `Rechtenennung` angepasst
* `cvma:originalLocationId` zu `cvma:FormerLocationIds` geändert

## v.1.0.10

*12.01.2018*

* FS-Konfigurations-Versionsaktualisierung im Info-Reiter verbessert
* Auswahlliste für das Feld 'Aufnahmeart' angepasst
* Auswahlliste für das Feld 'Name des Fensters' angepasst
* Auswahlliste für das Feld 'Gattung' angepasst
* Auswahlliste für das Feld 'Europa' angepasst
* Auswahlliste für das Feld 'Bundesland' angepasst
* Felder Rechtenennung und Restaurierungsgeschichte vergrößert
* "Migration abgeschlossen" zu "Vorläufige Kopie", als Freitextfeld umdefiniert und Felddefinition geändert
* Auswahlliste für das Feld 'Autor' angepasst
* Display Templates angepasst
* Aktionen reaktiviert

## v.1.0.9

*01.12.2017*

* Unnötige Funktionen wie "Beispielaktionen" entfernt
* Text- und Feldgrößen vergrößert
* Neue Hilfefelder im Info-Reiter hinzugefügt
  - Abgleich Archiv
  - Status Bildbearbeitung, Neuscan, etc.
  - Migration abgeschlossen
* Alle Metadatenfelder durchsuchbar gemacht
* Alle Metadatenfelder für die Auswahlliste verüfgbar gemacht
* Thumbnail Beschreibungsfester mit Metadaten befüllt
  

## v1.0.8

*28.10.2017*

* die Vorschlagslisten für Ortsangaben, Rechte und Iconclass wurden angepasst bzw. geleert
* "im Bildarchiv freigeben" wurde vom Info-Reiter in den Rechte-Reiter verschoben
* die Auswahl der Felder in der Suche wurde auf den CVMA-Standard angepasst. Überflüssige Felder wurden entfernt (z.B. Name des Patienten)
* die Detaillistenansicht wurde leicht angepasst


## v1.0.2

*03.05.2017*

* CVMA-Namensraum aktualisiert
* Konfigurationsversion im Info-Reiter anzeigen

## v1.0.0

*14.03.2017*

* CVMA-Namensraum aktualisiert

## v0.2.21

* CVMA-XMP Druckvorlage
    - Ort und Scheibe nebeneinander angeordnet
    - Mehr Platz für Personen/Körperschaften und Iconclass geschaffen
    - Richtiges Aufnahmedatum implementiert (statt Helper)

## v0.2.20

*20.10.2016*

* CVMA-XMP Druckvorlage
    - Vorlage umbenannt
    - Thumbnail deutlich verkleinert
    - Felder neu angeordnet


## v0.2.19

*18.10.2016*

* Druckvorlage für das CVMA-Metadatenschema erstellt

## v0.2.18

*06.10.2016*

* Neues Feld angelegt: cvma:PublishToArchive
* Neues Feld cvma:PublishToArchive im Info-Reiter bei Fotoation als "Im Online-Bildarchiv veröffentlichen" (True/False) implementiert

## v0.2.17

*05.10.2016*

* Regulärer Ausdruck aus xmp:CreateDate entfernt

## v0.2.16

*05.10.2016*

* Neues Feld angelegt: cvma:originalLocationId
* Neues Feld angelegt: cvma:CreateDateHelper
* Neu angelegte Felder in Fotostation-Konfiguration implementiert

## v0.2.15

*14.09.2016*

* IconclassNotation: Feld reimplementiert, um einzelne Listeneinträge intern als Bag zu speichern