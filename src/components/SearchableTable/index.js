import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';

/**
 * SearchableTable - Interactive filterable and sortable data table
 * Perfect for displaying structured data with search and sort capabilities
 */
export default function SearchableTable({
  data = [],
  columns = [],
  itemsPerPage = 10,
  searchable = true,
  sortable = true
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }

  if (!columns || columns.length === 0) {
    return <div className={styles.noData}>No columns defined</div>;
  }

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    
    return data.filter(row => {
      return columns.some(column => {
        const value = row[column.key];
        return value && value.toString().toLowerCase().includes(searchQuery.toLowerCase());
      });
    });
  }, [data, searchQuery, columns]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;
      
      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [filteredData, sortConfig]);

  // Paginate sorted data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (key) => {
    if (!sortable) return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className={styles.tableContainer}>
      {searchable && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      )}

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map(column => (
                <th 
                  key={column.key}
                  onClick={() => sortable && handleSort(column.key)}
                  className={`${sortable ? styles.sortable : ''} ${sortConfig.key === column.key ? styles.sorted : ''}`}
                >
                  <div className={styles.headerContent}>
                    <span>{column.label}</span>
                    {sortable && (
                      <span className={styles.sortIcon}>
                        {sortConfig.key === column.key 
                          ? (sortConfig.direction === 'asc' ? '▲' : '▼')
                          : '⇅'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map(column => (
                    <td key={column.key}>
                      {column.render 
                        ? column.render(row[column.key], row) 
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className={styles.noResults}>
                  No results found for "{searchQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            ← Previous
          </button>
          
          <div className={styles.pageInfo}>
            <span className={styles.pageNumbers}>
              Page {currentPage} of {totalPages}
            </span>
            <span className={styles.resultCount}>
              ({sortedData.length} result{sortedData.length !== 1 ? 's' : ''})
            </span>
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
