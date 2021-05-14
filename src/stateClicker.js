import React, {
    Component
} from 'react'

class StateClicker extends Component {
    constructor(props){
        super(props);
        this.state = {num: 0, winNum: 7, won: false}
        this.randNum = this.randNum.bind(this)
    }

    randNum(e){
        let num = Math.floor(Math.random() * 11);
        this.setState({num: num});
        if(num === this.state.winNum){
            this.setState({won: true});
        }
    }

    render(){
        return(
            <div className="StateClicker">
                <h1>Your number is: {this.state.num}</h1>
                {this.state.won 
                ? <h2>YOU WON!</h2> 
                : <button onClick={this.randNum}>Random Number</button>}
            </div>
        )
    }
}

export default StateClicker;