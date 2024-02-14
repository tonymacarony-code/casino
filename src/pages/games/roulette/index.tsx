import { FC } from 'react'
import { ROUTES } from '../../../app/router/utils'
import { Link } from 'react-router-dom'
import CoreGameRoulette from '../../../games/roulette'

interface IRoulettePageProps {

}

const RoulettePage: FC<IRoulettePageProps> = () => {
    return (
        <div>
            <Link to={ROUTES.main}>Back to home</Link>
            <CoreGameRoulette />
        </div>
    )
}

export default RoulettePage