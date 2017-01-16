import React from 'react';
import ListContainer from './list-container';


export default function Board(props) {
    return (
        <div className="board">
        {props.title}
            <ListContainer title={props.lists[0]} cards={props.cards[0]}/>
            <ListContainer title={props.lists[1]} cards={props.cards[1]}/>
            <ListContainer title={props.lists[2]} cards={props.cards[2]}/>
        </div>
    );
}