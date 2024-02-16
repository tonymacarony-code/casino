import React, { FC } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber, selectCurrentBet, setCurrentBet } from '../../slices/rouletteSlice'

interface IInfoPanelProps {

}

type Item = {
    id: 'balance' | 'winBet' | 'bet' | 'activeNumber',
    title: string,
    value: number,
    icon: string
}


const ITEMS: Item[] = [
    {
        title: 'Balance',
        id: 'balance',
        value: 0,
        icon: ''
    },
    {
        title: 'Win bet',
        id: 'winBet',
        value: 0,
        icon: ''
    },
    {
        title: 'Bet',
        id: 'bet',
        value: 0,
        icon: ''
    },
    {
        title: 'Bet number',
        id: 'activeNumber',
        value: 0,
        icon: ''
    },
]

const InfoPanel: FC<IInfoPanelProps> = () => {

    const currentBet = useAppSelector(selectCurrentBet)
    const activeNumber = useAppSelector(selectActiveNumber)

    return (
        <div className='flex justify-between px-24'>
            {ITEMS.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.id === 'activeNumber' && activeNumber}</div>
                    <div>{item.id === 'bet' && currentBet}</div>
                </div>
            ))}
        </div>
    )
}

export default InfoPanel