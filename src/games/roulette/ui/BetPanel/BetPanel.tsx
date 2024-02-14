import { FC } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber } from '../../slices/rouletteSlice'

interface IBetPanelProps {

}

const BetPanel: FC<IBetPanelProps> = ({ }) => {
    const activeNumber = useAppSelector(selectActiveNumber)


    return (
        <div>{activeNumber}</div>
    )
}

export default BetPanel