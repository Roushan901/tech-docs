import React, { useEffect } from 'react';
import aa from 'search-insights';

/**
 * Root component wrapper for Algolia Insights initialization
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export default function Root({children}) {
  useEffect(() => {
    // Initialize Algolia Insights
    aa('init', {
      appId: 'NNCX8DGX61',
      apiKey: '86e2aca43bb565d7d9c017e8ff626166',
      useCookie: true,
    });

    // Set user token for tracking
    aa('setUserToken', `user-${Date.now()}`);
  }, []);

  return <>{children}</>;
}
