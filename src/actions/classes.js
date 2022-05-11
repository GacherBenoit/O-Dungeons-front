// ACTION TYPE FETCH_CLASSES
export const FETCH_CLASSES = 'FETCH_CLASSES';

// ACTION CREATOR fetchClasses
export const fetchClasses = () => ({
  type: FETCH_CLASSES,
});
// ACTION TYPE SAVE_CLASSES
export const SAVE_CLASSES = 'SAVE_CLASSES';

// ACTION CREATOR saveClasses
export const saveClasses = (classes) => ({
  type: SAVE_CLASSES,
  classes,
});
// ACTION TYPE RANDOM_CLASSE
export const RANDOM_CLASSE = 'RANDOM_CLASSE';

// ACTION CREATOR randomClasse
export const randomClasse = () => ({
  type: RANDOM_CLASSE,
});
  // ACTION TYPE SAVE_RANDOM_CLASSE
export const SAVE_RANDOM_CLASSE = 'SAVE_RANDOM_CLASSE';

// ACTION CREATOR saveRandomClasse
export const saveRandomClasse = (classe) => ({
  type: SAVE_RANDOM_CLASSE,
  classe,
});
