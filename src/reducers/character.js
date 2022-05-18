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
  SAVE_CURRENT_FIRST_ABILITIES_ID,
  SAVE_CURRENT_SECOND_ABILITIES_ID,
  SAVE_CURRENT_THIRD_ABILITIES_ID,
  SAVE_CURRENT_FOURTH_ABILITIES_ID,
  SAVE_CURRENT_FIRST_ABILITIES_SPECS,
  SAVE_CURRENT_SECOND_ABILITIES_SPECS,
  SAVE_CURRENT_THIRD_ABILITIES_SPECS,
  SAVE_CURRENT_FOURTH_ABILITIES_SPECS,
} from '../actions/character';

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
  firstCurrentAbilitiesId: '',
  secondCurrentAbilitiesId: '',
  thirdCurrentAbilitiesId: '',
  fourthCurrentAbilitiesId: '',
  firstCurrentAbilitiesSpecs: '',
  secondCurrentAbilitiesSpecs: '',
  thirdCurrentAbilitiesSpecs: '',
  fourthCurrentAbilitiesSpecs: '',
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
    case SAVE_CURRENT_FIRST_ABILITIES_ID:
      return {
        ...state,
        firstCurrentAbilitiesId: action.id,
      };
    case SAVE_CURRENT_SECOND_ABILITIES_ID:
      return {
        ...state,
        secondCurrentAbilitiesId: action.id,
      };
    case SAVE_CURRENT_THIRD_ABILITIES_ID:
      return {
        ...state,
        thirdCurrentAbilitiesId: action.id,
      };
    case SAVE_CURRENT_FOURTH_ABILITIES_ID:
      return {
        ...state,
        fourthCurrentAbilitiesId: action.id,
      };
    case SAVE_CURRENT_FIRST_ABILITIES_SPECS:
      return {
        ...state,
        firstCurrentAbilitiesSpecs: action.abilitie,
      };
    case SAVE_CURRENT_SECOND_ABILITIES_SPECS:
      return {
        ...state,
        secondCurrentAbilitiesSpecs: action.abilitie,
      };
    case SAVE_CURRENT_THIRD_ABILITIES_SPECS:
      return {
        ...state,
        thirdCurrentAbilitiesSpecs: action.abilitie,
      };
    case SAVE_CURRENT_FOURTH_ABILITIES_SPECS:
      return {
        ...state,
        fourthCurrentAbilitiesSpecs: action.abilitie,
      };
    default:
      return state;
  }
}

export default reducer;
