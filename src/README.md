---
title:
---

Chaque répertoire correspond à une fenêtre de l'application. Il contient systématiquement les fichiers suivants :

- `./window/preload.js` : Interface de contrôle de la fenêtre
- `./window/render.js` : Rendu des composants React pour intégration des éléments de la page
- `./window/components/App.js` : Composant racine
- `./window/windows.js` : Ouverture de la fenêtre et gestion des évènements

Plus d'informations :

- https://www.electronjs.org/docs/latest/tutorial/context-isolation
- https://www.electronjs.org/docs/latest/tutorial/ipc