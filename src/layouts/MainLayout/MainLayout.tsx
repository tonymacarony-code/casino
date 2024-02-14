import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface IMainLayoutProps {

}

const MainLayout: FC<IMainLayoutProps> = () => {
    return (
        <div>
            <div className="">Header</div>
            <Outlet />
        </div>
    )
}

export default MainLayout