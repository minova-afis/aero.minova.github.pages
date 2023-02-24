# aero.minova.github.pages

# GitHub Pages

## Was sind GitHub Pages?

GitHub Pages bieten eine gute Möglichkeit, einfach und unkompliziert Dokumentationen und Benutzerhandbücher als Webseite darzustellen. Man erhält eine automatisch generierte statische Webseite, die auf der README.md im root-Verzeichnis eines Repositories basiert und über GitHub selbst gehostet wird. Natürlich sind GitHub Pages von Haus aus über sichere https-Adressen erreichbar.

## Konfiguration des Standards

1. Zuerst begeben wir uns auf die Startseite des Repositories, das wir mit einer GitHub Page versehen wollen.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/1-repopage.png?token=GHSAT0AAAAAAB5EQAR44KFRFICYSWVW6NNQY7Y6K7Q)

2. Es empfiehlt sich, die Dateien für die GitHub Page auf einen separaten Branch auszulagern. Hierzu klicken wir auf das Fork-Symbol mit der Anzahl der Branches.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/2-repopage-branches.png?token=GHSAT0AAAAAAB5EQAR43YX3XF6JHRMMX4CGY7Y6LWA)

3. In der Ansicht für die Branches erstellen wir per Klick auf den Button **New branch** einen neuen und nennen diesen **gh-pages**.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/3-create-branch.png?token=GHSAT0AAAAAAB5EQAR4LVFR37TDVFJF7RAUY7Y6MAQ)

4. Zurück in der Hauptübersicht des Repositories klicken wir nun auf **Settings**.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/4-repopage-settings.png?token=GHSAT0AAAAAAB5EQAR5WE72XQR553K6CDV2Y7Y6MSQ)

5. In den Settings klicken wir auf **Pages**.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/5-settings.png?token=GHSAT0AAAAAAB5EQAR4D7RYX3MTPXBH3S4SY7Y6M6Q)

6. Hier wählen wir unter dem Oberpunkt **Branch** den eben erstellten Branch **gh-pages** aus. Das Verzeichnis belassen wir beim Standard **/root** und klicken auf **Save**.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/6-set-branch.png?token=GHSAT0AAAAAAB5EQAR5LH7WIAIUG4RNT7GGY7Y6NHQ)

7. Um zu überprüfen, ob die Konfiguration geklappt hat, können wir auf den Reiter **Actions** klicken. Dort wird ein Workflow angestoßen, der **pages build and deployment** heisst. Dieser Workflow benötigt ungefähr eine Minute und wird mit einem grünen runden Hakensymbol vesehen, sowie er erfolgreich abgeschlossen wurde.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/7-gh-actions.png?token=GHSAT0AAAAAAB5EQAR4STKII56NHOUGPKE6Y7Y6NQQ)

8. Zurück in der **Settings/Pages**-Ansicht finden wir nun oben den Link zu unserer frisch deployten GitHub Page. Der Zeitraum zwischen ausgeführtem Workflow und der tatsächlichen Erreichbarkeit der GitHub Page kann durchaus einige Minuten bis zur Aktualisierung dauern.

   ![](https://raw.githubusercontent.com/minova-afis/aero.minova.github.pages/main/doc/img/8-get-url.png?token=GHSAT0AAAAAAB5EQAR4UPI7SDUUNVGNW4HGY7Y6N2A)

## Editieren des Standards
