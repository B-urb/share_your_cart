import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    avatar: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function FolderList() {
  const classes = useStyles();
  const [state, setState] = React.useState({ edit: false });

  return (
    <>
    <List className={classes.avatar}>
        {/* <ListItem className={classes.avatar}> */}
            <Avatar alt="Remy Sharp" src="" className={classes.large} />
        {/* <ListItemSecondaryAction >
        <IconButton edge="end" aria-label="comments" onClick={() => {setState({edit: true})}}>
                <EditIcon />
        </IconButton>
        </ListItemSecondaryAction> */}
        {/* </ListItem> */}
    </List>
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary="User.name" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Past Delivered Items" secondary="X items" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="City" secondary="Cologne" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Street" secondary="Körnerstraße" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Favorite shop" secondary="Rewe" />
      </ListItem>
    </List>
    </>
  );
}

