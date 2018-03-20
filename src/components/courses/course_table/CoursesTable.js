import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Modal from 'react-responsive-modal';

import Course from '../course_view/Course.js';

export default class CoursesTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCourseModalOpen: false,
            modalCourse: {}
        }
    }



    instructorFormatter(cell, row){
        return cell.map(instructor => instructor.name).join(", ");
    }

    ratingsFormatter(cell, row){
        let roundedDownFullStars = Math.floor(cell.rating);
        let remaining = cell.rating - roundedDownFullStars;
        let cellContent = '<i class="glyphicon glyphicon-star"></i>'.repeat(roundedDownFullStars);
        if (remaining > 0) {
            // todo improve on this by creating a star component and put the styling directly on it (requires no :after pseudo selector then): easy fix
            // todo I've judged it to be outside of the scope of a MVP, therefor the hacky solution with the ugly white box
            let remainingRoundedToQuarter = (Math.round(remaining * 4) / 4).toFixed(2);
            let additionalClassProperty = "";
            if (remainingRoundedToQuarter === "0.25") {
                additionalClassProperty = "star-quarter"
            } else if (remainingRoundedToQuarter === "0.50") {
                additionalClassProperty = "star-half"
            }  else if (remainingRoundedToQuarter === "0.75") {
                additionalClassProperty = "star-three-quarters"
            }
            cellContent += '<i class="glyphicon glyphicon-star ' + additionalClassProperty +' "></i>';
        }
        return cellContent;
    }

    onRowClicked = (row) => {
        console.log(row);
        this.setState({
                        isCourseModalOpen: true,
                        modalCourse: row
                    });
    };

    onCloseModal = () => {
        this.setState({isCourseModalOpen: false});
    };


    render() {

        let options = {
            onRowClick: this.onRowClicked
        };

        return (
            <div>
                <BootstrapTable data={this.props.coursesList} striped={true} hover={true} options={options}>
                    <TableHeaderColumn dataField="title" isKey={true} dataSort={true} tdStyle={{whiteSpace: 'normal'}}>Course Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="difficulty" dataSort={true}>Difficulty Level</TableHeaderColumn>
                    <TableHeaderColumn dataField="priceTag" dataSort={true}>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="instructors" dataSort={false} dataFormat={this.instructorFormatter}>Instructors</TableHeaderColumn>
                    <TableHeaderColumn dataField="meta" dataSort={false} dataFormat={this.ratingsFormatter}>Ratings</TableHeaderColumn>
                </BootstrapTable>
                <Modal open={this.state.isCourseModalOpen} onClose={this.onCloseModal}>
                    <Course course={this.state.modalCourse}/>
                </Modal>
            </div>
        )
    }

}