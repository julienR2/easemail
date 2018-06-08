import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import shortid from 'shortid';
import _ from 'lodash';

import Drawer from '@material-ui/core/Drawer';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
    newProptypes[key].value = value;

    this.props.onPropsChange(newProptypes);
  }

  onStringPropsChange = (key) => ({ target: { value: textValue }}) => {
    const value = this.textToHtml(textValue);

    this.onPropsChange(key, value);
  }

  onArrayPropsChange = (key, index) => ({ target: { value: textValue }}) => {
    const { propTypes } = this.props;
    const value = this.textToHtml(textValue);

    this.onPropsChange(key, _.map(propTypes[key].value, (prop, i) => (
      i === index ? {
        ...prop,
        value,
      } : prop
    )));
  }

  onObjectPropsChange = (key, objectKey) => ({ target: { value: textValue }}) => {
    const { propTypes } = this.props;
    const value = this.textToHtml(textValue);

    let newProps = {};
    newProps[objectKey] = value;

    this.onPropsChange(key, {
      ...propTypes[key].value,
      ...newProps,
    });
  }

  addItem = (key) => () => {
    const { propTypes } = this.props;

    this.onPropsChange(key, [...propTypes[key].value, {
      key: shortid.generate(),
      value: '',
    }]);
  }

  deleteItem = (key, index) => () => {
    const { propTypes } = this.props;

    this.onPropsChange(key, _.filter(propTypes[key].value, (_, i) => i !== index));
  }

  htmlToText(html) {
    return html.replace(/<br \/>/g, '\n');
  }

  textToHtml(html) {
    return html.replace(/\n/g, '<br />');
  }

  toggleKey = (key) => () => {
    console.log('hrer ?', key);
    const { propTypes } = this.props;
    let newProptypes = { ...propTypes };
    newProptypes[key].visible = !propTypes[key].visible;

    this.props.onPropsChange(newProptypes);
  }

  render() {
    const { classes, propTypes, title } = this.props;

    return (
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{
          docked: classes.drawerDocked,
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List
          subheader={
            <Fragment>
              <ListSubheader>{title}</ListSubheader>
              <Divider />
            </Fragment>
          }
        >
          {_.keys(propTypes).map(key => {
            let child = '';
            if (_.isString(propTypes[key].value)) {
              child = (
                <ListItem className={classes.listItem}>
                  <Grid container>
                    <Grid item className={classes.textFieldWrapper} xs={12}>
                      <TextField
                        multiline
                        defaultValue={this.htmlToText(propTypes[key].value)}
                        className={classes.textField}
                        margin="normal"
                        onChange={this.onStringPropsChange(key)}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              )
            } else if (_.isArray(propTypes[key].value)) {
              child = (
                <ListItem className={classes.listItem}>
                  {propTypes[key].value.map(({ key: itemKey, value }, index) => (
                    <Grid container spacing={8} alignItems="flex-end" key={itemKey}>
                      <Grid item>
                        <IconButton aria-label="Delete" onClick={this.deleteItem(key, index)}>
                          <RemoveCircleOutline />
                        </IconButton>
                      </Grid>
                      <Grid item className={classes.textFieldWrapper} xs={12}>
                        <TextField
                          multiline
                          defaultValue={this.htmlToText(value)}
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
            } else if (_.isObject(propTypes[key])) {
              child = (
                <ListItem className={classes.listItem}>
                  {_.keys(propTypes[key].value).map(objectKey => (
                    <Grid container key={objectKey}>
                      <Grid item className={classes.textFieldWrapper} xs={12}>
                        <TextField
                          label={objectKey}
                          defaultValue={this.htmlToText(propTypes[key].value[objectKey])}
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

            return (
              <Fragment key={key}>
                <ListItem>
                  <ListItemText primary={key.replace('_', ' ')} className={classes.label} />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.toggleKey(key)}
                      checked={propTypes[key].visible}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                { child }
                <Divider />
              </Fragment>
            )
          })}
        </List>
      </Drawer>
    );
  }
}

const drawerWidth = 360;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerDocked: {
    overflow: 'scroll',
  },
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
    paddingTop: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    textTransform: 'capitalize',
  }
});

export default withStyles(styles)(Editor);
