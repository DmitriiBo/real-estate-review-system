import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { useChangeVisibility } from 'react-visibility-detector';

import { cnStoryTellingItem } from './cn-StoryTellingItem';

import './index.css';

type StoryTellingProps = {
  id: number;
  header: string;
  paragraph: string;
  children: ReactNode;
};

const StoryTellingItem: React.FunctionComponent<StoryTellingProps> = ({
  id,
  header,
  paragraph,
  children,
}) => {
  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const onVisibilityChange = useCallback((data) => {
    setVisible(data.visible);
  }, []);

  useChangeVisibility({
    targetRef,
    onVisibilityChange,
  });

  function isLeft() {
    return id % 2 !== 0;
  }

  const divClassName = cnStoryTellingItem('div', { left: isLeft() })
    .state({ shown: visible })
    .state({ hide: !visible });

  return (
    <div className={divClassName} ref={targetRef}>
      <h3 className={cnStoryTellingItem('headers')}>{header}</h3>
      <p className={cnStoryTellingItem('paragraph')}>{paragraph}</p>
      <div className={cnStoryTellingItem('svg-container')}>{children}</div>
    </div>
  );
};

export default StoryTellingItem;
