import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../app/router/utils'
import { useAppSelector } from '../app/store/hooks'
import { selectUserNickname } from '../entities/user/slices/userSlice'

interface IMainPageProps {

}

const MainPage: FC<IMainPageProps> = () => {

    const nickname = useAppSelector(selectUserNickname)


    return (
        <div className='flex gap-4'>
            <Link to={ROUTES.games.roulette}>Roulette</Link>
            <Link to={ROUTES.games.slots}>Slots</Link>
            <div>My nickname is {nickname} and this info we get using RTK Query</div>
        </div>
    )
}

export default MainPage