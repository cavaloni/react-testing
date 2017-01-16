import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import Board from '../js/components/board';
import ListContainer from '../js/components/list-container';
import CardList from '../js/components/lists';

describe('Card component', function () {  
    it('should display a card', function () {  
        const testtext = 'This is some text';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={testtext} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
        console.log(result);
        result.props.children.should.equal(testtext);
    });
});

describe('Board component', function () { 
    it('should display a board of cards', function () {  
        const title = 'This title';
        const cards = ['eenie', 'meenie', 'minie'];

        const renderer = TestUtils.createRenderer();
        renderer.render(<CardList title={title} cards={cards} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card-list');
        result.props.children[0].should.equal(title);
        
        const testcards = result.props.children;
        cards.forEach((card) => {
            card.should.be.a('string');
        })
        
    })
 })