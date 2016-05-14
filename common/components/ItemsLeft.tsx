import * as React from "react";

interface ItemsLeftProps {
  count: number;
}

class ItemsLeft extends React.Component<ItemsLeftProps, {}> {
  render() {
    const { count } = this.props;
    const itemsLeftText = count === 1 ? '1 item left' : count + " items left";

    return (
      <span>{itemsLeftText}</span>
    );
  }
};

export default ItemsLeft;
