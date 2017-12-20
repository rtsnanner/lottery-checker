import React from 'react';
import Bet from './Bet.js'

class BetsPanel extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                        Bets
                    </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.props.bets.map((val , index) => <Bet value={val} key={index} result={this.props.result}/>)}
                    </ul>                                           
                </div>
            </div>
        );
    }
}

export default BetsPanel;