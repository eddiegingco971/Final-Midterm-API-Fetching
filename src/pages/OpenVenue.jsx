import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const OpenVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setTimeout(()=> {
      fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => {
        if(!res.ok){
          throw Error('Failed to fetch');
        }
        return res.json()
      })
      .then((data) => {
        const { venue } = data;
        setVenue(venue);
        setSchedule(data.schedules);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
        setSchedule(false);
      })
    }, 1000)
  }, []);

  return (
    <div className="openvenue">
        
    <div className="card bg-light" style={{
                    height:"71vh"
                }}>
        <div className="card-header bg-dark">
          <h3 className="text-center m-1 text-light">
            {schedule ? "S C H E D U L E": "No Schedule Found In This Building"}
            <div className="mt-3 text-success">{venue.building}</div>
          </h3>
        </div>
        <div className="card-body" style={{
                    height:"41vh",
                    overflow:"auto",
                }}>
          <table className="table table-striped">
            <thead className="bg-primary">
              <tr>
              <th scope="col">ID</th>
                <th scope="col">Course No.</th>
                <th scope="col">Description</th>
                <th scope="col">Teacher</th>
                <th scope="col">Size</th>
                <th scope="col">Schedule</th>
              </tr>
            </thead>
          
            <tbody>
            {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                     <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].teacher}</td>
                    <td>{schedule[sched].size}</td>
                    <td>{schedule[sched].schedule}</td>
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
          <div className="card-footer">
          <Link to="/venues" className="btn btn-danger">
            Back
          </Link>
          </div>
        </div>
      
    </div>
  );
};

export default OpenVenue;