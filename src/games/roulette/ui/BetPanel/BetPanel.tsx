import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber, setCurrentBet } from '../../slices/rouletteSlice'
import bets50 from '../../../../assets/roulette/bet-50.png'
import bets100 from '../../../../assets/roulette/bet-100.png'
import bets200 from '../../../../assets/roulette/bet-200.png'
import bets400 from '../../../../assets/roulette/bet-400.png'
import bets800 from '../../../../assets/roulette/bet-800.png'


interface IBetPanelProps {

}

const BETS = [
    {
        value: 50,
        image: bets50
    },
    {
        value: 100,
        image: bets100
    },
    {
        value: 200,
        image: bets200
    },
    {
        value: 400,
        image: bets400
    },
    {
        value: 800,
        image: bets800
    },
]



const BetPanel: FC<IBetPanelProps> = ({ }) => {
    const dispatch = useAppDispatch()
    const pickBet = (value: number) => {
        dispatch(setCurrentBet(value))
    }

    return (
        <div className='flex gap-3 items-center'>
            {BETS.map(({ image, value }) => (
                <div className='cursor-pointer hover:scale-[1.05] transition-all' onContextMenu={(e) => { e.preventDefault(); pickBet(-value); }} onClick={() => pickBet(value)}>
                    <img key={value} src={image} alt={`${value}`} />
                </div>
            ))}
        </div>
    )
}

export default BetPanel