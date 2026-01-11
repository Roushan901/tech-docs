import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';

/**
 * LiveSearch - Live search demonstration with instant filtering
 * Perfect for showcasing search functionality and filter patterns
 */
export default function LiveSearch({
  items = [],
  placeholder = 'Search...',
  searchFields = ['name'],
  renderItem,
  emptyMessage = 'No items found'
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  if (!items || items.length === 0) {
    return <div className={styles.noData}>No items provided</div>;
  }

  // Extract unique categories/tags if available
  const availableFilters = useMemo(() => {
    const filters = new Set();
    items.forEach(item => {
      if (item.category) filters.add(item.category);
      if (item.tags) {
        item.tags.forEach(tag => filters.add(tag));
      }
    });
    return Array.from(filters);
  }, [items]);

  // Filter items based on search and filters
  const filteredItems = useMemo(() => {
    let results = items;

    // Apply text search
    if (searchQuery) {
      results = results.filter(item => {
        return searchFields.some(field => {
          const value = item[field];
          return value && value.toString().toLowerCase().includes(searchQuery.toLowerCase());
        });
      });
    }

    // Apply category/tag filters
    if (selectedFilters.size > 0) {
      results = results.filter(item => {
        const itemFilters = [
          item.category,
          ...(item.tags || [])
        ].filter(Boolean);
        
        return itemFilters.some(filter => selectedFilters.has(filter));
      });
    }

    return results;
  }, [items, searchQuery, selectedFilters, searchFields]);

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(filter)) {
        newSet.delete(filter);
      } else {
        newSet.add(filter);
      }
      return newSet;
    });
  };

  const clearAll = () => {
    setSearchQuery('');
    setSelectedFilters(new Set());
  };

  const defaultRenderItem = (item, index) => (
    <div key={index} className={styles.defaultItem}>
      <h4>{item.name || item.title}</h4>
      {item.description && <p>{item.description}</p>}
      {item.category && <span className={styles.badge}>{item.category}</span>}
    </div>
  );

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className={styles.searchStats}>
          <span className={styles.resultCount}>
            {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
          </span>
          {(searchQuery || selectedFilters.size > 0) && (
            <button onClick={clearAll} className={styles.clearAllButton}>
              Clear all
            </button>
          )}
        </div>
      </div>

      {availableFilters.length > 0 && (
        <div className={styles.filtersSection}>
          <span className={styles.filterLabel}>Filters:</span>
          <div className={styles.filterButtons}>
            {availableFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`${styles.filterButton} ${selectedFilters.has(filter) ? styles.activeFilter : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.resultsContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => 
            renderItem ? renderItem(item, index) : defaultRenderItem(item, index)
          )
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <p className={styles.emptyMessage}>{emptyMessage}</p>
            {(searchQuery || selectedFilters.size > 0) && (
              <button onClick={clearAll} className={styles.resetButton}>
                Reset search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
