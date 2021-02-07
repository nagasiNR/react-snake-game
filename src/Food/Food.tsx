import { FunctionComponent } from 'react';

import { IFoodProps } from './interfaces';
import './Food.scss';

export const Food: FunctionComponent<IFoodProps> = ({ position }) => {
    const styles = {
        left: `${position.x}%`,
        top: `${position.y}%`,
    }

    return (
        <div className="food" style={styles}></div>
    )
}
