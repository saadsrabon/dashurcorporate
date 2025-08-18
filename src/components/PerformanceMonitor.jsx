import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if LCP is poor
        if (lastEntry.startTime > 2500) {
          console.warn('Poor LCP detected:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          // Send to analytics if FID is poor
          if (entry.processingStart - entry.startTime > 100) {
            console.warn('Poor FID detected:', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
            
            // Send to analytics if CLS is poor
            if (clsValue > 0.1) {
              console.warn('Poor CLS detected:', clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      }, 0);
    });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }, 30000); // Check every 30 seconds
    }

    // Monitor network requests
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 3000) { // 3 seconds threshold
            console.warn('Slow resource load:', entry.name, entry.duration);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
