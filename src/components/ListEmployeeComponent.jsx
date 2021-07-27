import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployees().then(
            res => {
                console.log(res.data);
                this.setState({
                employees: res.data
            })}
        );
    }
    addEmployee(){
        this.props.history.push('add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Employee Lists</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                <div className="row">
                    <table class="table table-striped  table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.email}</td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;