import { Stage } from '@pixi/react'
import { FC } from 'react'
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX'
import GameSceneUI from './GameSceneUI'

type IRoultteGameSceneProps = {}

const [width, height] = [1100, 500]

const RoultteGameScene: FC<IRoultteGameSceneProps> = ({ }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className="">Title game</div>
            <GameSceneUI>
                <Stage width={width} height={height} options={{ background: 'green' }}>
                    <RouletteSpinPX />
                </Stage>
            </GameSceneUI>
        </div>
    )
}

export default RoultteGameScene