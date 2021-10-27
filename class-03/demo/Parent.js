// billy is older and now he wants to borrow money
// billy is not going to pay it back
// set up a system where billy can request money from his parent
// and parent can give money and update their bank account


import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import mom from './assets/mom.jpg';
import Child from './Child.js'
import MomsModal from './MomsModal.js';


export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            billysMoney: 0,
            momsMoney: 100,
            show: false
        }
    }

    accountTransfer = (val) => {
        let momsNewBalance = this.state.momsMoney - val;

        this.setState({
            momsMoney: momsNewBalance,
            billysMoney: this.state.billysMoney + val
        })
        // set state takes a little time! So even though we are writing it inline, there is a delay

        if (momsNewBalance <= 0) {
            // change show to false
            this.setState({ show: true })
        }
        
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div>
                <Row md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mom} />
                        <Card.Body>
                            <Card.Title>Parent</Card.Title>
                            <Card.Text>
                            I am the parent, I have all the money: {this.state.momsMoney}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Child momsMoney={this.state.momsMoney} accountTransfer={this.accountTransfer} billysMoney={this.state.billysMoney}/>
                </Row>
                <MomsModal show={this.state.show} hideModal={this.hideModal}/>
            </div>
        )
    }
}
