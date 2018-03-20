import Immutable from 'immutable';

import initialStoreState from '../store/initialStoreState.js'
import {FILTER_DIFFICULTY, FILTER_TITLE} from "../constants/constants.js";

export default function coursesReducer(state = initialStoreState.courses, action) {
    switch (action.type) {
        case FILTER_TITLE:
            let filteredCoursesListTitle = filterCourses(state.coursesAll.toArray(), action.payload.searchText, state.filtering.difficultySelected.toArray());
            return {
                ...state,
                coursesFiltered: new Immutable.List(filteredCoursesListTitle),
                filtering: {
                    ...state.filtering,
                    searchText: action.payload.searchText
                }
            };
        case FILTER_DIFFICULTY:
            let filteredCoursesListDifficulty = filterCourses(state.coursesAll.toArray(), state.filtering.searchText, action.payload.selectedDifficultyList);
            return {
                ...state,
                coursesFiltered: new Immutable.List(filteredCoursesListDifficulty),
                filtering: {
                    ...state.filtering,
                    difficultySelected: new Immutable.List(action.payload.selectedDifficultyList)
                }
            };
        default:
            return state;
    }
}

function filterCourses(coursesAll, searchText, selectedDifficultyList) {

    let filteredCoursesList = coursesAll;

    if (searchText.length > 0) {
        filteredCoursesList = filteredCoursesList.filter(course => course.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    }

    if (selectedDifficultyList.length > 0) {
        filteredCoursesList = filteredCoursesList.filter(course => selectedDifficultyList.indexOf(course.meta.difficulty) >= 0);
    }

    return filteredCoursesList;
}
