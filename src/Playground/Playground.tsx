import { FunctionComponent } from 'react';

import { IPlaygroundProps } from './interfaces';
import './Playground.scss';

export const Playground: FunctionComponent<IPlaygroundProps> = ({ children }) => {
    return (
        <div className="playground">
            { children}
        </div>
    )
}
