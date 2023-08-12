# Détails des fonctionnalilitées et des éléments


## Structure HTML:

- ``<!DOCTYPE html>``: Indique la version HTML utilisée.
- ``<html>``: Balise racine du document HTML.
- ``<head>``: Contient les métadonnées et les liens vers les ressources externes.
- ``<body>``: Contient le contenu visible de la page.

## Fonctionnalités principales:

#### 1. Choix du thème, du rythme, de l'audio et du minuteur:
- Une sélection de différentes options à partir des listes déroulantes (planet, rythme, sound, compteur) pour personnaliser la relaxation.
- Les événements click sont utilisés pour écouter les changements de sélection.

#### 2. Démarrage de la relaxation:
- Au clique sur le bouton "``Alors démarrons la relaxation``", différentes actions sont déclenchées :
    - Les éléments de navigation (``nav``) sont masqués.
    - Les éléments de navigation additionnels (``nav2``) sont affichés.
    - Le texte et les boutons de pause et de lecture audio (``play`` et ``pause``) sont affichés.
    - Les étoiles de fond (etoile) sont masquées.

#### 3. Animation et affichage de la planète:
- Au choix d'un thème de planète, une image SVG de la planète est affichée.
- Les classes CSS sont utilisées pour appliquer des animations spécifiques (rythme64, rythme55, etc.) en fonction du rythme sélectionné.

#### 4. Minuteur de relaxation:
- Le minuteur est initialisé en fonction de la durée sélectionnée par l'utilisateur.
- La fonction diminuerTimer est appelée à intervalles réguliers pour mettre à jour le minuteur.
- Une fois que le minuteur atteint ``00:00``, l'animation de la planète est masquée et le message "``Fin de la relaxation``" est affiché.

#### 5. Audio:
- Une sélection de différentes options audio (``sound``) pour l'ambiance sonore pendant la relaxation.
- Les événements change sont utilisés pour détecter les changements dans la sélection audio.

#### 6. Tutoriel et Guide:
- Accéder a un tutoriel en cliquant sur "``Conseils d'utilisation``".
- Le guide est affiché avec les étapes à suivre pour utiliser l'application de manière efficace.

## Événements et écoutes:

- ``btn.addEventListener('click')``: Événement déclenché au clique sur le bouton de démarrage.
- ``planet.addEventListener('click')``: Événement déclenché au clique sur la liste déroulante des planètes.
- ``sound.addEventListener('change')``: Événement déclenché au sélectionne une option audio.
- ``tuto.addEventListener('click')``: Événement déclenché au clique sur le lien de tutoriel.
- ``btnGuide.addEventListener('click')``: Événement déclenché au clique sur le bouton de fermeture du guide.

## Exemples d'événements:

- Au clique sur le bouton "``Alors démarrons la relaxation``", plusieurs actions sont déclenchées.
- A la sélection d'un thème de planète, une image SVG correspondante est affichée.
- Au choix d'une option audio, la musique d'ambiance est jouée.

## Détails techniques:

- Les fonctions sont définies en JavaScript pour gérer les interactions utilisateur.
- Utilisation de ``boucles switch`` pour traiter les différentes options sélectionnées.
- Utilisation de fonctions ``setInterval`` pour mettre à jour le minuteur.