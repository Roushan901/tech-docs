import React from 'react';
import DocSidebarOriginal from '@theme-original/DocSidebar';

// Simple passthrough - client-side filtering in filterSidebar.js handles the context-aware display
export default function DocSidebar(props) {
  return <DocSidebarOriginal {...props} />;
}
