import { useState } from 'react';
import './menu.css'
import {HiOutlineArrowLeft} from '@react-icons/all-files/hi/HiOutlineArrowLeft'
import {HiOutlineArrowRight} from '@react-icons/all-files/hi/HiOutlineArrowRight'
import {AiOutlineEnter} from '@react-icons/all-files/ai/AiOutlineEnter'
// look at first two letters

function Menu(props) {
  const[angle1, setAngle1]=useState(0)
  const [name, setName] = useState("MENU")


  const handleSubmit=(e)=>{
     e.preventDefault()
    console.log(angle1)
    props.handlerotate(angle1)
  }
  const changeButtonToTurret=()=>{
    props.handleChangeButton('turret')
    console.log(props.selectedButton);
  }
  const changeButtonToLazer=()=>{
    props.handleChangeButton('lazer')
    console.log(props.selectedButton);
  }
  const changeButtonTorad=()=>{
    props.handleChangeButton('lezerr')
    console.log(props.selectedButton);
  }


  const handleChange=(e)=>{
    let curretnAngle;
    if (props.selectedButton=='turret') {
      curretnAngle=props.angleTurret
    }
    else if (props.selectedButton=='lazer') {
       curretnAngle=props.angleLazer
    } 
    else{
      curretnAngle=props.radanglee
    }
  
    
    switch (e.target.name) {
      case 'minus':
        console.log(curretnAngle,props.selectedButton);
          props.handlerotate(curretnAngle - 20)
        break;
        case 'plus':
        console.log(curretnAngle,props.selectedButton);
          props.handlerotate(curretnAngle + 20)
        break;
    }
  }

  return (
    <div className="Menu">
      <div className="menu1">
        <h1>
        {name}
        </h1>
          <div className="num">
               <button className='button_num' name={'minus'} onClick={(e)=>handleChange(e)} >
                 <HiOutlineArrowLeft className='left' size={20} top={20} />
                 </button> 
               <button className='button_num' name={'plus'} onClick={(e)=>handleChange(e)} >
                 <HiOutlineArrowRight className='right' size={20}/>
               </button>
          </div>

          <div className="logo2">
              <div className="logo3">
              <button  className="logo5" onClick={()=>{props.handlerotate(180)}}>right</button>
             </div>
             <div className="logo4">
              <button  className="logo1" onClick={()=>{props.handlerotate(0)}}>left</button>
             </div> 
          </div>
          <div className="text">
            <form>
            <label>Enter a angle : </label>
            <input 
            placeholder={
              props.selectedButton==='turret'?
            props.angleTurret
            :props.angleLazer} 
            type="number" onChange={(e) => {setAngle1(e.target.valueAsNumber)}} ></input>
            <button className='enter' type="submit" onClick={handleSubmit}>
              <AiOutlineEnter className='enter1' size={20}/>
            </button>
            </form>
            {/* q?1:2 */}
            </div> 
          <div className="turret1">
            <span>
            <label>turret</label>
            <input type="radio" name="selectButton" value={'turret'} onClick={changeButtonToTurret}    ></input>
            </span>
          <div className="commanderside">
            <span>
            <label>commanderside</label>
            <input type="radio" name="selectButton" value={'commanderside'} onClick={changeButtonToLazer}   ></input>
            </span>
          <div className="radlezer">
            <span>
            <label>radlezer</label>
            <input type="radio" name="selectButton" value={'radlezer'} onClick={changeButtonTorad} ></input> 
            </span>
           </div> 
           <button onClick={props.courses}>click me</button>
           </div>
          </div>
        </div>

      </div>
  );
}






export default Menu;