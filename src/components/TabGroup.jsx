import React, { Children, cloneElement } from 'react';

class TabGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = { selectedTab: 0 };
  }

  handleTabClick(idx) {
    this.setState({ selectedTab: idx });
  }

	render() {
      return (
        <div>
          {
            Children.map(this.props.children, (child, idx) => {
              const selected = (this.state.selectedTab === idx);
              const elem = cloneElement(child, { 
                selected, onClick: () => this.handleTabClick(idx)
              })
              return (elem)
            })
          }
        </div>
      );
	}
}

export default TabGroup;
