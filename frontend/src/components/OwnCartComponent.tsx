import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';

import {ShoppingItem, User} from '../types';


const datePriority = ['receivedAt', 'deliveredAt', 'claimedAt'];
const dateMap = {
  claimedAt: 'claimed at',
  deliveredAt: 'delivered at',
  receivedAt: 'received at',
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Properties {
    currentUser: User
}

function formatDate(d: Date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const dayName = days[d.getDay()];
  const formatted = `${dayName} ${hours}:${minutes}`;

  return formatted;
}

export default function CardComponent(props: Properties) {
  const { currentUser } = props;
  const classes = useStyles();

  const [{input}, setInput] = React.useState({ input: '' })

  const deleteItem = (item: ShoppingItem) => {
    // TODO post request to backend
    // set received parameter
    currentUser.shoppingItems = currentUser.shoppingItems.filter(x => x.id != item.id);
    setInput({input}); // trigger rerender
  }

  const addItem = () => {
    if (input == '') return;

    // TODO post request ans backend
    currentUser.shoppingItems.push({
      id: new Date().toISOString(),
      name: input,
      claimedBy: null,
      claimedAt: null,
      deliveredAt: null,
      receivedAt: null,
    })

    setInput({ input: '' });
  };

  return (
    <>
      <div>Own Cart</div>
      <List className={classes.root}>
        {currentUser.shoppingItems.map(value => {
          const labelId = `checkbox-list-label-${value.id}`;

          let status = '';
          if (value.claimedBy != null) {
            for (const key of datePriority) {
              if (value[key] == null) continue;
              status = `${dateMap[key]}: ${formatDate(value[key])} by ${value.claimedBy}`;
              break;
            }
          }

          return (
            <ListItem key={value.id} role={undefined} dense button onClick={() => console.log('test')}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={true}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
              <ListItemSecondaryAction>
                {status}
              <IconButton style={{ marginLeft: '5px' }} edge="end" aria-label="comments" onClick={() => deleteItem(value)}>
                <DeleteIcon />
              </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
          <ListItem key="add" role={undefined} dense>
              
            <TextField
              style={{ width: '80%' }}
              autoComplete="off"
              id="standard-basic"
              label="Add Item"
              onChange={e => setInput({input: e.target.value})}
              value={input}
            />

            <ListItemSecondaryAction>
              <Button onClick={() => addItem()} variant="contained">Add</Button>
            </ListItemSecondaryAction>
          </ListItem>
      </List>
    </>
  );
}