import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import UserPanel from './UserPanel';

export class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Menu
        size='large'
        inverted
        fixed='left'
        verticalstyle={{ background: '#4c3c4c', fontSize: '1.2rem' }}
      >
        <UserPanel currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
