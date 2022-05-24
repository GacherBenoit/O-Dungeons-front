// ===================================== LISTE DES ACTIONS CONCERNANT LA PAGE CRÉATION DE PERSONNAGE

// ================================================================
// Sauvegarde du nom du personnage par l'utilisateur dans le state
// ACTION TYPE
export const SET_NAME = 'SET_NAME';

// ACTION CREATOR
export const setName = (name) => ({
  type: SET_NAME,
  name,
});

// // Sauvegarde de
// // ACTION TYPE SET_RACE
// export const SET_RACE = 'SET_RACE';

// // ACTION CREATOR setRace
// export const setRace = (name) => ({
//   type: SET_RACE,
//   name,
// });

// ====================================================================
// Sauvegarde dans le state de l'ID de la race choisie par l'utilisateur
// ACTION TYPE SAVE_CURRENT_ID
export const SAVE_CURRENT_ID = 'SAVE_CURRENT_ID';

// ACTION CREATOR saveCurrentID
export const saveCurrentId = (id) => ({
  type: SAVE_CURRENT_ID,
  id,
});
// =================================

// =================================
// Récupération des races via l'API
// ACTION TYPE FETCH_RACES
export const FETCH_RACES = 'FETCH_RACES';

// ACTION CREATOR fetchRaces
export const fetchRaces = () => ({
  type: FETCH_RACES,
});
// ===================================

// =============================================
// Sauvegarde la race sélectionnée dans le state
// ACTION TYPE SAVE_CURRENT_CLASSE
// export const SAVE_CURRENT_RACE = 'SAVE_CURRENT_RACE';

// // ACTION CREATOR saveCurrentRACE
// export const saveCurrentRace = (currentRace) => ({
//   type: SAVE_CURRENT_RACE,
//   currentRace,
// });
// =============================================

// ====================================================
// Sauvegarde dans le state de l'ID de la classe choisie
// ACTION TYPE SAVE_CLASSE_CURRENT_ID
export const SAVE_CLASSE_CURRENT_ID = 'SAVE_CLASSE_CURRENT_ID';

// ACTION CREATOR saveClasseCurrentId
export const saveClasseCurrentId = (id) => ({
  type: SAVE_CLASSE_CURRENT_ID,
  id,
});
// ======================================================

// =======================================================
// Récupération via l'API d'une race suivant son id
// ACTION TYPE FETCH_RACE_CREATOR
export const FETCH_RACE_CREATOR = 'FETCH_RACE_CREATOR';

// ACTION CREATOR fetchRaceCreator
export const fetchRaceCreator = (id) => ({
  type: FETCH_RACE_CREATOR,
  id,
});
// =======================================================

// =======================================================
// Sauvegarde dans le state de la race choisie avec toutes ses caractéristiques
// ACTION TYPE SAVE_CURRENT_RACE_CREATOR
export const SAVE_CURRENT_RACE_CREATOR = 'SAVE_CURRENT_RACE_CREATOR';

// ACTION CREATOR saveCurrentRaceCreator
export const saveCurrentRaceCreator = (race) => ({
  type: SAVE_CURRENT_RACE_CREATOR,
  race,
});
// =========================================================

// =========================================================
// Sauvegarde dans le state de l'ID de la sous-race sélectionnée
// ACTION TYPE SAVE_SUBRACE_CURRENT_ID
export const SAVE_SUBRACE_CURRENT_ID = 'SAVE_SUBRACE_CURRENT_ID';

// ACTION CREATOR saveSubraceCurrentId
export const saveSubraceCurrentId = (id) => ({
  type: SAVE_SUBRACE_CURRENT_ID,
  id,
});
// ==========================================================

// ==========================================================
// Sauvegarde dans le state la sous-race sélectionnée avec ses caractéristiques
// ACTION TYPE SAVE_CURRENT_SUBRACE
export const SAVE_CURRENT_SUBRACE = 'SAVE_CURRENT_SUBRACE';

// ACTION CREATOR saveCurrentSubrace
export const saveCurrentSubrace = (subrace) => ({
  type: SAVE_CURRENT_SUBRACE,
  subrace,
});
// =========================================================

// =========================================================
// Récupération via l'API des informations de la sous-race sélectionnée
// ACTION TYPE FETCH_SUBRACE_CREATOR
export const FETCH_SUBRACE_CREATOR = 'FETCH_SUBRACE_CREATOR';

// ACTION CREATOR fetchSubraceCreator
export const fetchSubraceCreator = (id) => ({
  type: FETCH_SUBRACE_CREATOR,
  id,
});
// ========================================================

