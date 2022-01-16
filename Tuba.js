import React from 'react'
import tubaImg from '../assets/tuba.png'
import lezerImg from '../assets/lezer.png'
import Turret from './Turret'
import '../TankContainer/tuba.css'

export default function Tuba(props) {
    return (
        // to give css width height
        <div>
           <div className="tuba" style={{ backgroundImage: `url(${tubaImg})` }}>
            <Turret  rotateTurret={props.rotateTurret} rotateLazer={props.rotateLazer} rotaterad={props.rotaterad}/>
           </div>
        </div>
    )
}
