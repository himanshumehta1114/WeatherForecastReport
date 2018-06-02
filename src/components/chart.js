import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
        return (
            <div>
                <Sparklines width={180} height={120} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{average(props.data)} {props.unit}</div>
            </div>
        );
}
