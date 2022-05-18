import {
  SET_RACE,
  FETCH_RACES,
  // SET_CLASSE,
  FETCH_RACE_CREATOR,
  SAVE_BACKGROUND_CREATOR,
  SAVE_CURRENT_RACE_CREATOR,
  SET_NAME,
  SAVE_CURRENT_ID,
  SAVE_SUBRACE_CURRENT_ID,
  SAVE_CURRENT_SUBRACE,
  SAVE_CLASSE_CURRENT_ID,
  SAVE_CURRENT_CLASSE_ABILITIES,
  SAVE_CURRENT_CLASSE_CREATOR,
  SAVE_CURRENT_BACKGROUND_ID,
  SAVE_CURRENT_BACKGROUND,
  SAVE_MORALITY,
  SAVE_ALIGNEMENT,
  SAVE_DEXTERITY_DICE,
  SAVE_STRENGTH_DICE,
  SAVE_CONSTITUTION_DICE,
  SAVE_INTELLIGENCE_DICE,
  SAVE_WISDOM_DICE,
  SAVE_CHARISMA_DICE,
} from '../actions/character';
// import { FETCH_RACES, SAVE_CURRENT_RACE } from '../actions/races';

const initialState = {
  race: '',
  subrace: '',
  currentClasse: '',
  name: '',
  raceList: [],
  backgroundList: [],
  currentBackgroundId: '',
  currentBackground: {},
  currentId: '',
  currentRace: {},
  currentSubraceId: '',
  currentSubrace: {},
  currentClasseId: '',
  currentAbilities: [],
  morality: '',
  alignement: '',
  dexterityDice: '',
  strenghtDice: '',
  constitutionDice: '',
  intelligenceDice: '',
  wisdomDice: '',
  charismaDice: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // nom choisi par le joueur
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SAVE_CLASSE_CURRENT_ID:
      return {
        ...state,
        currentClasseId: action.id,
      };
    case SET_RACE:
      return {
        ...state,
        currentId: action.name,
      };
      // liste des races
    case FETCH_RACES:
      return {
        ...state,
        raceList: action.list,
      };
    case SAVE_CURRENT_ID:
      return {
        ...state,
        currentId: action.id,
      };
    case FETCH_RACE_CREATOR:
      return {
        ...state,
        currentId: action.id,
      };
    // case SET_CLASSE:
    //   return {
    //     ...state,
    //     currentClasse: action.classe,
    //   };
    case SAVE_CURRENT_RACE_CREATOR:
      return {
        ...state,
        currentRace: action.race,
      };
    case SAVE_SUBRACE_CURRENT_ID:
      return {
        ...state,
        currentSubraceId: action.id,
      };
    case SAVE_CURRENT_SUBRACE:
      return {
        ...state,
        currentSubrace: action.subrace,
      };
    case SAVE_CURRENT_CLASSE_ABILITIES:
      return {
        ...state,
        currentAbilities: action.abilities,
      };
    case SAVE_CURRENT_CLASSE_CREATOR:
      return {
        ...state,
        currentClasse: action.classe,
      };
    case SAVE_BACKGROUND_CREATOR:
      return {
        ...state,
        backgroundList: action.background,
      };
    case SAVE_CURRENT_BACKGROUND_ID:
      return {
        ...state,
        currentBackgroundId: action.id,
      };
    case SAVE_CURRENT_BACKGROUND:
      return {
        ...state,
        currentBackground: action.background,
      };
    case SAVE_MORALITY:
      return {
        ...state,
        morality: action.morality,
      };
    case SAVE_ALIGNEMENT:
      return {
        ...state,
        alignement: action.alignement,
      };
    case SAVE_DEXTERITY_DICE:
      return {
        ...state,
        dexterityDice: action.dice,
      };
    case SAVE_STRENGTH_DICE:
      return {
        ...state,
        strenghtDice: action.dice,
      };
    case SAVE_CONSTITUTION_DICE:
      return {
        ...state,
        constitutionDice: action.dice,
      };
    case SAVE_INTELLIGENCE_DICE:
      return {
        ...state,
        intelligenceDice: action.dice,
      };
    case SAVE_WISDOM_DICE:
      return {
        ...state,
        wisdomDice: action.dice,
      };
    case SAVE_CHARISMA_DICE:
      return {
        ...state,
        charismaDice: action.dice,
      };
    default:
      return state;
  }
}

export default reducer;
