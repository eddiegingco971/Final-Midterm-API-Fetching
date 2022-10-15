import React from 'react'

const Home = () => {
   
       return(
        <div className="home">
            <div className="col-md-8 offset-md-2">
                <div className="card bg-light" style={{
                    height:"71vh"
                }}>
                    <div className="card-header">
                    <h1>Home</h1>
                    </div>
                </div>
            </div>
        </div>
       );   
}
 
export default Home;


// npx json-server --watch data/db.json --port 8000