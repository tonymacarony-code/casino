import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../app/router/utils'

interface IHammerPageProps {

}

const HammerPage: FC<IHammerPageProps> = () => {
    return (
        <div>
            <Link to={ROUTES.main}>Back to home</Link>
            <div>HammerPage</div>
        </div>
    )
}

export default HammerPage