import * as React from "react";
import * as classNames from 'classnames';

interface LinkProps {
  active: boolean;
  onClick: () => void;
}

class Link extends React.Component<LinkProps, void> {
  render() {
    const { active, onClick, children } = this.props;
    const btnDisplayFilter = classNames("btn",  "btn-default", {"active": active});

    return (
      <div className={btnDisplayFilter} onClick={onClick}>{children}</div>
    );
  }
};

export default Link;
