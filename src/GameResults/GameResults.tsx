import { FunctionComponent } from 'react';

import { IGameResultsProps } from './interfaces';
import './GameResults.scss';

export const GameResults: FunctionComponent<IGameResultsProps> = ({ score }) => {
    return (
        <div className="game-results">
            <label>Score:</label>
            <span>{score}</span>
        </div>
    )
}