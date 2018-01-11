# CVMA Fotostation Konfiguration Changelog

## v.1.0.10

*12.01.2018*

* FS-Konfigurations-Versionsaktualisierung im Info-Reiter verbessert
* Auswahlliste für das Feld 'Aufnahmeart' angepasst
* Auswahlliste für das Feld 'Name des Fensters' angepasst
* Auswahlliste für das Feld 'Gattung' angepasst

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