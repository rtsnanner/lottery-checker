import React from 'react';
import Bet from './Bet.js'

class BetsPanel extends React.Component {
    render() {

        const betlist = [];

        if (this.props.bets) {
            for (let i = 0; i < this.props.bets.length; i++) {
                betlist.push(
                    <Bet value={this.props.bets[i]} key={i} result={this.props.result}/>
                );
            }
        }

        return (
            <div className="card">
                <div className="card-header">
                        Bets
                    </div>
                <div className="card-body">                                        
                        
                    <ul className="list-group">
                        {betlist}
                    </ul>                       
                    
                </div>
            </div>
        );
    }
}

export default BetsPanel;