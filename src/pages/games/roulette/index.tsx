import { FC } from 'react'
import { ROUTES } from '../../../app/router/utils'
import { Link } from 'react-router-dom'

interface IRoulettePageProps {

}

const RoulettePage: FC<IRoulettePageProps> = () => {
    return (
        <div>
            <Link to={ROUTES.main}>Back to home</Link>
            <div>RoulettePage</div>
        </div>
    )
}

export default RoulettePage