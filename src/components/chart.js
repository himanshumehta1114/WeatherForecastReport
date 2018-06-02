import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
        return (
            <div>
                <Sparklines width={180} height={150} data={props.data}>
                    <SparklinesLine color={props.color} />
                </Sparklines>
            </div>
        );
}
