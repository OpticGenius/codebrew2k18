import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import { createMuiTheme } from 'material-ui/styles';

export default function NavBar(props) {
  const styles = {
    header: {
      textTransform: 'uppercase',
      color: '#34495e',
      letterSpacing: '2px',
      fontSize: '4em',
      marginTop: '1em',
      textAlign: 'center',
      width: '100%',
      overflow: 'hidden'
    },
  };
  
  return (
    <div className="navbar">
      <h1 style={styles.header}>Charity Share</h1>
    </div>
  );
}