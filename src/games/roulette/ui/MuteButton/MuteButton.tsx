
import { sound } from '@pixi/sound';
import { FaVolumeMute } from 'react-icons/fa'
import { AiFillSound } from "react-icons/ai";
import { useState } from 'react';

const MuteButton = () => {

    const [isMuted, setIsMuted] = useState(false)

    const mute = () => {
        sound.toggleMuteAll();
        setIsMuted(!isMuted)
    }
    return (
        <>
            {isMuted
                ? <FaVolumeMute onClick={mute} className='text-white w-10 h-10 cursor-pointer transition-all hover:scale-[1.1]' />
                : <AiFillSound onClick={mute} className='text-white w-10 h-10 cursor-pointer transition-all hover:scale-[1.1]' />
            }
        </>

    )
}

export default MuteButton