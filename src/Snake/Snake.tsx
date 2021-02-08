import { FunctionComponent } from 'react';

import { ISnakeProps } from './interfaces';
import './Snake.scss';


export const Snake: FunctionComponent<ISnakeProps> = ({ snake }) => {
    return (
        <div className="snake">
            {snake.segments.map((segment, index) => {
                const position = {
                    left: `${segment.x}%`,
                    top: `${segment.y}%`,
                }

                return (
                    <div className="snake-segment" key={index} style={position}></div>
                )
            })}
        </div>
    )
}
