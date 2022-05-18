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

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

// ACTION TYPE LOGGED
export const IS_LOGGED = 'IS_LOGGED';

// ACTION CREATOR isLogged
export const isLogged = () => ({
  type: IS_LOGGED,
});

// ACTION TYPE MAIL_NEW_USER
export const MAIL_NEW_USER = 'MAIL_NEW_USER';

// ACTION CREATOR mailNewUser
export const mailNewUser = (value) => ({
  type: MAIL_NEW_USER,
  value,
});

// ACTION TYPE PASSWORD_NEW_USER
export const PASSWORD_NEW_USER = 'PASSWORD_NEW_USER';

// ACTION CREATOR passwordNewUser
export const passwordNewUser = (value) => ({
  type: PASSWORD_NEW_USER,
  value,
});

// ACTION TYPE FIRSTNAME_NEW_USER
export const FIRSTNAME_NEW_USER = 'FIRSTNAME_NEW_USER';

// ACTION CREATOR firstnameNewUser
export const firstnameNewUser = (value) => ({
  type: FIRSTNAME_NEW_USER,
  value,
});

// ACTION TYPE MAIL_NEW_USER
export const LASTNAME_NEW_USER = 'LASTNAME_NEW_USER';

// ACTION CREATOR mailNewUser
export const lastnameNewUser = (value) => ({
  type: LASTNAME_NEW_USER,
  value,
});

// ACTION TYPE CREATE_NEW_ACCOUNT
export const CREATE_NEW_ACCOUNT = 'CREATE_NEW_ACCOUNT';

// ACTION CREATOR createNewAccount
export const createNewAccount = () => ({
  type: CREATE_NEW_ACCOUNT,
});

// ACTION TYPE SET_ID
export const SET_ID = 'SET_ID';

// ACTION CREATOR setId
export const setId = (id) => ({
  type: SET_ID,
  id,
});

// ACTION TYPE FIND_USER
export const FIND_USER = 'FIND_USER';

// ACTION CREATOR findUser
export const findUser = () => ({
  type: FIND_USER,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE EDIT_ACCOUNT_USER
export const EDIT_ACCOUNT_USER = 'EDIT_ACCOUNT_USER';

// ACTION CREATOR editAccountUser
export const editAccountUser = () => ({
  type: EDIT_ACCOUNT_USER,
});
