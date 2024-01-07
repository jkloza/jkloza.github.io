import React from 'react';
import { Grid, Typography, Button, TextField, FormControl } from '@mui/material';
import TicTacToe from '../organisms/tic-tac-toe';

class Item {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
  complete(isCompleted) {
    this.completed = isCompleted;
  }
  updateName(newName) {
    this.name = newName;
  }
}

class TodoList extends Item {
  constructor(items) {
    super();
    this.items = [];
  }
  addItem(newItem) {
    // let id = this.items.length + 1;
    // let newItem = new Item(id, title);
    this.items.push(newItem);
  }
  updateName(id, newTitle) {
    const item = this.items.find((item) => item.id === id);
    item.updateTitle(newTitle);
  }
}

export default function TodoListView() {
  const firstItem = new Item(1, 'First item');
  // console.log(firstItem);
  const myList = new TodoList([firstItem]);
  console.log('first list: ', myList);
  const secondItem = new Item(2, 'Second item');
  myList.addItem(secondItem);

  console.log('my list: ', myList);

  function handleComplete(item) {
    item.complete();
  }

  function handleSubmit(e) {
    event.preventDefault();
    console.log('e: ', e.target.value);
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: 'black', margin: '5%' }}>
      <TicTacToe />
      <Grid item xs={12}>
        <Typography>Todo List</Typography>
      </Grid>
      <FormControl onSubmit={handleSubmit}>
        <TextField name="todo" label="Todo" placeholder="Todo..." />
        <Button type="submit" variant="outlined" color="secondary">
          Add Task
        </Button>
      </FormControl>
      {myList.items.map((item) => {
        return (
          <Grid container key={item.id}>
            <Grid item xs={3}>
              <Button disabled={item.completed} onClick={handleComplete}>
                {item.completed ? 'Done' : 'Open'}
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Typography>{item.title}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
