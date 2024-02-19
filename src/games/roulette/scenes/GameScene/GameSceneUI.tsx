import { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable/RouletteTable';

import InfoPanel from '../../ui/InfoPanel/InfoPanel';
import EventPanel from '../../ui/EventPanel/EventPanel';
import BetPanel from '../../ui/BetPanel/BetPanel';

interface IGameSceneUIProps {
    children: ReactNode;
};

const GameSceneUI: FC<IGameSceneUIProps> = ({
    children,
}) => {
    return (
        <div className="relative shadow-2xl shadow-amber-900 ">
            <div className="absolute left-0 right-0 top-[5%] text-white">
                <InfoPanel />
            </div>
            <div className="absolute left-[62%] top-[25%] text-white">
                <EventPanel />
            </div>
            <div className="absolute left-[45%] bottom-[29%] text-white">
                <RouletteTable />
            </div>
            <div className="absolute left-[45%] bottom-[10%] text-white z-10">
                <BetPanel />
            </div>
            {children}
        </div>
    )
};

export default GameSceneUI;