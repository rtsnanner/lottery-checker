import React from 'react';

import DrawnChecker from './component/DrawnChecker.js';

class App extends React.Component {
    render(){
            return (
            <div>
            <div className="container body-content">
                <h1>DrawnChecker</h1>
            </div>
            <div className="container body-content">                        
                    <DrawnChecker/>                   
            </div>
            </div>
            );
    }
}

 export default App;