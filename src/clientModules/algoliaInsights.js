import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function() {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({location}) {
      // Track page views - load insights dynamically to avoid SSR issues
      import('search-insights').then((aa) => {
        aa.default('convertedObjectIDsAfterSearch', {
          index: 'techdocstechdocs',
          eventName: 'Page View Conversion',
          queryID: sessionStorage.getItem('lastSearchQueryID') || 'direct',
          objectIDs: [location.pathname],
        });
      }).catch(() => {
        // Silently fail if insights not initialized
      });
    },
  };
})();
