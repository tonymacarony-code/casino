import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../app/router/utils'

interface ISlotsPageProps {

}

const SlotsPage: FC<ISlotsPageProps> = () => {
    return (
        <div>
            <Link to={ROUTES.main}>Back to home</Link>
            <div>SlotsPage</div>
        </div>
    )
}

export default SlotsPage