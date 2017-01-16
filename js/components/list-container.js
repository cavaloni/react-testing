import React from 'react';
import ReactDOM  from 'react-dom';
import CardList from './lists';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.onAddInputChanged = this.onAddInputChanged.bind(this)
        this.onAddSubmit = this.onAddSubmit.bind(this)
        this.state = {
            inpText : '',
            listCards : []
        }
    }

    onAddInputChanged(event) {
        this.setState({inpText: event.target.value}) 
    }

    onAddSubmit(event) {
        event.preventDefault();
        let arrayvar = this.state.listCards.slice()
        console.log(this.state.listCards);              //why is state 1 behind?
        console.log(arrayvar);
        arrayvar.push(this.state.inpText)
        this.setState({listCards: arrayvar});
    }

    render () {
        return <CardList title={this.props.title}
              cards={this.state.listCards}
              onThisSubmit={this.onAddSubmit}
              onInputChanged={this.onAddInputChanged}
        />;
    }
}