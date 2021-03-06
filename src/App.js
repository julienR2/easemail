import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import jsFileDownload from 'js-file-download';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import Template1 from './containers/template1';
import Template2 from './containers/template2';
import Editor from './components/editor';

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

    this.templateRef = React.createRef();
    this.state = {
      selectedTemplate: {
        ...templates[1],
        propTypes: templates[1].component.defaultProps,
      },
    }

    templates.forEach(({ name }) => {
      this[name] = React.createRef();
    });
  }

  onSelectTemplate = template => () => {
    this.setState({
      selectedTemplate: {
        ...template,
        propTypes: template.component.defaultProps,
      }
    });
  }

  onPropsChange = (propTypes) => {
    this.setState({
      selectedTemplate: {
        ...this.state.selectedTemplate,
        propTypes,
      }
    });
  }

  onDownload = () => {
    const email = this[this.state.selectedTemplate.name].current.renderEmail();
    jsFileDownload(email, `${this.state.selectedTemplate.name}.html`);
  }

  render() {
    const { classes } = this.props;
    const { selectedTemplate } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap className={classes.title}>
              Easemail
            </Typography>
            <Button color="inherit" onClick={this.onDownload}>
              Download
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            docked: classes.drawerDocked,
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
            <selectedTemplate.component ref={this[selectedTemplate.name]} {...selectedTemplate.propTypes} />
          ) : (
            <Typography noWrap>
              Choose a template on the left
            </Typography>
          )}
        </main>
        { selectedTemplate && (
          <Editor
            title={selectedTemplate.name}
            propTypes={selectedTemplate.propTypes}
            onPropsChange={this.onPropsChange}
          />
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
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flex: 1,
  },
  drawerDocked: {
    overflow: 'scroll',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    overflow: 'scroll',
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
