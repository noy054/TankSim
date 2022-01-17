import './navbar.css'
import {GrLogout} from '@react-icons/all-files/gr/GrLogout'

function Navbar(props) {
  
  return (
    <div className="navbar">
       <div className="navbar1">
          <button  className='button' onClick={props.Logout}>
            <GrLogout className='logout' size={20}/>
          </button>
        </div>
        <div className='titel'>  
           <h1>{props.navbarTitle}</h1> 
       </div>
    </div>
  );
}

export default Navbar;
