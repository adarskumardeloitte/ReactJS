import axios from 'axios';
 
export let dataServiceObj =
{
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};
 
 
 
let url = "http://localhost:3500/Emp/";
 
function getAllEmployees()
{
    return axios.get(url);
}
 
 
function addEmployee(empObj)
{
    return axios.post(url, empObj);
}
 
function deleteEmployee(eno)
{
    return axios.delete(url + eno);
}
 
 
function getEmployeeById(eno)
{
    return axios.get(url + eno);
}
 
function updateEmployee(empObj)
{
    return axios.put(url + empObj.empno, empObj);
}