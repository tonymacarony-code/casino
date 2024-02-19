import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';
import { RouletteLifecycle, RouletteWinOrLose, selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from '../../slices/rouletteSlice';
import RouletteStartButton from '../../shared/button/RouletteStartButton';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';

interface IEventPanelProps {

}

const EventPanel: FC<IEventPanelProps> = ({ }) => {
    const lifecycle = useAppSelector(selectRouletteLifecycle)
    const dispatch = useAppDispatch();

    const winOrLose = useAppSelector(selectRouletteWinOrLose)
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber)

    const onStart = () => {
        sound.play(SOUNDS_ROULETTE.SPIN);
        dispatch(setRouletteSpinStartSpeed())
        dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY))
    }

    return (
        <div className="">
            <div className="">{lifecycle === RouletteLifecycle.READY_TO_START && (
                <RouletteStartButton onClick={onStart} />
            )}</div>
            <div className="">{lifecycle === RouletteLifecycle.PLAY && (
                <div className="">Playing...</div>
            )}</div>
            <div className="">{lifecycle === RouletteLifecycle.FINISHED && (
                <div className="">CALC</div>
            )}</div>
            <div className="flex gap-4">{lifecycle === RouletteLifecycle.INFO && (
                <div>
                    <div className="">{winOrLose === RouletteWinOrLose.WIN && 'Win!'}</div>
                    <div className="">{winOrLose === RouletteWinOrLose.LOSE && 'Lose!'}</div>
                    <div className="">{currentNumber}</div>
                </div>
            )}</div>
        </div>
    )
}

export default EventPanel