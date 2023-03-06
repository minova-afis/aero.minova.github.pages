## Konfiguration

## Konfiguration des Standards

1. Zuerst begibt man sich auf die Startseite des Repositories, das mit einer GitHub Page versehen werden soll.

   ![](img/1-repopage.png)

2. Es empfiehlt sich, die Dateien für die GitHub Page auf einen separaten Branch auszulagern. Hierzu klickt man auf das Fork-Symbol mit der Anzahl der Branches.

   ![](img/2-repopage-branches.png)

3. In der Ansicht für die Branches erstellen wir per Klick auf den Button **New branch** einen neuen und nennen diesen **gh-pages**.

   ![](img/3-create-branch.png)

4. Zurück in der Hauptübersicht des Repositories klicken wir nun auf **Settings**.

   ![](img/4-repopage-settings.png)

5. In den Settings klicken wir auf **Pages**.

   ![](img/5-settings.png)

6. Hier wählen wir unter dem Oberpunkt **Branch** den eben erstellten Branch **gh-pages** aus. Das Verzeichnis belassen wir beim Standard **/root** und klicken auf **Save**.

   ![](img/6-set-branch.png)

7. Um zu überprüfen, ob die Konfiguration geklappt hat, können wir auf den Reiter **Actions** klicken. Dort wird ein Workflow angestoßen, der **pages build and deployment** heisst. Dieser Workflow benötigt ungefähr eine Minute und wird mit einem grünen runden Hakensymbol vesehen, sowie er erfolgreich abgeschlossen wurde.

   ![](img/7-gh-actions.png)

8. Zurück in der **Settings/Pages**-Ansicht finden wir nun oben den Link zu unserer frisch deployten GitHub Page. Der Zeitraum zwischen ausgeführtem Workflow und der tatsächlichen Erreichbarkeit der GitHub Page kann durchaus einige Minuten bis zur Aktualisierung dauern.

   ![](img/8-get-url.png)
