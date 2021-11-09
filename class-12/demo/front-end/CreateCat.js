import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateCat extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    // get info about cats and use it to make a cat
    const name = event.target.formName.value;
    const color = event.target.formColor.value;
    const location = event.target.formLocation.value;
    const hasClaws = event.target.formClawsCheckbox.checked;

    const newCatObj ={ name, color, location, hasClaws };
    this.props.postCats(newCatObj);
    // call some createcat funtion (doesnt exist yet) whre I can pass in a cat object using my values
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter cat name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="name" placeholder="Enter cat color" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="name" placeholder="Enter cat location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formClawsCheckbox">
          <Form.Check type="checkbox" label="Has claws" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}