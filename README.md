# Blood on the Clocktower Companion

Fertiges, deploybares Projekt für GitHub Pages. Kein Server nötig, läuft komplett im Browser.

## Einmalige Einrichtung

1. **Neues Repository auf GitHub erstellen.** Name frei wählbar, z.B. `botc-companion`. Kann öffentlich oder privat sein, das spielt für Pages selbst keine Rolle (siehe Hinweis unten).

2. **Passwort setzen.** Standardmässig ist es `9100`. Um es zu ändern, in `src/App.jsx` nach `const APP_PASSWORD` suchen und den Wert ersetzen.

3. **Basispfad setzen.** In `vite.config.js` `REPO-NAME` durch den exakten Namen deines Repositories ersetzen (aus Schritt 1). Beispiel: Repo heisst `botc-companion` → `base: '/botc-companion/'`.

4. **Alle Dateien in dein neues Repository hochladen.** Entweder per Drag & Drop auf github.com, oder über die Kommandozeile:
   ```
   git init
   git add .
   git commit -m "Erste Version"
   git branch -M main
   git remote add origin https://github.com/DEIN-NUTZERNAME/DEIN-REPO-NAME.git
   git push -u origin main
   ```

5. **GitHub Pages aktivieren.** Im Repository auf GitHub: Settings → Pages → bei "Build and deployment" → "Source" auf **GitHub Actions** stellen. Das war's, der Workflow in `.github/workflows/deploy.yml` übernimmt den Rest automatisch bei jedem Push auf `main`.

6. Nach ein bis zwei Minuten ist die Seite unter `https://DEIN-NUTZERNAME.github.io/DEIN-REPO-NAME/` erreichbar.

## Passwort ändern später

Einfach `APP_PASSWORD` in `src/App.jsx` anpassen und die Änderung committen und pushen, der Workflow deployt automatisch neu.

## Wichtiger Hinweis zum Passwortschutz

Das Passwort ist eine reine Komfort-Hürde, keine echte Sicherheit. Der Code läuft im Browser, jede Person mit technischem Wissen könnte das Passwort im Quellcode finden. Für ein privates Spiel mit Freunden reicht das, für irgendetwas Sensibles wäre es das nicht.

## Lokal testen (optional)

```
npm install
npm run dev
```
Öffnet die App lokal unter `http://localhost:5173`.
