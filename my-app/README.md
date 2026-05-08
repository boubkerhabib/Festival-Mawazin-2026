# 🎵 Beat — Mawazin 2026

Application React multi-pages pour le festival Mawazin 2026 à Rabat, Maroc (19–27 juin).  
Découvrez 30 artistes, gérez vos favoris, planifiez vos concerts et gardez une mémoire de chaque scène.

## 🚀 Fonctionnalités

- **Accueil** – Présentation du festival, statistiques et concert phare du jour.
- **Programme** – Navigation par jour (9 jours) + filtrage par genre musical.
- **Détail artiste** – Fiche complète : bio, horaire, scène, genre, avec actions "Favori" et "J'y étais".
- **Mon Planning** – Liste des artistes favoris organisés par jour, possibilité de retirer.
- **Passeport Musical** – Concerts marqués "J'y étais", filtrables par genre.

## 🛠️ Stack technique

- **React 18** + **React Router v7** (routes déclaratives)
- **Hooks utilisés** : `useState`, `useEffect`, `useParams`, `useNavigate`, `useLocation`
- **Context API** – Gestion centralisée des artistes, favoris et passeport
- **LocalStorage** – Persistance des favoris et du passeport
- **CSS personnalisé** – Design sombre inspiré de la nuit de concert à Rabat (or, vert menthe, bleu nuit)

## 📦 Installation

```bash
git clone https://github.com/votre-username/beat-mawazin-2026.git
cd beat-mawazin-2026
npm install
npm run dev