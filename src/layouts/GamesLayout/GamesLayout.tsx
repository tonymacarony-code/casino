import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface IGamesLayoutProps {

}

const GamesLayout: FC<IGamesLayoutProps> = () => {
    return (
        <div>
            <div className="">Header</div>
            <Outlet />
        </div>
    )
}

export default GamesLayout