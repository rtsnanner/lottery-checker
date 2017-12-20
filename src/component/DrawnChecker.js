import React from 'react';
import BetsPanel from './BetsPanel.js';

class DrawnChecker extends React.Component {
    constructor() {
        super();
        this.state = {
            bets: [],
            betsFieldValue: '',
            resultValue: [],
            resultStringValue: ''
        };
    }

    addBet() {
        if (!this.state.betsFieldValue)
            return;

        const bets = this.state.bets.slice(0);
        bets.push(this.state.betsFieldValue);
        this.setState({ betsFieldValue: '', bets: bets });
    }

    updateResultFieldValue(evt) {

        const numbers = evt.target.value.split(/[\s,]+/).map((item, index) => {

            if(!item)
                return null;

            var itemint = parseInt(item.trim(), 10);

            if (itemint < 10)
                item = '0' + itemint;

            return item;

        }).filter((item,index) => item!==null);

        this.setState({ resultValue: numbers, resultStringValue: evt.target.value });
    }

    updateBetsFieldValue(evt) {
        this.setState({ betsFieldValue: evt.target.value });
    }   

    render() {
        return (
            <main role="main">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-header">
                                Add your lucky numbers then check if they appeared in any drawn
                        </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" name="result" id="result" placeholder="result" value={this.state.resultStringValue} onChange={(evt) => this.updateResultFieldValue(evt)} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="numbers" id="numbers" placeholder="bets" value={this.state.betsFieldValue} onChange={(evt) => this.updateBetsFieldValue(evt)} />
                                    </div>
                                    <button type="button" className="btn btn-default" id="addBid" onClick={() => this.addBet()}>add bet</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-10">
                        <BetsPanel bets={this.state.bets} result={this.state.resultValue} />
                    </div>
                </div>
            </main>
        )
    }
}

export default DrawnChecker;