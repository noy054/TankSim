import './App.css';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import TankContainer from './TankContainer/TankContainer';
import { useState } from 'react';
import '../logo.svg'
import LoginForm from './Loginform/LoginForm';
import axios from 'axios';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'*/



function App() {

  
const [angleTurret, setAngleTurret] = useState(0)
const [angleLazer, setAngleLazer] = useState(0)
const [anglerad, setAnglerad] = useState(0)
/*const instance = axios.create();*/

const [selectedButton, setSelectedButton] = useState('turret')

const handlerotate=(newAngle)=>{
 switch (selectedButton) {
   case 'turret':
     setAngleTurret(newAngle)
     break;
   case 'lazer':
     setAngleLazer(newAngle)
      break;
   case 'lezerr':
     setAnglerad(newAngle)
     break;
 }
}

const handleChangeButton=(buttonName)=>{  
  switch (buttonName) {
    case 'turret':
      setSelectedButton('turret')
      break;
    case 'lazer':
      setSelectedButton('lazer')
      break;
    case 'lezerr':
      setSelectedButton('lezerr')
      break;  
  }
}
 const adaminUser = {
   email: "noy@noy.com",
   password: "noy123",
   name: "noy"
 }
 
 const [user, setUser] = useState ({name: "", email: "" })
 const [error, setError]=useState("")

 const Login = details=> {
   console.log(details);

   if(details.email == adaminUser.email && details.name == adaminUser.name )/*details.password == adaminUser.password*/{
   console.log("logged in!!");
   setUser({
      name: details.name,
      email: details.email
  });
   }
   else {
     console.log("detalis do not match!")
     setError("detalis do not match!")
 
   }
 } 

 const Logout =()=>{
   setUser({name: "", email: "" })
   console.log("logout");
 }
 /*const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})*/

/* const courses = () => {
  axios.get("https://localhost:5000")
  .then(response => {
      console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
 }*/

 
  





  return (
  <div className="loginform">
    {(user.name != "") ? ( 
      <div className="App">
      <Navbar navbarTitle={'simulationOfTank'} Logout={Logout}></Navbar>
      <div className="containr">
        <div className="main-container">
        <TankContainer rotateTurret={angleTurret} rotateLazer={angleLazer} radangle={anglerad} />
        </div>
        <div> 
        <Menu /* courses={courses}*/  handleChangeButton={handleChangeButton} handlerotate={handlerotate} selectedButton={selectedButton} angleTurret={angleTurret} angleLazer={angleLazer} radanglee={anglerad} />
        </div>
     </div> 
    </div> 
    ) : ( 
      <LoginForm  Login={Login} error={error}/>
    )}  
  </div>
  );
}
  









export default App;
