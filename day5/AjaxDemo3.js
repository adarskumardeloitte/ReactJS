import { useState } from "react";
import { dataServiceObj } from "./services/data.service";

function AjaxDemo3() {
    const [empsArray, setEmpsArray] = useState([]);
 
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("")
 
    function getEmployeesButton_click() {
 
        dataServiceObj.getAllEmployees().then((resData) => {
            setEmpsArray(resData.data);
        });
    }
 
 
    function addEmployeeButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
 
        dataServiceObj.addEmployee(empObj).then((resData) => {
            alert("New Employee added to Server");
            getEmployeesButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }
 
 
    function deleteEmployee_click(eno) {
        dataServiceObj.deleteEmployee(eno).then((resData) => {
            alert("Employee details are deleted from Server");
            getEmployeesButton_click(); // get the latest data from server            
        });
 
    }
 
    function selectEmployee_click(eno) {
 
        dataServiceObj.getEmployeeById(eno).then((resData) => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno)
        });
    }
 
    function updateEmployeeButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
 
        dataServiceObj.updateEmployee(empObj).then((resData) => {
            alert("Employee details are updated in Server");
            getEmployeesButton_click(); // get the latest data from server
            clearFields();
        });
    }
 
    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectEmployee_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmployee_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });
 
 
    return (<>
 
        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />
 
        <input type="text" placeholder="Employee No" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Employee Name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Department No" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <hr />
 
        <input type="button" style = {{margin : 5, backgroundColor: "aquamarine", }} onClick={getEmployeesButton_click} value="Get Employees" /> 
        <input type="button" style = {{margin : 5, backgroundColor: "aquamarine"}} onClick={addEmployeeButton_click} value="Add Employee" />
        <input type="button" style = {{margin : 5, backgroundColor: "aquamarine"}}  onClick={updateEmployeeButton_click} value="Update Employee" />
        <hr />
 
        <table border="2" width="500" cellspacing="0" cellpadding="5" style={{marginLeft: 'auto', marginRight: 'auto'}} >
            <tr>
                <th>Employee No</th>
                <th>Employee Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Department No</th>
                <th></th>
            </tr>
            {resultArray}
        </table>
 
    </>);
}
export default AjaxDemo3;