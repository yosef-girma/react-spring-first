import axios from 'axios';

const employee_api_base_url = "http://localhost:8080/api/v1/employees";
class EmployeeService {

    getEmployees(){
        
        return axios.get(employee_api_base_url);

    }
}
export default new EmployeeService();