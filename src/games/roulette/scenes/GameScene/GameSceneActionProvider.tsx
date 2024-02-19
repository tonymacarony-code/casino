import { FC, ReactNode, useEffect } from 'react'
import { RouletteLifecycle, RouletteWinOrLose, clearRoulette, selectActiveNumber, selectCurrentBet, selectRouletteLifecycle, selectRouletteNumberWinBet, setRouletteLifecycle, setRouletteWinOrLose } from '../../slices/rouletteSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { setBalance } from '../../../../entities/wallet/slice/walletSlice'
import { clearRouletteSpinState, selectRouletteSpinCurrentNumber } from '../../slices/rouletteSpinSlice'

interface IGameSceneActionProviderProps {
    children: ReactNode
}

const GameSceneActionProvider: FC<IGameSceneActionProviderProps> = ({ children }) => {
    const lifecycle = useAppSelector(selectRouletteLifecycle)
    const activeNumber = useAppSelector(selectActiveNumber)
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber)
    const winBet = useAppSelector(selectRouletteNumberWinBet)

    const currentBet = useAppSelector(selectCurrentBet)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (lifecycle === RouletteLifecycle.FINISHED) {
            if (activeNumber === currentNumber) {
                // Win case
                dispatch(setBalance(currentBet * winBet))
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.WIN))
            } else {
                // Lose case
                dispatch(setBalance(-currentBet))
                dispatch(setRouletteWinOrLose(RouletteWinOrLose.LOSE))
            }
            dispatch(setRouletteLifecycle(RouletteLifecycle.INFO))

        }

    }, [lifecycle, currentBet, winBet, dispatch, activeNumber, currentNumber])

    useEffect(() => {
        if (lifecycle === RouletteLifecycle.INFO) {
            setTimeout(() => {
                dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START))
                dispatch(clearRoulette())
                dispatch(clearRouletteSpinState())

            }, 3000)

        }

    }, [lifecycle])

    return (
        <div>{children}</div>
    )
}

export default GameSceneActionProvider