import axios from 'axios';

const employee_api_base_url = "http://localhost:8080/api/v1/employees";
class EmployeeService {

    getEmployees(){

        return axios.get(employee_api_base_url);

    }
    createEmployees(employee){
        return axios.post(employee_api_base_url,employee);

    }
    getEmployeeById(employeeId){
        return axios.get(employee_api_base_url + '/' + employeeId);
    }


    updateEmployee(employee, employeeId){
        return axios.put(employee_api_base_url + '/' + employeeId, employee);
    }

    deleteEmployee(empId){
        return axios.delete(employee_api_base_url+ '/'+empId);
    }

}
export default new EmployeeService();