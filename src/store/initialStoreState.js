import Immutable from 'immutable';
import coursesListProd from './data/courses.json';
//import courseListPublic from './data/courses_dummy_data.json';

// since table does not support nested properties flattening is usually changed on API or component level.. put here as a convenience thing
let courses = coursesListProd.map(course => {
    course.priceTag = course.price.regular + " " + course.price.currency;
    course.difficulty = course.meta.difficulty;
    return course;
});

// This is the initial client-side state of the entire store. (May be merged with server-side state __REDUX_STATE__ in index.js)
const initialStoreState = {
    courses: {
        coursesAll: new Immutable.List(courses),
        coursesFiltered: new Immutable.List(coursesListProd),
        coursesDifficultyAll: new Immutable.List(["Beginner", "Intermediate", "Expert"]),
        filtering: {
            searchText: "",
            difficultySelected: new Immutable.List([])
        }
    }
};

export default initialStoreState;