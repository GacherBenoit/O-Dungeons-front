// ================================== Méthodes pour les classes

// ==================================
// Récupération via l'API des classes
// ACTION TYPE FETCH_CLASSES
export const FETCH_CLASSES = 'FETCH_CLASSES';

// ACTION CREATOR fetchClasses
export const fetchClasses = () => ({
  type: FETCH_CLASSES,
});
// =================================

// =================================
// Sauvegarde dans le state des classes
// ACTION TYPE SAVE_CLASSES
export const SAVE_CLASSES = 'SAVE_CLASSES';

// ACTION CREATOR saveClasses
export const saveClasses = (classes) => ({
  type: SAVE_CLASSES,
  classes,
});
// ==================================

// ==================================
// Récupération de 2 classes au hasard via l'API
// ACTION TYPE RANDOM_CLASSE
export const RANDOM_CLASSE = 'RANDOM_CLASSE';

// ACTION CREATOR randomClasse
export const randomClasse = () => ({
  type: RANDOM_CLASSE,
});
// =================================

// =================================
// Sauvegarde des 2 races alétaoires dans le state
// ACTION TYPE SAVE_RANDOM_CLASSE
export const SAVE_RANDOM_CLASSE = 'SAVE_RANDOM_CLASSE';

// ACTION CREATOR saveRandomClasse
export const saveRandomClasse = (classe) => ({
  type: SAVE_RANDOM_CLASSE,
  classe,
});
// ================================

// ================================
// Récupération de la classe complète via l'API
// ACTION TYPE FETCH_CLASSE_COMPLETE
export const FETCH_CLASSE_COMPLETE = 'FETCH_CLASSE_COMPLETE';

// ACTION CREATOR fetchClasseComplete
export const fetchClasseComplete = () => ({
  type: FETCH_CLASSE_COMPLETE,
});
// ================================

// ================================
// Sauvegarde dans le state de l'ID de la classe courante
// ACTION TYPE CLASSE_CURRENT_ID
export const CLASSE_CURRENT_ID = 'CLASSE_CURRENT_ID';

// ACTION CREATOR classeCurrentId
export const classeCurrentId = (id) => ({
  type: CLASSE_CURRENT_ID,
  id,
});
// ===============================

// ================================
// Sauvegarde dans le state de la classe courante
// ACTION TYPE SAVE_CURRENT_CLASSE
export const SAVE_CURRENT_CLASSE = 'SAVE_CURRENT_CLASSE';

// ACTION CREATOR saveCurrentClasse
export const saveCurrentClasse = (currentClasse) => ({
  type: SAVE_CURRENT_CLASSE,
  currentClasse,
});
// ================================
