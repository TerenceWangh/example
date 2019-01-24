import React from 'react'
import classnames from 'classnames'

interface LinkProps {
  active: boolean;
  children: string;
  onClick: () => void;
}

class Link extends React.Component<LinkProps> {
  render() {
    return (
      <a
        className={classnames({ selected: this.props.active })}
        style={{ cursor: 'pointer' }}
        onClick={() => this.props.onClick()}
      >
        {this.props.children}
      </a>
    )
  }
}

export default Link