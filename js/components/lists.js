import React from 'react';
import Card from './card';

export default function CardList(props) {
        return (
        <div className="card-list">
        {props.title}
            <Card text={props.cards[0]}/>
            <Card text={props.cards[1]}/>
            <Card text={props.cards[2]}/>
            <form  onSubmit={props.onThisSubmit}> 
            <input type="text" onChange={props.onInputChanged} />
            <button type="submit">Fuck</button>
            </form>
        </div>
    );
}
