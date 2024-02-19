import { FC } from 'react'
import { ROUTES } from '../../../app/router/utils'
import { Link } from 'react-router-dom'
import CoreGameRoulette from '../../../games/roulette'
import styles from '../../page.module.css'
interface IRoulettePageProps {

}

const RoulettePage: FC<IRoulettePageProps> = () => {
    return (
        <div className={styles.roulette}>
            <Link to={ROUTES.main}>Back to home</Link>
            <CoreGameRoulette />
        </div>
    )
}

export default RoulettePage