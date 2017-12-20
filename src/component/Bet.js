import React from 'react'

class Bet extends React.Component {
    render() {

        let matches = 0;

        const numbers = [];

        this.props.value.split(/[\s,]+/).forEach((item2, index2) => {

            if (item2.trim() === '') return;

            var itemint = parseInt(item2.trim(), 10);

            let match = false;

            if (itemint < 10)
                item2 = '0' + itemint;

            if (this.props.result) {
                if (this.props.result.indexOf(item2) >= 0) {
                    matches++;
                    match = true;
                }
            }

            let className = `badge ${match?'badge-success':'badge-primary'}`;

            numbers.push(
                <span className={className} key={numbers.length}>
                    {item2}
                </span>
            );
        });

        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {numbers}
                <span className="badge">
                    {matches}
                </span>
            </li>)
    }
}

export default Bet;