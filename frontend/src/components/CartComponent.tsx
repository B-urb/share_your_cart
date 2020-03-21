import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import {useParams} from 'react-router-dom';

import {ShoppingItem, User} from '../types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Properties {
    currentUser: User
    cartUser: User
}

export default function CardComponent(props: Properties) {
  const { id } = useParams();
  // TODO request to backend
  const { currentUser, cartUser } = props;
  const classes = useStyles();

  const [state, setState] = React.useState({ open: false, message: '' });
  const { open, message } = state;

  const handleClick = (message: string) => {
    setState({ open: true, message });
  };

  const handleClose = () => {
    setState({ open: false, message: '' });
  };

  const handleToggle = (value: ShoppingItem) => {
    if (value.claimedBy == null) {
        // unclaimed
        value.claimedBy = currentUser.id;
        value.claimedAt = new Date(); // current datee
        // TODO post request to backend
        handleClick(`Claimed ${value.name}!`);
        return;
    }

    // TODO post request to backend
    value.claimedBy = null;
    value.claimedAt = null;
    //value.deliveredAt = null;
    //value.receivedAt = null;
    // is claimed
    handleClick(`Unclaimed ${value.name}!`);
  }

  return (
    <>
    <div>Other Cart</div>
    <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key='snackbar'
        open={open}
        onClose={handleClose}
        message={message}
        autoHideDuration={1000}
    />
    <List className={classes.root}>
    {cartUser.shoppingItems.map(value => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
        <ListItem key={value.id} role={undefined} dense button onClick={() => handleToggle(value)}>
            <ListItemIcon>
            <IconButton edge="end" aria-label="comments">
                {value.claimedBy ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon /> }
                </IconButton>
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.name} />
        </ListItem>
        );
    })}
    </List>
    </>
  );
}