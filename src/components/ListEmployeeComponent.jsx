import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee(this);
    }

    delEmp(id){
        console.log("here"+id);
        EmployeeService.deleteEmployee(id).then( res => {
                this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
             });
    }
    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }
    deleteEmployee(id){
        
        console.log("coming here"+id);

        // 
    }
    componentDidMount() {
        EmployeeService.getEmployees().then(
            res => {
                console.log(res.data);
                this.setState({
                    employees: res.data
                })
            }
        );
    }
    addEmployee() {
        this.props.history.push('add-employee');
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Employee Lists</h2>
                <div className="row col-sm" >
                    <div class="col-sm">
                        <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>

                    </div>
                </div>
                <br />
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
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                <button onClick={() => this.delEmp(employee.id)} className="btn btn-danger" style={{marginLeft: "10px"}} >Del </button>
                                                {/* <button onClick={ this.deleteEmployee(employee.id) } className="btn btn-danger">Delete </button> */}

                                            </td>

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