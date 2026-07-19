import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function filterSidebarByRoute() {
  // Wait a bit for the DOM to be fully ready
  setTimeout(() => {
    const currentPath = window.location.pathname;
    console.log('Filtering sidebar for path:', currentPath);
    
    // Determine which guide type user is viewing
    let activeGuideType = null;
    const guideMatches = {
      'installation-guides': 'Installation',
      'user-guides': 'User',
      'api-references': 'API',
      'admin-guides': 'Admin',
      'integration-guides': 'Integration',
      'release-notes': 'Release',
      'writing-best-practices': 'Writing',
      'cloud-devops': 'Cloud',
      'devops': 'DevOps',
    };

    for (const [path, type] of Object.entries(guideMatches)) {
      if (currentPath.includes(path)) {
        activeGuideType = type;
        break;
      }
    }

    console.log('Active guide type:', activeGuideType);

    // Find sidebar nav
    const sidebarNav = document.querySelector('nav[aria-label="Docs sidebar"]');
    
    if (!sidebarNav) {
      console.log('Sidebar nav not found');
      return;
    }

    // Get only level-1 category items (main guide categories)
    const categories = sidebarNav.querySelectorAll('li.theme-doc-sidebar-item-category-level-1');
    
    console.log('Found', categories.length, 'level-1 sidebar categories');

    categories.forEach((category) => {
      const label = category.textContent?.toLowerCase() || '';
      
      // Always show Getting Started
      if (label.includes('getting started')) {
        category.style.display = '';
        console.log('Showing: Getting Started');
        return;
      }

      // Hide categories that don't match current page
      let shouldHide = true; // Default to hide unless it matches
      let matchType = null;

      if (activeGuideType === 'Installation' && label.includes('installation')) { 
        shouldHide = false; 
        matchType = 'Installation'; 
      }
      else if (activeGuideType === 'User' && label.includes('user')) { 
        shouldHide = false; 
        matchType = 'User'; 
      }
      else if (activeGuideType === 'API' && label.includes('api')) { 
        shouldHide = false; 
        matchType = 'API'; 
      }
      else if (activeGuideType === 'Admin' && label.includes('admin')) { 
        shouldHide = false; 
        matchType = 'Admin'; 
      }
      else if (activeGuideType === 'Integration' && label.includes('integration')) { 
        shouldHide = false; 
        matchType = 'Integration'; 
      }
      else if (activeGuideType === 'Release' && label.includes('release')) { 
        shouldHide = false; 
        matchType = 'Release'; 
      }
      else if (activeGuideType === 'Writing' && label.includes('writing')) { 
        shouldHide = false; 
        matchType = 'Writing'; 
      }
      else if (activeGuideType === 'Cloud' && label.includes('cloud')) { 
        shouldHide = false; 
        matchType = 'Cloud'; 
      }
      else if (activeGuideType === 'DevOps' && label.includes('devops')) { 
        shouldHide = false; 
        matchType = 'DevOps'; 
      }

      // Hide non-matching items only if we detected a guide type
      if (activeGuideType) {
        category.style.display = shouldHide ? 'none' : '';
        if (shouldHide) {
          console.log('Hiding:', label.substring(0, 30));
        } else if (matchType) {
          console.log('Showing:', matchType, '-', label.substring(0, 30));
        }
      } else {
        category.style.display = '';
      }
    });
  }, 500);
}

export default (function() {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  // Run filter on route update
  return {
    onRouteUpdate({location}) {
      filterSidebarByRoute();
    },
  };
})();
