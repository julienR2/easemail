import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';


class Editor extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    propTypes: PropTypes.object,
    onPropsChange: PropTypes.func,
  };

  onPropsChange = (key, value) => {
    const { propTypes } = this.props;
    let newProptypes = { ...propTypes };
    newProptypes[key] = value;

    this.props.onPropsChange(newProptypes);
  }

  render() {
    const { classes, propTypes, title } = this.props;

    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <List
          subheader={
            <ListSubheader>{title}</ListSubheader>
          }
        >
          {_.keys(propTypes).map(key => (
            <ListItem
              key={key}
            >
              <TextField
                id="multiline-static"
                label={key}
                multiline
                defaultValue={propTypes[key]}
                className={classes.textField}
                margin="normal"
                onChange={(event) => this.onPropsChange(key, event.target.value)}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
});

export default withStyles(styles)(Editor);
