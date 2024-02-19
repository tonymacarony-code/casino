import { FC, useEffect } from 'react';
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import BgPX from '../../pixi/bg/bgPX';
import styles from './gameScene.module.css';
import soundBg from '../../../../assets/sounds/roulette/bg.mp3';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
import soundNumber from '../../../../assets/sounds/roulette/number.mp3';
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from './config';
import * as PIXI from 'pixi.js';
import GameSceneActionProvider from './GameSceneActionProvider';

interface IRouletteGameSceneProps {

};

const [width, height] = [1150, 500];

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({ }) => {
    sound.add(SOUNDS_ROULETTE.BG, soundBg);
    sound.add(SOUNDS_ROULETTE.BET, soundBet);
    sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
    sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

    useEffect(() => {
        (async () => {
            await PIXI.Assets.load(SOUNDS_ROULETTE.BG);
            sound.volume(SOUNDS_ROULETTE.BG, 0.1);
            sound.play(SOUNDS_ROULETTE.BG);
        })();

        // Возвращаем функцию очистки, которая остановит воспроизведение звука при размонтировании компонента
        return () => {
            sound.stop(SOUNDS_ROULETTE.BG);
        };
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <div className={styles.table}>
                <GameSceneActionProvider>
                    <GameSceneUI>
                        <Stage
                            width={width}
                            height={height}
                            options={{
                                background: 'green'
                            }}
                        >
                            <BgPX />
                            <RouletteSpinPX />
                        </Stage>
                    </GameSceneUI>
                </GameSceneActionProvider>
            </div>
        </div>
    )
};

export default RouletteGameScene;