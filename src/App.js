import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
      selectedTemplate: null,
    }
  }

  onSelectTemplate = template => () => {
    this.setState({ selectedTemplate: template });
  }

  render() {
    const { classes } = this.props;
    const { selectedTemplate } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            { templates.map(template => (
              <ListItem
                button
                key={template.name}
                onClick={this.onSelectTemplate(template)}
              >
                <ListItemText primary={template.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { selectedTemplate ? (
            <selectedTemplate.component />
          ) : (
            <Typography noWrap>
              Choose a template on the left
            </Typography>
          )}
        </main>
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
});

export default withStyles(styles)(App);
