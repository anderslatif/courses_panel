import {FILTER_DIFFICULTY} from "../constants/constants.js";

export function filterDifficulty(selectedDifficultyList) {

    let difficultyStringList = selectedDifficultyList.map(difficulty => difficulty.label);

    return {
        type: FILTER_DIFFICULTY,
        payload: {selectedDifficultyList: difficultyStringList}
    }
}