// ========================================================
// Récuopération via l'API des habilités  de la classe sélectionnée
// ACTION TYPE FETCH_CURRENT_CLASSE_ABILITIES
export const FETCH_CURRENT_CLASSE_ABILITIES = 'FETCH_CURRENT_CLASSE_ABILITIES';

// ACTION CREATOR fetchCurrentClasseAbilities
export const fetchCurrentClasseAbilities = (abilities) => ({
  type: FETCH_CURRENT_CLASSE_ABILITIES,
  abilities,
});
// =======================================================

// ========================================================
// Sauvegarde dans le state les habilités de la classe sélectionnée
// ACTION TYPE SAVE_CURRENT_CLASSE_ABILITIES
export const SAVE_CURRENT_CLASSE_ABILITIES = 'SAVE_CURRENT_CLASSE_ABILITIES';

// ACTION CREATOR saveCurrentClasseAbilities
export const saveCurrentClasseAbilities = (abilities) => ({
  type: SAVE_CURRENT_CLASSE_ABILITIES,
  abilities,
});
// ========================================================

// ============================================================
// Récupération via l'API des informations de la classe sélectionnée
// ACTION TYPE FETCH_CURRENT_CLASSE_CREATOR
export const FETCH_CURRENT_CLASSE_CREATOR = 'FETCH_CURRENT_CLASSE_CREATOR';

// ACTION CREATOR fetchCurrentClasseCreator
export const fetchCurrentClasseCreator = (id) => ({
  type: FETCH_CURRENT_CLASSE_CREATOR,
  id,
});
// ==============================================================

// ==============================================================
// Sauvegarde dans le state les infos de la classe sélectionnée
// ACTION TYPE SAVE_CURRENT_CLASSE_CREATOR
export const SAVE_CURRENT_CLASSE_CREATOR = 'SAVE_CURRENT_CLASSE_CREATOR';

// ACTION CREATOR saveCurrentClasseCreator
export const saveCurrentClasseCreator = (classe) => ({
  type: SAVE_CURRENT_CLASSE_CREATOR,
  classe,
});
// ============================================================

// ================================================================
// Récupération via l'APi de la liste des background
// ACTION TYPE FETCH_BACKGROUND_CREATOR
export const FETCH_BACKGROUND_CREATOR = 'FETCH_BACKGROUND_CREATOR';

// ACTION CREATOR fetchBackgroundCreator
export const fetchBackgroundCreator = (id) => ({
  type: FETCH_BACKGROUND_CREATOR,
  id,
});
// ===============================================================

// ==============================================================
// Sauvegarde dans le state la liste des background
// ACTION TYPE SAVE_BACKGROUND_CREATOR
export const SAVE_BACKGROUND_CREATOR = 'SAVE_BACKGROUND_CREATOR';

// ACTION CREATOR saveBackgroundCreator
export const saveBackgroundCreator = (background) => ({
  type: SAVE_BACKGROUND_CREATOR,
  background,
});
// ==============================================================

// =============================================================
// Sauvegarde dans le state l'ID du background sélectionné
// ACTION TYPE SAVE_CURRENT_BACKGROUND_ID
export const SAVE_CURRENT_BACKGROUND_ID = 'SAVE_CURRENT_BACKGROUND_ID';

// ACTION CREATOR saveCurrentBackgroundId
export const saveCurrentBackgroundId = (id) => ({
  type: SAVE_CURRENT_BACKGROUND_ID,
  id,
});
// =============================================================

// =============================================================
// Récupération via l'API des info du background sélectionné
// ACTION TYPE FETCH_CURRENT_BACKGROUND_CREATOR
export const FETCH_CURRENT_BACKGROUND_CREATOR = 'FETCH_CURRENT_BACKGROUND_CREATOR';

// ACTION CREATOR fetchCurrentBackgroundCreator
export const fetchCurrentBackgroundCreator = (id) => ({
  type: FETCH_CURRENT_BACKGROUND_CREATOR,
  id,
});
// ============================================================

// ===========================================================
// Sauvegarde dans le state le background sélectionné
// ACTION TYPE SAVE_CCURRENT_BACKGROUND_CREATOR
export const SAVE_CURRENT_BACKGROUND = 'SAVE_CURRENT_BACKGROUND';

// ACTION CREATOR saveCurrentbackground
export const saveCurrentBackground = (background) => ({
  type: SAVE_CURRENT_BACKGROUND,
  background,
});
// =========================================================

// =========================================================
// Sauvegarde dans le state l' ID de la première compétence
// ACTION TYPE SAVE_CURRENT_FIRST_ABILITIES
export const SAVE_CURRENT_FIRST_ABILITIES_ID = 'SAVE_CURRENT_FIRST_ABILITIES_ID';

