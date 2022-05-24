// ================================== LISTE DES ACTIONS CONCERNANT LES PAGES CONNEXION ET MON COMPTE
// ================================== ET DU MENU BURGER

// ====================================================
// Action qui gère l'ouverture/fermeture du menu burger en mobile
// ACTION TYPE MENU_BURGER_TOGGLE
export const MENU_BURGER_TOGGLE = 'MENU_BURGER_TOGGLE';

// ACTION CREATOR menuBurgerToggle
export const menuBurgerToggle = () => ({
  type: MENU_BURGER_TOGGLE,
});
// ==================================================

// ================================================
// Sauvegarde dans le state de l'email de l'utilisateur
// ACTION TYPE SET_EMAIL
export const SET_EMAIL = 'SET_EMAIL';

// ACTION CREATOR setEmail
export const setEmail = (value) => ({
  type: SET_EMAIL,
  value,
});
// ==================================================

// =================================================
// Sauvegarde dans le state de le password de l'utilisateur
// ACTION TYPE SET_PASSWORD
export const SET_PASSWORD = 'SET_PASSWORD';

// ACTION CREATOR setPassword
export const setPassword = (value) => ({
  type: SET_PASSWORD,
  value,
});
// ==================================================

// ==================================================
// Envoi à l'API l'email et le password de l'utilisateur
// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR Login
export const login = () => ({
  type: LOGIN,
});
// ====================================================

// ====================================================
// Sauvegarde dans le state de l'utilisateur connecté
// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
// =======================================================
// Sauvegarde dans le state le fait que l'utilisateur soit connecté ou non
// ACTION TYPE LOGGED
export const IS_LOGGED = 'IS_LOGGED';

// ACTION CREATOR isLogged
export const isLogged = () => ({
  type: IS_LOGGED,
});
// ======================================================
// Sauvegarde dans le state l'email d'un nouvel utilisateur
// ACTION TYPE MAIL_NEW_USER
export const MAIL_NEW_USER = 'MAIL_NEW_USER';

// ACTION CREATOR mailNewUser
export const mailNewUser = (value) => ({
  type: MAIL_NEW_USER,
  value,
});
// ========================================================

// ========================================================
// Sauvegarde dans le state le password d'un nouvel utilisateur
// ACTION TYPE PASSWORD_NEW_USER
export const PASSWORD_NEW_USER = 'PASSWORD_NEW_USER';

// ACTION CREATOR passwordNewUser
export const passwordNewUser = (value) => ({
  type: PASSWORD_NEW_USER,
  value,
});
// ========================================================

// =========================================================
// Sauvegarde dans le state le prénom d'un nouvel utilisateur
// ACTION TYPE FIRSTNAME_NEW_USER
export const FIRSTNAME_NEW_USER = 'FIRSTNAME_NEW_USER';

// ACTION CREATOR firstnameNewUser
export const firstnameNewUser = (value) => ({
  type: FIRSTNAME_NEW_USER,
  value,
});
// ==========================================================

// =========================================================
// Sauvegarde dans le state le nom de famille d'un nouvel utilisateur
// ACTION TYPE MAIL_NEW_USER
export const LASTNAME_NEW_USER = 'LASTNAME_NEW_USER';

// ACTION CREATOR mailNewUser
export const lastnameNewUser = (value) => ({
  type: LASTNAME_NEW_USER,
  value,
});
// ========================================================

// =========================================================
// Envoi à l'API de toutes les infos du nouvel utilisateur créé
// ACTION TYPE CREATE_NEW_ACCOUNT
export const CREATE_NEW_ACCOUNT = 'CREATE_NEW_ACCOUNT';

// ACTION CREATOR createNewAccount
export const createNewAccount = () => ({
  type: CREATE_NEW_ACCOUNT,
});
// ======================================================

// ======================================================
// ACTION TYPE SET_ID
// export const SET_ID = 'SET_ID';

// // ACTION CREATOR setId
// export const setId = (id) => ({
//   type: SET_ID,
//   id,
// });

// ======================================================
// Envoi à l'API de l'ID et du token récupérés dans local storage
// ACTION TYPE FIND_USER
export const FIND_USER = 'FIND_USER';

// ACTION CREATOR findUser
export const findUser = () => ({
  type: FIND_USER,
});
// ====================================================

// =====================================================
// Vide le state et le local  storage des infos de l'utilisateur
// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});
// ===================================================

// ===================================================
// Envoi à l'API toutes les modifications faites par l'utilisateur sur son compte
// ACTION TYPE EDIT_ACCOUNT_USER
export const EDIT_ACCOUNT_USER = 'EDIT_ACCOUNT_USER';

// ACTION CREATOR editAccountUser
export const editAccountUser = () => ({
  type: EDIT_ACCOUNT_USER,
});
// ==================================================

// ==================================================
// Sauvegarde dans le state le nouveau password de l'utilisateur
// ACTION TYPE SET_NEW_PASSWORD
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

// ACTION CREATOR setNewPassword
export const setNewPassword = (value) => ({
  type: SET_NEW_PASSWORD,
  value,
});
// ================================================

// =================================================
// Déclenche le message pour l'utilisateur du changement de password
// ACTION TYPE PASSWORD_CHANGE
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';

// ACTION CREATOR passwordChange
export const passwordChange = () => ({
  type: PASSWORD_CHANGE,
});
// ================================================

// ================================================
// Envoi à l'API l' ancien et le nouveau password de l'utilisateur
// ACTION TYPE EDIT_PASSWORD_USER
export const EDIT_PASSWORD_USER = 'EDIT_PASSWORD_USER';

// ACTION CREATOR editPasswordUser
export const editPasswordUser = () => ({
  type: EDIT_PASSWORD_USER,
});
// ================================================

// ================================================
// Récupération via l'API de tous les avatars
// ACTION TYPE GET_ALL_AVATAR
export const GET_ALL_AVATAR = 'GET_ALL_AVATAR';

// ACTION CREATOR getAllAvatar
export const getAllAvatar = () => ({
  type: GET_ALL_AVATAR,
});
// =================================================

// =================================================
// Sauvegarde dans le state de tous les avatars
// ACTION TYPE SAVE_ALL_AVATARS
export const SAVE_ALL_AVATARS = 'SAVE_ALL_AVATARS';

// ACTION CREATOR saveAllAvatars
export const saveAllAvatars = (allavatars) => ({
  type: SAVE_ALL_AVATARS,
  allavatars,
});
// ===============================================

// ================================================
// Sauvegarde dans le state l'ID du nouvel avatar choisi
// ACTION TYPE SET_NEW_AVATAR_ID
export const SET_NEW_AVATAR_ID = 'SET_NEW_AVATAR_ID';

// ACTION CREATOR setNewAvatarId
export const setNewAvatarId = (id) => ({
  type: SET_NEW_AVATAR_ID,
  id,
});
// ===============================================

// ===============================================
// Envoi à l'API l'ID du nouvel avatar choisi
// ACTION TYPE CHANGE_AVATAR
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

// ACTION CREATOR changeAvatar
export const changeAvatar = () => ({
  type: CHANGE_AVATAR,
});
// ==============================================

// ==============================================
// Permet de voir ou non la liste des avatars
// ACTION TYPE SEE_AVATAR_TOOGLE
export const SEE_AVATAR_TOOGLE = 'SEE_AVATAR_TOOGLE';

// ACTION CREATOR seeAvatarToogle
export const seeAvatarToogle = () => ({
  type: SEE_AVATAR_TOOGLE,
});
// ==============================================
