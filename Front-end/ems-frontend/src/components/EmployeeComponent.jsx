import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState("")
    const [department,setDepartment] = useState('')
    const [salary,setSalary] = useState('')

    const {id} = useParams();
    const [error,setError]=useState({
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        department:'',
        salary:''
    })
    const navigator=useNavigate();

    useEffect(() =>{
        if(id){
            getEmployee(id).then((Response) =>{
                setFirstName(Response.data.firstName ?? "");
                setLastName(Response.data.lastName ?? "");
                setEmail(Response.data.email ?? "");
                setPhone(String(Response.data.phone ?? ""));
                setDepartment(Response.data.department ?? "");
                setSalary(String(Response.data.salary ?? ""));


            }).catch(error =>{
                console.error(error);
            })
        }
    },[id])

    function handleFirstName(e){
        setFirstName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleemail(e){
        setEmail(e.target.value);
    }
    function handlePhone(e){
        setPhone(e.target.value);
    }
    function handleDepartment(e){
        setDepartment(e.target.value);
    }
    function handleSalary(e){
        setSalary(e.target.value);
    }


    function saveorupdateEmployee(e){
        e.preventDefault();

          if(validateform()){
            const employee={firstName,lastName,email,phone: Number(phone),department,salary: Number(salary)}
            console.log(employee)
            if(id){
                updateEmployee(id,employee).then((Response)=>{
                    console.log(Response.data);
                    navigator('/employees');
                }).catch(error =>{
                    console.error(error);
                })
            } else{
                  createEmployee(employee).then((Response) => {
                    console.log(Response.data);
                    navigator('/employees')
                    }).catch(error =>{
                    console.error(error);
                })
                 }
          }
        
    }

    function validateform(){
        let valid=true;
         const errorCopy={... error}
         if(firstName.trim()){
            errorCopy.firstName='';
         }
         else{
            errorCopy.firstName='First Name is Required';
            valid =false;
         }

         if(lastName.trim()){
            errorCopy.lastName='';
         }
         else{
            errorCopy.lastName='Last Name is Required';
            valid =false;
         }
         if(email.trim()){
            errorCopy.email='';
         }
         else{
            errorCopy.email='Email is Required';
            valid =false;
         }
         if(phone.trim()){
            errorCopy.phone='';
         }
         else{
            errorCopy.phone='Phone Number is Required';
            valid =false;
         }
         if(department.trim()){
            errorCopy.department='';
         }
         else{
            errorCopy.department='Department is Required';
            valid =false;
         }
         if (salary !== "")
        {
            errorCopy.salary='';
         }
         else{
            errorCopy.salary='Salary is Required';
            valid =false;
         }
         setError(errorCopy);
         return valid;

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        } 
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input className={`form-control ${error.firstName ? 'is-invalid':''}`} type="text" placeholder='Enter Employee First Name' name='firstName' value={firstName || ""} onChange={handleFirstName}></input>
                            {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                        </div>
                         <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input className={`form-control ${error.lastName ? 'is-invalid':''}`} type="text" placeholder='Enter Employee Last Name' name='lastName' value={lastName || ""} onChange={handleLastName}></input>
                            {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                        </div>
                         <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input className={`form-control ${error.email ? 'is-invalid':''}`} type="email" placeholder='Enter Employee Email' name='email' value={email || ""} onChange={handleemail}></input>
                            {error.email && <div className='invalid-feedback'>{error.email}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Phone:</label>
                            <input className={`form-control ${error.phone ? 'is-invalid':''}`} type="text" placeholder='Enter Employee Phone Number' name='phone' value={phone || ""} onChange={handlePhone}></input>
                            {error.phone && <div className='invalid-feedback'>{error.phone}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Department:</label>
                            <input className={`form-control ${error.department ? 'is-invalid':''}`} type="text" placeholder='Enter Employee Department' name='department' value={department || ""} onChange={handleDepartment}></input>
                            {error.department && <div className='invalid-feedback'>{error.department}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Salary:</label>
                            <input className={`form-control ${error.salary ? 'is-invalid':''}`} type="number" placeholder='Enter Employee Salary' name='salary' value={salary || ""} onChange={handleSalary}></input>
                            {error.salary && <div className='invalid-feedback'>{error.salary}</div>}
                        </div> 
                        <button className='btn btn-success' onClick={saveorupdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default EmployeeComponent