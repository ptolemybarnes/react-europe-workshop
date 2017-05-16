import React, { Children, cloneElement } from 'react';
import Title from './Title'
import Content from './Content'

const Tab = ({ children, onClick, selected }) => {
  const childrenArr = Children.toArray(children);
  const titleCount = childrenArr.filter(child => child.type === Title).length;
  if (titleCount !== 1) { throw 'You must pass a single Title to Tab' };
  const contentCount = childrenArr.filter(child => child.type === Content).length;
  if (contentCount !== 1) { throw 'You must pass a single Content to Tab' };

  return (
    <div>
      {
        Children.map(children, child => {
          if (child.type === Title) {
            return cloneElement(child, { onClick });
          }
          if (selected && child.type === Content) {
            return child
          }
          if (child.type !== Content) {
            throw 'Tab passed unknown child type. Must be Title or Content'
          };
        })
      }
    </div>
  )
}

export default Tab;
