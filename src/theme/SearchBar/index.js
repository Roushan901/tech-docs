import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';
import aa from 'search-insights';

/**
 * SearchBar wrapper component for Algolia event tracking
 * @param {Object} props - SearchBar props
 */
export default function SearchBarWrapper(props) {
  useEffect(() => {
    // Track search events
    const handleSearchInput = (event) => {
      const query = event.target.value;
      if (query && query.length > 2) {
        aa('clickedObjectIDsAfterSearch', {
          index: 'techdocstechdocs',
          eventName: 'Search Query',
          queryID: Date.now().toString(),
          objectIDs: [],
          positions: [],
        });
      }
    };

    // Attach listener to search input
    const searchInput = document.querySelector('.DocSearch-Input, input[type="search"]');
    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
      return () => searchInput.removeEventListener('input', handleSearchInput);
    }
  }, []);

  return <SearchBar {...props} />;
}
