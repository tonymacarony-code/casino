import { FC } from "react"
import RoultteGameScene from "./scenes/GameScene"
import MuteButton from "./ui/MuteButton/MuteButton"


interface ICoreGameRouletteProps {

}

const CoreGameRoulette: FC<ICoreGameRouletteProps> = ({ }) => {
    return (
        <div>
            <MuteButton />
            <RoultteGameScene />
        </div>
    )
}

export default CoreGameRoulette