import { useState } from 'react'
import offLogo from './icons/off.svg';
import onLogo from './icons/on.svg';

function MuteButton(){
    const[volume, setVolume] = useState(onLogo)

    function mute(){
        if (volume === onLogo) {
        setVolume(offLogo)
        } else {
        setVolume(onLogo)
        }
    }
    return (
        <div>
            <a onClick={mute}>
                <img src={volume} alt="React Logo" />
            </a>
        </div>
    )
}
export default MuteButton