import React, { Component } from 'react';


export default class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <div>
                <h2>{this.props.course.title}</h2>
                <img src={this.props.course.poster.url} alt="course poster"/>
                <div className="additional-course-info" style={{padding: "10px 0 0 0"}}>
                    <p>Additional course info.</p>
                    <p>Students: {this.props.course.meta.students}</p>
                    <p>Categories: {this.props.course.categories.join(", ")}</p>
                </div>
            </div>
        )
    }

}