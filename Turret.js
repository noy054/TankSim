import React from 'react'
import turretImg from '../assets/turret-removebg-preview.png'
import lezerImg from '../assets/lezer.png1.png'
import lezerrImg from '../assets/lezer4.png'
import '../TankContainer/turret.css'
export default function Turret(props) {

    return (
        <div>
           <div >
              <img className="turret" src={turretImg}  style={{ transform: 'rotate(' + (props.rotateTurret) + 'deg)'}} />
              <img className="lezer" src={lezerImg} style={{ transform: 'rotate(' + (props.rotateLazer) + 'deg)'}} />
              <img className="lezerr" src={lezerrImg} style={{ transform: 'rotate(' + (props. rotaterad) + 'deg)'}} />
           </div>
        </div>
    )
}
