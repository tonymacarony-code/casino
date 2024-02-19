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
            <Link to={ROUTES.games.hammer}>Hammer</Link>
            <div>{nickname}</div>
        </div>
    )
}

export default MainPage