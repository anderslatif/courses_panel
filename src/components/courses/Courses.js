import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as coursesActions from '../../actions/CoursesActions.js';

import CoursesTable from "./course_table/CoursesTable";

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availableCourseDifficulty: [],
            selectedDifficulty: []
        }
    }

    componentDidMount() {
        let availableCourseDifficulty = [];
        this.props.courses.coursesDifficultyAll.toArray().forEach((difficulty, index) => {
            availableCourseDifficulty.push({ value: index, label: difficulty});
        });
        this.setState({availableCourseDifficulty});
    }

    handleDifficultySelection = (selectedOption) => {
        // the parameter selected option is an array that accurately represents what has been selected or deselected
        this.setState({selectedDifficulty: selectedOption});
        // the action takes a list copy as parameter so as to not manipulate the state in the action
        this.props.actions.coursesActions.filterDifficulty(selectedOption.slice());
    };

    render() {
        console.log(this.props.courses.coursesFiltered.toArray().length);
        return (
            <main className="container">
                <div >
                    <p style={{padding: "20px 0 20px 0"}}>Here is a list of available courses.</p>
                    <div className="filtering">
                        <div className="difficulty-dropdown">
                            <Select
                                name="form-field-name"
                                placeholder="Narrow down the difficulty level"
                                value={this.state.selectedDifficulty}
                                multi={true}
                                onChange={this.handleDifficultySelection}
                                options={this.state.availableCourseDifficulty}
                            />
                        </div>
                    </div>
                    <CoursesTable coursesList={this.props.courses.coursesFiltered.toArray()}/>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state) => ({
    courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        coursesActions: bindActionCreators(coursesActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
// the connect method transforms the current Redux store state and imported actions into the props
