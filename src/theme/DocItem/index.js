import React from 'react';
import DocItem from '@theme-original/DocItem';
import PageFeedback from '@site/src/components/PageFeedback';

/**
 * Wraps the default DocItem component to add page feedback at the bottom of each doc page
 */
export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <PageFeedback />
    </>
  );
}