// ACTION CREATOR saveCurrentFirstAbilitiesId
export const saveCurrentFirstAbilitiesId = (id) => ({
  type: SAVE_CURRENT_FIRST_ABILITIES_ID,
  id,
});
// =======================================================

// =======================================================
// Sauvegarde dans le state l' ID de la seconde compétence
// ACTION TYPE SAVE_CURRENT_SECOND_ABILITIES_ID
export const SAVE_CURRENT_SECOND_ABILITIES_ID = 'SAVE_CURRENT_SECOND_ABILITIES_ID';

// ACTION CREATOR saveCurrentSecondAbilitiesId
export const saveCurrentSecondAbilitiesId = (id) => ({
  type: SAVE_CURRENT_SECOND_ABILITIES_ID,
  id,
});
// =========================================================

// =========================================================
// Sauvegarde dans le state l' ID de la troisième compétence
// ACTION TYPE SAVE_CURRENT_THIRD_ABILITIES_ID
export const SAVE_CURRENT_THIRD_ABILITIES_ID = 'SAVE_CURRENT_THIRD_ABILITIES_ID';

// ACTION CREATOR saveCurrentThirdAbilitiesId
export const saveCurrentThirdAbilitiesId = (id) => ({
  type: SAVE_CURRENT_THIRD_ABILITIES_ID,
  id,
});
// ========================================================

// ========================================================
// Sauvegarde dans le state l' ID de la quatrième compétence
// ACTION TYPE SAVE_CURRENT_FOURTH_ABILITIES_ID
export const SAVE_CURRENT_FOURTH_ABILITIES_ID = 'SAVE_CURRENT_FOURTH_ABILITIES_ID';

// ACTION CREATOR saveCurrentFourthAbilitiesId
export const saveCurrentFourthAbilitiesId = (id) => ({
  type: SAVE_CURRENT_FOURTH_ABILITIES_ID,
  id,
});
// =========================================================
// Récupération via l'API des infos de la première compétence choisie
// ACTION TYPE FETCH_FIRST_ABILITIES_SPECS
export const FETCH_FIRST_ABILITIES_SPECS = 'FETCH_FIRST_ABILITIES_SPECS';

// ACTION CREATOR fetchFirstAbilitiesSpecs
export const fetchFirstAbilitiesSpecs = () => ({
  type: FETCH_FIRST_ABILITIES_SPECS,
});
// ============================================================

// ==========================================================
// Récupération via l'API des infos de la seconde compétence choisie
// ACTION TYPE FETCH_SECOND_ABILITIES_SPECS
export const FETCH_SECOND_ABILITIES_SPECS = 'FETCH_SECOND_ABILITIES_SPECS';

// ACTION CREATOR fetcheSecondAbilitiesSpecs
export const fetchSecondAbilitiesSpecs = () => ({
  type: FETCH_SECOND_ABILITIES_SPECS,
});
// ===========================================================

// ===========================================================
// Récupération via l'API des infos de la troisième compétence choisie
// ACTION TYPE FETCH_THIRD_ABILITIES_SPECS
export const FETCH_THIRD_ABILITIES_SPECS = 'FETCH_THIRD_ABILITIES_SPECS';

// ACTION CREATOR fetchThirdAbilitiesSpecs
export const fetchThirdAbilitiesSpecs = () => ({
  type: FETCH_THIRD_ABILITIES_SPECS,
});
// ========================================================

// ========================================================
// Récupération via l'API des infos de la quatrième compétence choisie
// ACTION TYPE FETCH_FOURTH_ABILITIES_SPECS
export const FETCH_FOURTH_ABILITIES_SPECS = 'FETCH_FOURTH_ABILITIES_SPECS';

// ACTION CREATOR fetchFourthAbilitiesSpecs
export const fetchFourthAbilitiesSpecs = () => ({
  type: FETCH_FOURTH_ABILITIES_SPECS,
});
// =======================================================
// Sauvegarde dans le state des infos de la première compétence choisie
// ACTION TYPE SAVE_CURRENT_FIRST_ABILITIES_SPECS
export const SAVE_CURRENT_FIRST_ABILITIES_SPECS = 'SAVE_CURRENT_FIRST_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentFirstAbilitiesSpecs
export const saveCurrentFirstAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_FIRST_ABILITIES_SPECS,
  abilitie,
});
// ======================================================

