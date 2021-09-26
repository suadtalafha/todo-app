import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';

export default function Form({ handleSubmit, handleChange }) {
  return (
    <Card  style={{backgroundColor:"#3a053ab4"}}>
      <h2>Add  Item to do </h2>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label>To Do Item </label>
          <InputGroup
            onChange={handleChange}
            name="enter"
            id="text-input"
            placeholder="Item Details"
          />
          <label>Assigned To </label>
          <InputGroup
            onChange={handleChange}
            name="assignee"
            id="text-input"
            placeholder="Assignee Name"
          />
          <div className='Difficulty'>
          <lable>Difficulty </lable>
          <input

            onChange={handleChange}
            defaultValue={1}
            type="range"
         
            min={1}
            max={5}
            name="difficulty"
          />
          </div>
<div >
          <Button style={{backgroundColor:"gray"}} className='button' type="submit">Add </Button>
          </div>
        </FormGroup>
      </form>
    </Card>
  );
}