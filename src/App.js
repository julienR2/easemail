import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';

import Template1 from './containers/template1';
import Template2 from './containers/template2';

const templates = [
  {
    name: 'Template 1',
    component: Template1,
  },
  {
    name: 'Template 2',
    component: Template2,
  },
]

/* eslint-disable react/prefer-stateless-function */
class App extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTemplate: {
        ...templates[0],
        propTypes: templates[0].component.defaultProps,
      },
    }
  }

  onSelectTemplate = template => () => {
    this.setState({
      selectedTemplate: {
        ...template,
        propTypes: template.component.defaultProps,
      }
    });
  }

  onPropTypesChange = (key, value) => {
    const { propTypes } = this.state.selectedTemplate;
    let newProptypes = { ...propTypes };
    newProptypes[key] = value;

    this.setState({
      selectedTemplate: {
        ...this.state.selectedTemplate,
        propTypes: newProptypes,
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { selectedTemplate } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Easymail
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <List>
            { templates.map(template => (
              <ListItem
                button
                key={template.name}
                onClick={this.onSelectTemplate(template)}
                className={
                  (template.name === selectedTemplate.name)
                    ? classes.listItemSelected
                  : ''
                }
              >
                <ListItemText primary={template.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { selectedTemplate ? (
            <selectedTemplate.component {...selectedTemplate.propTypes} />
          ) : (
            <Typography noWrap>
              Choose a template on the left
            </Typography>
          )}
        </main>
        { selectedTemplate && (
          <Drawer
            variant="permanent"
            anchor="right"
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.toolbar} />
            <List
              subheader={
                <ListSubheader>{selectedTemplate.name}</ListSubheader>
              }
            >
              {_.keys(selectedTemplate.propTypes).map(key => (
                <ListItem
                  key={key}
                >
                  <TextField
                    id="multiline-static"
                    label={key}
                    multiline
                    defaultValue={selectedTemplate.propTypes[key]}
                    className={classes.textField}
                    margin="normal"
                    onChange={(event) => this.onPropTypesChange(key, event.target.value)}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </div>
    )
  }
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  listItemSelected: {
    backgroundColor: theme.palette.action.selected,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles)(App);