// =======================================================
// Sauvegarde dans le state des infos de la seconde compétence choisie
// ACTION TYPE SAVE_CURRENT_SECOND_ABILITIES_SPECS
export const SAVE_CURRENT_SECOND_ABILITIES_SPECS = 'SAVE_CURRENT_SECOND_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentSecondAbilitiesSpecs
export const saveCurrentSecondAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_SECOND_ABILITIES_SPECS,
  abilitie,
});
// ======================================================

// ======================================================
// Sauvegarde dans le state des infos de la troisième compétence choisie
// ACTION TYPE SAVE_CURRENT_THIRD_ABILITIES_SPECS
export const SAVE_CURRENT_THIRD_ABILITIES_SPECS = 'SAVE_CURRENT_THIRD_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentThirdAbilitiesSpecs
export const saveCurrentThirdAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_THIRD_ABILITIES_SPECS,
  abilitie,
});
// ==================================================

// ===================================================
// Sauvegarde dans le state des infos de la quatrième compétence choisie
// ACTION TYPE SAVE_CURRENT_FOURTH_ABILITIES_SPECS
export const SAVE_CURRENT_FOURTH_ABILITIES_SPECS = 'SAVE_CURRENT_FOURTH_ABILITIES_SPECS';

// ACTION CREATOR saveCurrentFourthAbilitiesSpecs
export const saveCurrentFourthAbilitiesSpecs = (abilitie) => ({
  type: SAVE_CURRENT_FOURTH_ABILITIES_SPECS,
  abilitie,
});
// ==================================================

// ==================================================
// Sauvegarde dans le state de la moralité choisie par le user
// ACTION TYPE SAVE_MORALITY
export const SAVE_MORALITY = 'SAVE_MORALITY';

// ACTION CREATOR saveMorality
export const saveMorality = (morality) => ({
  type: SAVE_MORALITY,
  morality,
});
// =====================================================

// =====================================================
// Sauvegarde dans le state de l'alignement choisi par le user
// ACTION TYPE SAVE_ALIGNEMENT
export const SAVE_ALIGNEMENT = 'SAVE_ALIGNEMENT';

// ACTION CREATOR saveAlignement
export const saveAlignement = (alignement) => ({
  type: SAVE_ALIGNEMENT,
  alignement,

});
// =====================================================

// ====================================================
// Sauvegarde dans le state de la valeur du dé de dextérité
// ACTION TYPE SAVE_DEXTERITY_DICE
export const SAVE_DEXTERITY_DICE = 'SAVE_DEXTERITY_DICE';

// ACTION CREATOR saveDexterityDice
export const saveDexterityDice = (dice) => ({
  type: SAVE_DEXTERITY_DICE,
  dice,
});
// ===================================================

// ===================================================
// Sauvegarde dans le state de la valeur du dé de force
// ACTION TYPE SAVE_STRENGTH_DICE
export const SAVE_STRENGTH_DICE = 'SAVE_STRENGTH_DICE';

// ACTION CREATOR saveStrengthDice
export const saveStrengthDice = (dice) => ({
  type: SAVE_STRENGTH_DICE,
  dice,
});
// ===================================================

// ====================================================
// Sauvegarde dans le state de la valeur du dé de constitution
// ACTION TYPE SAVE_CONSTITUTION_DICE
export const SAVE_CONSTITUTION_DICE = 'SAVE_CONSTITUTION_DICE';

// ACTION CREATOR saveConstitutionDice
export const saveConstitutionDice = (dice) => ({
  type: SAVE_CONSTITUTION_DICE,
  dice,
});
// =====================================================

// =====================================================
// Sauvegarde dans le state de la valeur du dé d'intelligence
// ACTION TYPE SAVE_INTELLIGENCE_DICE
export const SAVE_INTELLIGENCE_DICE = 'SAVE_INTELLIGENCE_DICE';

// ACTION CREATOR saveIntelligenceDice
export const saveIntelligenceDice = (dice) => ({
  type: SAVE_INTELLIGENCE_DICE,
  dice,
});
// =====================================================

// =====================================================
// Sauvegarde dans le state de la valeur du dé de volonté
// ACTION TYPE SAVE_WISDOM_DICE
export const SAVE_WISDOM_DICE = 'SAVE_WISDOM_DICE';

// ACTION CREATOR saveWisdomDice
export const saveWisdomDice = (dice) => ({
  type: SAVE_WISDOM_DICE,
  dice,
});
// ======================================================

// ======================================================
// Sauvegarde dans le state de la valeur du dé de charisme
// ACTION TYPE SAVE_CHARISMA_DICE
export const SAVE_CHARISMA_DICE = 'SAVE_CHARISMA_DICE';

// ACTION CREATOR saveCharismaDice
export const saveCharismaDice = (dice) => ({
  type: SAVE_CHARISMA_DICE,
  dice,
});
