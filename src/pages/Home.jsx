import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
   
       return(
        <div className="home">
            <div className="container">
                <h1>Home</h1>
            </div>
        </div>
       );   
}
 
export default Home;


// npx json-server --watch data/db.json --port 8000