import React from 'react'

class Bet extends React.Component {

    countMatches(numbers, result) {
        return numbers.filter((val, index) => result.indexOf(val) >= 0).length;
    }

    getNumbers() {
        return this
            .props
            .value
            .split(/[\s,]+/)
            .map((item, index) => {
                if (item.trim() === '') 
                    return null;
                
                var itemint = parseInt(item.trim(), 10);

                if (itemint < 10) 
                    item = '0' + itemint;
                
                return item;
            })
            .sort()
            .filter((item, index, ary) => (item != null) && (!index || item != ary[index - 1]));
    }

    render() {

        let numbers = this.getNumbers();

        return (
            <li
                className="list-group-item d-flex justify-content-between align-items-center">
                {numbers.map((item, index) => <span
                    className={`badge ${this
                    .props
                    .result
                    .indexOf(item) >= 0
                    ? 'badge-success'
                    : 'badge-primary'}`}
                    key={item}>{item}</span>)}
                <span className="badge">
                    {this.countMatches(numbers, this.props.result)}
                </span>
            </li>
        )
    }
}

export default Bet;