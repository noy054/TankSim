import './tankContainer.css'
import '../logo.svg'
// import tankImg from '../assets/tank.gif'
import { useEffect } from 'react';
import Tuba from './Tuba';

function TankContainer(props) {

    useEffect(() => {
        console.log( 'rotate(' + (props.rotateTurret) + 'deg)')
    },[props.rotateTurret])

    return (
        <div className="tankcontainer" style={{ backgroundColor: props.bgcolor }}>
            <div className="logo">
                <Tuba rotateTurret={props.rotateTurret} rotateLazer={props.rotateLazer} rotaterad={props.radangle} />
            </div>
        </div>
    );

}
export default TankContainer;