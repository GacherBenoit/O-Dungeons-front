// =========================Méthodes pour les races

// =====================================
// Récupération via l'API des races
// ACTION TYPE FETCH_RACES
export const FETCH_RACES = 'FETCH_RACES';

// ACTION CREATOR fetchRaces
export const fetchRaces = () => ({
  type: FETCH_RACES,
});
// ====================================

// ====================================
// Sauvegarde dans le state des races
// ACTION TYPE SAVE_RACES
export const SAVE_RACES = 'SAVE_RACES';

// ACTION CREATOR saveraces
export const saveRaces = (races) => ({
  type: SAVE_RACES,
  races,
});
// =====================================

// =====================================
// Récupération via l'API de 2 races au hasard pour la page d'accueil
// ACTION TYPE RANDOM_RACES
export const RANDOM_RACES = 'RANDOM_RACES';

// ACTION CREATOR randomRaces
export const randomRaces = () => ({
  type: RANDOM_RACES,
});
// ====================================

// ====================================
// Sauvegarde dans le state des 2 races aléatoires
// ACTION TYPE SAVE_RANDOM_RACES
export const SAVE_RANDOM_RACES = 'SAVE_RANDOM_RACES';

// ACTION CREATOR randomRaces
export const saveRandomRaces = (race) => ({
  type: SAVE_RANDOM_RACES,
  race,
});
// ==================================

// ===================================
// Récupération d'une race complète par son ID
// ACTION TYPE FETCH_RACE_COMPLETE
export const FETCH_RACE_COMPLETE = 'FETCH_RACE_COMPLETE';

// ACTION CREATOR fetchClasseComplete
export const fetchRaceComplete = () => ({
  type: FETCH_RACE_COMPLETE,
});
// =================================

// =================================
// Sauvegarde dans le state l'ID de la classe selectionnée
// ACTION TYPE CLASSE_CURRENT_ID
export const RACE_CURRENT_ID = 'RACE_CURRENT_ID';

// ACTION CREATOR classeCurrentId
export const raceCurrentId = (id) => ({
  type: RACE_CURRENT_ID,
  id,
});
// =================================

// ==================================
// Sauvegarde la race choisie dans le state
// ACTION TYPE SAVE_CURRENT_RACE
export const SAVE_CURRENT_RACE = 'SAVE_CURRENT_RACE';

// ACTION CREATOR saveCurrentRACE
export const saveCurrentRace = (currentRace) => ({
  type: SAVE_CURRENT_RACE,
  currentRace,
});
// ====================================
