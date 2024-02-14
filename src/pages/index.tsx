import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../app/router/utils'
import { useAppSelector } from '../app/store/hooks'
import { selectUserNickname } from '../entities/user/slices/userSlice'
import { useGetUserQuery } from '../entities/user/api/userApi'

interface IMainPageProps {

}

const MainPage: FC<IMainPageProps> = () => {

    const nickname = useAppSelector(selectUserNickname)

    const { data: users } = useGetUserQuery({
        userId: 1
    })
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