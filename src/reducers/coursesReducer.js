import Immutable from 'immutable';

import initialStoreState from '../store/initialStoreState.js'
import {FILTER_DIFFICULTY} from "../constants/constants.js";

export default function userReducer(state = initialStoreState.courses, action) {
    switch (action.type) {
        case FILTER_DIFFICULTY:
            let filteredCoursesList = [];
            if (action.payload.selectedDifficultyList.length > 0) {
                state.coursesAll.toArray().forEach(course => {
                    if (action.payload.selectedDifficultyList.indexOf(course.meta.difficulty) >= 0) {
                        filteredCoursesList.push(course);
                    }
                });
            } else {
                filteredCoursesList = state.coursesAll.toArray();
            }
            return {
                ...state,
                coursesFiltered: new Immutable.List(filteredCoursesList)
            };
        default:
            return state;
    }
}
