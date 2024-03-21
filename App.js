import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import StateDemo from './StateDemo';
import Login from './Login';
import DeptArrayCrud from './DeptArrayCrud';
import ShoppingCart from './shoppingCart';
import AjaxDemo from './AjaxDemo';
import AjaxDemo2 from './AjaxDemo2';
import AjaxDemo3 from './AjaxDemo3';
import bankStore from './BankStore';
import BankApp from './components/BankApp';





function App() {

  const images = ["image1.jpg", "image2.jpg"];

  const employees = [

    {Id:101,Name:'Adarsh',Location:'Bangalore',Salary:12345},
  
    {Id:102,Name:'Aditya',Location:'Hyderabad',Salary:23456},

    {Id:103,Name:'Pranay',Location:'Gurgaon',Salary:45456},
  
    {Id:103,Name:'Ajay',Location:'Delhi',Salary:34567}
  
  ];

  let  file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";

  let file2  = "Image4.jpg";

  

  return (
    <>

    
    
    <img src='./Image2.jpg'></img>


    {/* 
       <h1>Assignment 1 </ h1>
      <h1>Employee Data</h1>

      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.Id}</td>
              <td>{employee.Name}</td>
              <td>{employee.Location}</td>
              <td>{employee.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      
      <h1>Assignment 2</h1>
      <h3>Working with Images React JS</h3>
        <hr/>

        <img  width="100"  src="https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg" />
        <br/>
        <img  width="100"  src={file1} />
        <hr/>

        <img  width="100"   src="./Images/Image1.jpg" />

        <hr />


        <img  width="100"  height="100"  src="./Images/Image2.jpg" />
        <hr/>

        <img  width="100"   src={ "./Images/" + file2} />
        <hr/>

        <br />
        <br />
        <h1>Assignment 3</h1>
        <UserList />

        <br />
        <h1>Assignment 4</h1>
        
        
        {
        images.map((image)=>{
          return <>
           <img width={400} height={200} src={'./Images/'+image} />
           <br />
          </>
        })
      }

      <br />
      <br />

      <StateDemo />
      
      <br />
      <br />  */}
    </>
  );
}

export default App;
