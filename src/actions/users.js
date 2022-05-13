// ACTION TYPE MENU_BURGER_TOGGLE
export const MENU_BURGER_TOGGLE = 'MENU_BURGER_TOGGLE';

// ACTION CREATOR menuBurgerToggle
export const menuBurgerToggle = () => ({
  type: MENU_BURGER_TOGGLE,
});

// ACTION TYPE SET_EMAIL
export const SET_EMAIL = 'SET_EMAIL';

// ACTION CREATOR setEmail
export const setEmail = (value) => ({
  type: SET_EMAIL,
  value,
});

// ACTION TYPE SET_PASSWORD
export const SET_PASSWORD = 'SET_PASSWORD';

// ACTION CREATOR setPassword
export const setPassword = (value) => ({
  type: SET_PASSWORD,
  value,
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR Login
export const login = () => ({
  type: LOGIN,
});
