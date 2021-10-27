import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import billy from './assets/teen.jpg';
import Button from 'react-bootstrap/Button';

export default class Child extends Component {

    handleClickTen = () => {
        if (this.props.momsMoney > 0) {
            this.props.accountTransfer(10);
        }
        console.log('hooray!')
    }

    handleClickTwenty = () => {
        this.props.accountTransfer(20);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={billy} />
                    <Card.Body>
                        <Card.Title>Billy</Card.Title>
                        <Card.Text>
                        I am Billy, I have all the power, and money: {this.props.billysMoney}
                        </Card.Text>
                        <Button onClick={this.handleClickTen}>Ask for $10</Button>
                        <Button onClick={this.handleClickTwenty}>Ask for $20</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

// next task lets make an over draft notice