import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import shortid from 'shortid';
import _ from 'lodash';

import Drawer from '@material-ui/core/Drawer';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

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
          {_.keys(propTypes).map(key => {
            if (_.isString(propTypes[key])) {
              return (
                <ListItem key={shortid.generate()} className={classes.listItem}>
                  <InputLabel>
                    {key}
                  </InputLabel>
                  <Grid container>
                    <Grid item className={classes.textFieldWrapper}>
                      <TextField
                        multiline
                        defaultValue={propTypes[key]}
                        className={classes.textField}
                        margin="normal"
                        onChange={(event) => this.onPropsChange(key, event.target.value)}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              )
            }
            if (_.isArray(propTypes[key])) {
              return (
                <ListItem key={shortid.generate()} className={classes.listItem}>
                  <InputLabel>
                    {key}
                  </InputLabel>
                  {propTypes[key].map(row => (
                    <Grid container spacing={8} xs={12} alignItems="flex-end" key={shortid.generate()}>
                      <Grid item>
                        <IconButton aria-label="Delete">
                          <RemoveCircleOutline />
                        </IconButton>
                      </Grid>
                      <Grid item className={classes.textFieldWrapper}>
                        <TextField
                          multiline
                          defaultValue={row}
                          className={classes.textField}
                          margin="normal"
                          onChange={(event) => this.onPropsChange(key, event.target.value)}
                        />

                      </Grid>
                    </Grid>
                  ))}
                </ListItem>
              );
            }
            return '';
          })}
        </List>
      </Drawer>
    );
  }
}

const drawerWidth = 360;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  textFieldWrapper: {
    display: 'flex',
    flex: 1,
  },
  textField: {
    flex: 1,
  },
  button: {
    height: 36,
    width: 36,
    margin: theme.spacing.unit,
  },
  listItem: {
    flexDirection: 'column',
  }
});

export default withStyles(styles)(Editor);
