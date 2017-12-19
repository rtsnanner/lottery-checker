import React from 'react';

class BetsPanel extends React.Component {
    constructor(props){
        super();
        this.state = {
            bets : props.bets
        };
    }
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                        <div className="panel-title">Bets</div>
                </div>
                <div className="panel-body">
                    <div className="col-md-6">
                        <ul className="list-group bids">
                                {this.state.bets}
                        </ul>
                    </div>
                </div>                    
            </div>
        );
    }
}

export default BetsPanel;