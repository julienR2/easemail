import React, { Component } from 'react';
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
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

class Editor extends Component {
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

  onArrayPropsChange = (key, index) => ({ target: { value }}) => {
    const { propTypes } = this.props;
    this.onPropsChange(key, _.map(propTypes[key], (prop, i) => (
      i === index ? {
        ...prop,
        value,
      } : prop
    )));
  }

  onObjectPropsChange = (key, objectKey) => ({ target: { value }}) => {
    const { propTypes } = this.props;
    let newProps = {};
    newProps[objectKey] = value;

    this.onPropsChange(key, {
      ...propTypes[key],
      ...newProps,
    });
  }

  addItem = (key) => () => {
    const { propTypes } = this.props;
    this.onPropsChange(key, [...propTypes[key], {
      key: shortid.generate(),
      value: '',
    }]);
  }

  deleteItem = (key, index) => () => {
    const { propTypes } = this.props;
    this.onPropsChange(key, _.filter(propTypes[key], (_, i) => i !== index));
  }

  htmlToText(html) {
    return html.replace('<br />', '\n');
  }

  textToHtml(html) {
    return html.replace('<br />', '\n');
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
                <ListItem key={key} className={classes.listItem}>
                  <InputLabel>
                    {key}
                  </InputLabel>
                  <Grid container>
                    <Grid item className={classes.textFieldWrapper} xs={12}>
                      <TextField
                        multiline
                        defaultValue={this.htmlToText(propTypes[key])}
                        className={classes.textField}
                        margin="normal"
                        onChange={(event) => this.onPropsChange(key, this.textToHtml(event.target.value))}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              )
            }
            if (_.isArray(propTypes[key])) {
              return (
                <ListItem key={key} className={classes.listItem}>
                  <InputLabel>
                    {key}
                  </InputLabel>
                  {propTypes[key].map(({ key: itemKey, value }, index) => (
                    <Grid container spacing={8} alignItems="flex-end" key={itemKey}>
                      <Grid item>
                        <IconButton aria-label="Delete" onClick={this.deleteItem(key, index)}>
                          <RemoveCircleOutline />
                        </IconButton>
                      </Grid>
                      <Grid item className={classes.textFieldWrapper} xs={12}>
                        <TextField
                          multiline
                          defaultValue={value}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.onArrayPropsChange(key, index)}
                        />
                      </Grid>
                    </Grid>
                  ))}
                  <IconButton aria-label="Add" onClick={this.addItem(key)}>
                    <AddCircleOutline />
                  </IconButton>
                </ListItem>
              );
            }
            if (_.isObject(propTypes[key])) {
              return (
                <ListItem key={key} className={classes.listItem}>
                  <InputLabel>
                    {key}
                  </InputLabel>
                  {_.keys(propTypes[key]).map(objectKey => (
                    <Grid container key={objectKey}>
                      <Grid item className={classes.textFieldWrapper} xs={12}>
                        <TextField
                          label={objectKey}
                          defaultValue={propTypes[key][objectKey]}
                          className={classes.textField}
                          margin="normal"
                          onChange={this.onObjectPropsChange(key, objectKey)}
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
    height: '100%',
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
    alignItems: 'flex-start',
  }
});

export default withStyles(styles)(Editor);
