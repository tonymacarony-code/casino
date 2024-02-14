import { FC } from "react"
import RoultteGameScene from "./scenes/GameScene"


interface ICoreGameRouletteProps {

}

const CoreGameRoulette: FC<ICoreGameRouletteProps> = ({ }) => {
    return (
        <div>
            <RoultteGameScene />
        </div>
    )
}

export default CoreGameRoulette