import { FC } from 'react'
import { ROULETTE_TABLE_NUMBERS } from './initData'
import { twMerge } from 'tailwind-merge'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber, setActiveNumber } from '../../slices/rouletteSlice'

interface IRouletteTableProps {

}


const RouletteTable: FC<IRouletteTableProps> = () => {

    const activeNumber = useAppSelector(selectActiveNumber)
    const dispatch = useAppDispatch()
    const handleClick = (number: number) => {
        dispatch(setActiveNumber(number))
    }
    return (
        <div className='flex flex-wrap w-[600px]'>
            {
                ROULETTE_TABLE_NUMBERS.map(({ number, color }) => (
                    <div onClick={() => handleClick(number)} className={twMerge('flex cursor-pointer hover:opacity-90 hover:border-yellow-500 justify-center items-center w-[50px] h-[50px] border p-3 border-collapse text-xl font-medium', color === 'red' && 'bg-red', color === 'black' && 'bg-black', activeNumber === number && 'border-lime-500 bg-lime-500 border-2  font-bold')}>{number}</div>
                ))}
        </div>
    )
}

export default RouletteTable