import { FunctionComponent } from 'react';

import { IFoodProps } from './interfaces';
import './Food.scss';

export const Food: FunctionComponent<IFoodProps> = ({ food }) => {
    const styles = {
        left: `${food.x}%`,
        top: `${food.y}%`,
    }

    return (
        <div className="food" style={styles}></div>
    )
}
