import {FILTER_DIFFICULTY, FILTER_TITLE} from "../constants/constants.js";


export function filterTitle(searchText) {

    return {
        type: FILTER_TITLE,
        payload: {searchText: searchText}
    }
}

export function filterDifficulty(selectedDifficultyList) {

    let difficultyStringList = selectedDifficultyList.map(difficulty => difficulty.label);

    return {
        type: FILTER_DIFFICULTY,
        payload: {selectedDifficultyList: difficultyStringList}
    }
}
