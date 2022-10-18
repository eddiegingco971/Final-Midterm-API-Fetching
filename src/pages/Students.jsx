import React from "react";
import { useState, useEffect } from "react";


const Students = () => {
    const [students, setStudents] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(()=> {
            fetch("http://127.0.0.1:8000/students")
            .then((res) => {
                if(!res.ok){
                    throw Error('Failed to fetch');
                }
                return res.json()
            })
            .then((students) => {
                setStudents(students);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
               setIsPending(false);
               setError(err.message);
               setStudents(false);
            })
            }, 1000)
    }, []);

    return ( 
        <div className="students">
            <div className="card bg-light" style={{
                    height:"71vh"
                }}>
                <div className="card-header bg-dark text-light">
                    <div className="card-title">
                        <h3>List of Students</h3>
                    </div>
                </div>
                <div className="card-body bg-light" style={{
                    height:"40vh",
                    overflow:"auto",
                }}>
                <table className="table table-striped" >
                    <thead>
                    <tr className="bg-primary">
                        <th scope="col">Fullname</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Date</th>
                        {/* <th scope="col">Edit</th> */}
                        <th scope="col">VIEW</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students && students.map((students) => {
                        return (
                        <tr key={students.id}>
                            <td>{students.name}</td>
                            <td>{students.department}</td>
                            <td>{students.year_level}</td>
                            <td>
                            <button
                                className="btn btn-sm bg-success m-1 text-white" 
                                onClick={() => 
                                handleSched(students.id)}>
                                Open<i className="fa-solid fa-folder"></i>
                            </button>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                    { error && 
                        <div className="text-danger">
                            <strong>{error}</strong>
                        </div>
                    }
                    { isPending && 
                        <div className="text-success">
                            <strong>Loading....</strong> 
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Students;


// npx json-server --watch data/db.json --port 8000
