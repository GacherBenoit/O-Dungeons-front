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
