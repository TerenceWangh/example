import React from 'react';
import Link from './Link';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../model/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

interface FooterProps {
  filter: string;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  onShow: (filter:string)=>void;
}

class Footer extends React.Component<FooterProps> {
  render() {
    const { activeCount, completedCount, onClearCompleted, onShow } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
        <ul className="filters">
          {Object.keys(FILTER_TITLES).map(filter =>
            <li key={filter}>
              <Link
                active={filter === this.props.filter}
                onClick={onShow.bind(this, filter)}
                children={FILTER_TITLES[filter]}
              />
            </li>
          )}
        </ul>
        {
          !!completedCount &&
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >Clear completed</button>

        }
      </footer>
    )
  }
}

export default Footer