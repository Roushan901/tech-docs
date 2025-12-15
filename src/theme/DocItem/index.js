import React from 'react';
import DocItem from '@theme-original/DocItem';
import PageFeedback from '@site/src/components/PageFeedback';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <PageFeedback />
    </>
  );
}
