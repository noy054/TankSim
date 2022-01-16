import {useState} from 'react'
import './loginForm.css'
function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "noy", email: "noy@noy.com", password:"noy123"});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  
    return (
  <div className="form">  
       <form className="form1" onSubmit={submitHandler}>
           <div className="form-inner">
               <h1>Login</h1>
               {(error != "") ? (<div className="error">{error}</div>) : "" }
               <div className="from-group">
                   <label htmlFor="name">Name: </label>
                   <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="from-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="from-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"/>

           </div>
       </form>
      </div> 
    )
}




export default LoginForm;
