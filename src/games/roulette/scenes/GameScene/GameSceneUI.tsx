import { FC } from 'react'
import RouletteTable from '../../ui/RouletteTable/RouletteTable'
import BetPanel from '../../ui/BetPanel/BetPanel'
import InfoPanel from '../../ui/InfoPanel/InfoPanel'

interface IGameSceneUIProps {
    children: React.ReactNode
}

const GameSceneUI: FC<IGameSceneUIProps> = ({ children }) => {
    return (
        <div className='relative'>

            <div className="absolute right-[10%] top-[40%] text-white">
                <RouletteTable />
            </div>
            <div className='absolute bottom-[12%] right-[35%]'><BetPanel /></div>

            <div className="absolute left-0 right-0 top-[5%] text-white"><InfoPanel /></div>

            {children}
        </div >
    )
}

export default GameSceneUI