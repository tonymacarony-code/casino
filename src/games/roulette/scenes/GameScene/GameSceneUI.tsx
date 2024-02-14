import { FC } from 'react'
import RouletteTable from '../../ui/RouletteTable/RouletteTable'
import BetPanel from '../../ui/BetPanel/BetPanel'

interface IGameSceneUIProps {
    children: React.ReactNode
}

const GameSceneUI: FC<IGameSceneUIProps> = ({ children }) => {
    return (
        <div className='relative'>
            <div className="absolute right-[10%] top-[40%] text-white">
                <RouletteTable />
            </div>
            <div className='absolute bottom-[5%] right-[5%]'><BetPanel /></div>
            {children}
        </div >
    )
}

export default GameSceneUI