import React, {Component} from 'react';

//below is similar to initializing state
export const StateContext = React.createContext();

export class GlobalStateProvider extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        name: "Fred",
        lastName:"Garcia"

    }
    handleChange = (e) => {
        this.setState({...this.state,name:e.target.value})
    }
    render() {
        return (
            <StateContext.Provider value={{state:this.state,handleChange:this.handleChange}}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}