import React, {useEffect,useState} from 'react';
import axios from "axios"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/Navbar';
import AllPerson from './components/AllPerson';
import PersonInfo from './components/PersonInfo';

function App() {
  const [data, setData] = useState([]) ;

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
        .then(function (response) {
            setData(response.data.results)
            localStorage.setItem("firstData",JSON.stringify(response.data.results[0])) // initially we have to show first item.....later we can click on card and using hooks data will change

        })
        .catch(function (error) {
            console.log(error);
        })

    },[])


  return (
    <div className='mainDiv'>
      <Navbar/>
      {data[0] && <PersonInfo personData={data[0]} /> }
      <AllPerson data={data} />
    </div>
  );
}

export default App;
