# aero.minova.github.pages

# GitHub Pages

## Was sind GitHub Pages?

GitHub Pages bieten eine gute Möglichkeit, einfach und unkompliziert Dokumentationen und Benutzerhandbücher als Webseite darzustellen. Man erhält eine automatisch generierte statische Webseite, die auf der README.md im root-Verzeichnis eines Repositories basiert und über GitHub selbst gehostet wird. Natürlich sind GitHub Pages von Haus aus über sichere https-Adressen erreichbar.

## Konfiguration des Standards

1. Zuerst begeben wir uns auf die Startseite des Repositories, das wir mit einer GitHub Page versehen wollen.

![](doc/img/1-repopage.png)

2. Es empfiehlt sich, die Dateien für die GitHub Page auf einen separaten Branch auszulagern. Hierzu klickenwir auf das Fork-Symbol mit der Anzahl der Branches.

![](./doc/img/2-repopage-branches.png)

3. In der Ansicht für die Branches erstellen wir per Klick auf den Button **New branch** einen neuen und nennen diesen **gh-pages**.

![](doc/img/3-create-branch.png)

4. Zurück in der Hauptübersicht des Repositories klicken wir nun auf **Settings**.

![](doc/img/4-repopage-settings.png)

5. In den Settings klicken wir auf **Pages**.

![](doc/img/5-settings.png)

6. Hier wählen wir unter dem Oberpunkt **Branch** den eben erstellten Branch **gh-pages** aus. Das Verzeichnis belassen wir beim Standard **/root** und klicken auf **Save**.

![](doc/img/6-set-branch.png)

7. Um zu überprüfen, ob die Konfiguration geklappt hat, können wir auf den Reiter **Actions** klicken. Dort wird ein Workflow angestoßen, der **pages build and deployment** heisst. Dieser Workflow benötigt ungefähr eine Minute und wird mit einem grünen runden Hakensymbol vesehen, sowie er erfolgreich abgeschlossen wurde.

![](doc/img/7-gh-actions.png)

8. Zurück in der **Settings/Pages**-Ansicht finden wir nun oben den Link zu unserer frisch deployten GitHub Page. Der Zeitraum zwischen ausgeführtem Workflow und der tatsächlichen Erreichbarkeit der GitHub Page kann durchaus einige Minuten bis zur Aktualisierung dauern.

![](doc/img/8-get-url.png)

## Editieren des Standards
