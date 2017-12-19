import React from 'react';
import BetsPanel from './BetsPanel.js';

class DrawnChecker extends React.Component {
    constructor(){
        super();
        this.state = {
            bets : [],
            betsFieldValue: '',
            resultValue: ''
        };
    }

    addBet(){
        const bets = this.state.bets.slice(0);
        bets.push(this.state.betsFieldValue);
        this.setState({betsFieldValue:''})
    }

    updateResultFieldValue(evt){
        this.setState({resultValue:evt.target.value});
    }

    updateBetsFieldValue(evt){
        this.setState({betsFieldValue:evt.target.value});
    }

    render(){
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Add your lucky numbers then check if they appeared in any drawn
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <input className="form-control" name="result" id="result" placeholder="result" value={this.state.resultValue} onChange={(evt)=>this.updateResultFieldValue(evt)}/>
                                <button type="button" className="btn btn-default" id="checkDrawn">check</button>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="numbers" id="numbers" placeholder="bets" value={this.state.betsFieldValue} onChange={(evt)=>this.updateBetsFieldValue(evt)}/>
                                <button type="button" className="btn btn-default" id="addBid" onClick={()=>this.addBet}>add bet</button>
                                <span>                                
                                </span>
                            </div>
                        </form>
                    </div>              
                </div>  

                <BetsPanel bets={this.bets}/>
            </div>
        )
    }
}

export default DrawnChecker;