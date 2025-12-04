import React, {useEffect,useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { Navigate, useNavigate } from 'react-router-dom'
import SearchComponent from './SearchComponent'

const ListEmployeeComponent = () => {

   const [employees,setEmployees]= useState([])
   const [search,setSearch]=useState("");
   const navigator = useNavigate();

   const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [totalPages, setTotalPages] = useState(0);


   useEffect(() =>{
    getAllEmployees();
   }, [page])

   function getAllEmployees(){
    listEmployees(page, size)
    .then((response) => {
      setEmployees(response.data.content);
      setTotalPages(response.data.totalPages);
    })
    .catch(error => console.error(error));
}


   function addNewEmployee(){
    navigator('/add-employee')
   }

   function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
   }
    
   function removeEmployee(id){
    alert('Are you sure you want to delete ?')
    console.log(id);

    deleteEmployee(id).then((response) =>{
        getAllEmployees();
    }).catch(error =>{
        console.error(error);
    })
   }

    const filteredEmployees = (employees || []).filter((employee) => {
    const searchText = search.trim().toLowerCase();
    if (!searchText) return true; 
    return (
      (employee.firstName || '').toLowerCase().includes(searchText) ||
      (employee.lastName || '').toLowerCase().includes(searchText) ||
      (employee.email || '').toLowerCase().includes(searchText)
    );
  });


  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <button className='btn btn-info mb-2' onClick={addNewEmployee}>Add Employee</button>
        <SearchComponent search={search} setSearch={setSearch}/>
        <table className='table table-dark table-hover'>

            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Salary</th>  
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployees.length === 0 ? (
                <tr>
                    <td colSpan="8" className="text-center text-danger">
                        No records found
                    </td>
                </tr>
                    ):(
                    filteredEmployees.map(employee =>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td> 
                            <td>
                                <button className='btn btn-primary ' onClick={() =>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() =>removeEmployee(employee.id)} style={{marginLeft: '10px'}}> Delete</button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center mt-3">

            <button className="btn btn-secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>Previous </button>
            <span className="fw-bold">Page {page + 1} of {totalPages} </span>
            <button className="btn btn-secondary" disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)}> Next </button>

        </div>

    </div>
  )
}

export default ListEmployeeComponent