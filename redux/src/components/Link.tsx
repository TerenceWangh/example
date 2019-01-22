import React from 'react'
import classnames from 'classnames'
import { SHOW_ALL } from '../model/TodoFilters';

interface LinkProps {
  active: boolean;
  children: string;
  setFilter: () => void;
}

class Link extends React.Component<LinkProps> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <a
        className={classnames({ selected: this.props.active })}
        style={{ cursor: 'pointer' }}
        onClick={() => this.props.setFilter()}
      >
        {this.props.children}
      </a>
    )
  }
}

export default Link