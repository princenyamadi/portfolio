import { useEffect, useState, useCallback } from "react";

export interface PerformanceMetrics {
  // Core Web Vitals
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift

  // Loading Performance
  domContentLoaded?: number;
  loadComplete?: number;

  // Network Information
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };

  // Memory Usage (if available)
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };

  // Custom Metrics
  timeToInteractive?: number;
  customMarkers: Record<string, number>;
}

export interface PerformanceHookResult {
  metrics: PerformanceMetrics;
  isLoading: boolean;
  markTime: (name: string) => void;
  measureTime: (
    name: string,
    startMark: string,
    endMark?: string
  ) => number | null;
  getMetricsSummary: () => {
    score: number;
    grade: "A" | "B" | "C" | "D" | "F";
    recommendations: string[];
  };
}

export const usePerformanceMonitor = (): PerformanceHookResult => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    customMarkers: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  // Mark a specific time point
  const markTime = useCallback((name: string) => {
    if ("performance" in window && performance.mark) {
      performance.mark(name);
      setMetrics((prev) => ({
        ...prev,
        customMarkers: {
          ...prev.customMarkers,
          [name]: performance.now(),
        },
      }));
    }
  }, []);

  // Measure time between two marks
  const measureTime = useCallback(
    (name: string, startMark: string, endMark?: string): number | null => {
      if ("performance" in window && performance.measure) {
        try {
          const measureName = `measure-${name}`;
          if (endMark) {
            performance.measure(measureName, startMark, endMark);
          } else {
            performance.measure(measureName, startMark);
          }

          const measure = performance.getEntriesByName(measureName)[0];
          return measure ? measure.duration : null;
        } catch (error) {
          console.warn("Failed to measure performance:", error);
          return null;
        }
      }
      return null;
    },
    []
  );

  // Get Core Web Vitals
  const getCoreWebVitals = useCallback(() => {
    if (!("performance" in window)) return;

    // Get FCP (First Contentful Paint)
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );

    // Get LCP (Largest Contentful Paint)
    if ("PerformanceObserver" in window) {
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          setMetrics((prev) => ({
            ...prev,
            lcp: lastEntry.startTime,
          }));
        }).observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (error) {
        console.warn("LCP observer not supported:", error);
      }

      // Get FID (First Input Delay)
      try {
        new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            setMetrics((prev) => ({
              ...prev,
              fid: (entry as any).processingStart - entry.startTime,
            }));
          });
        }).observe({ entryTypes: ["first-input"] });
      } catch (error) {
        console.warn("FID observer not supported:", error);
      }

      // Get CLS (Cumulative Layout Shift)
      try {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });

          setMetrics((prev) => ({
            ...prev,
            cls: clsValue,
          }));
        }).observe({ entryTypes: ["layout-shift"] });
      } catch (error) {
        console.warn("CLS observer not supported:", error);
      }
    }

    // Set FCP if available
    if (fcpEntry) {
      setMetrics((prev) => ({
        ...prev,
        fcp: fcpEntry.startTime,
      }));
    }
  }, []);

  // Get navigation timing
  const getNavigationTiming = useCallback(() => {
    if (!("performance" in window) || !performance.timing) return;

    const timing = performance.timing;

    setMetrics((prev) => ({
      ...prev,
      domContentLoaded:
        timing.domContentLoadedEventEnd - timing.navigationStart,
      loadComplete: timing.loadEventEnd - timing.navigationStart,
    }));
  }, []);

  // Get network information
  const getNetworkInfo = useCallback(() => {
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    if (connection) {
      setMetrics((prev) => ({
        ...prev,
        connection: {
          effectiveType: connection.effectiveType || "unknown",
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
        },
      }));
    }
  }, []);

  // Get memory information
  const getMemoryInfo = useCallback(() => {
    const memory = (performance as any).memory;

    if (memory) {
      setMetrics((prev) => ({
        ...prev,
        memory: {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        },
      }));
    }
  }, []);

  // Calculate performance score and recommendations
  const getMetricsSummary = useCallback(() => {
    let score = 100;
    const recommendations: string[] = [];

    // FCP scoring (good: <1.8s, poor: >3.0s)
    if (metrics.fcp) {
      if (metrics.fcp > 3000) {
        score -= 20;
        recommendations.push("Optimize First Contentful Paint (>3s)");
      } else if (metrics.fcp > 1800) {
        score -= 10;
        recommendations.push("Improve First Contentful Paint (1.8-3s)");
      }
    }

    // LCP scoring (good: <2.5s, poor: >4.0s)
    if (metrics.lcp) {
      if (metrics.lcp > 4000) {
        score -= 25;
        recommendations.push("Optimize Largest Contentful Paint (>4s)");
      } else if (metrics.lcp > 2500) {
        score -= 15;
        recommendations.push("Improve Largest Contentful Paint (2.5-4s)");
      }
    }

    // FID scoring (good: <100ms, poor: >300ms)
    if (metrics.fid) {
      if (metrics.fid > 300) {
        score -= 20;
        recommendations.push("Reduce First Input Delay (>300ms)");
      } else if (metrics.fid > 100) {
        score -= 10;
        recommendations.push("Improve First Input Delay (100-300ms)");
      }
    }

    // CLS scoring (good: <0.1, poor: >0.25)
    if (metrics.cls) {
      if (metrics.cls > 0.25) {
        score -= 15;
        recommendations.push("Reduce Cumulative Layout Shift (>0.25)");
      } else if (metrics.cls > 0.1) {
        score -= 8;
        recommendations.push("Improve Cumulative Layout Shift (0.1-0.25)");
      }
    }

    // Memory usage scoring
    if (metrics.memory) {
      const memoryUsagePercent =
        (metrics.memory.usedJSHeapSize / metrics.memory.jsHeapSizeLimit) * 100;
      if (memoryUsagePercent > 80) {
        score -= 10;
        recommendations.push("High memory usage detected (>80%)");
      } else if (memoryUsagePercent > 60) {
        score -= 5;
        recommendations.push("Monitor memory usage (60-80%)");
      }
    }

    // Connection quality
    if (
      metrics.connection?.effectiveType === "slow-2g" ||
      metrics.connection?.effectiveType === "2g"
    ) {
      recommendations.push("Optimize for slower connections detected");
    }

    const grade: "A" | "B" | "C" | "D" | "F" =
      score >= 90
        ? "A"
        : score >= 80
        ? "B"
        : score >= 70
        ? "C"
        : score >= 60
        ? "D"
        : "F";

    return {
      score: Math.max(0, score),
      grade,
      recommendations,
    };
  }, [metrics]);

  // Initialize monitoring
  useEffect(() => {
    // Mark initial load
    markTime("app-start");

    // Get initial metrics
    getCoreWebVitals();
    getNavigationTiming();
    getNetworkInfo();
    getMemoryInfo();

    // Wait for page load to complete
    const handleLoad = () => {
      markTime("app-loaded");
      setIsLoading(false);

      // Update metrics after load
      setTimeout(() => {
        getNavigationTiming();
        getMemoryInfo();
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Periodic memory monitoring
    const memoryInterval = setInterval(() => {
      getMemoryInfo();
    }, 10000); // Every 10 seconds

    return () => {
      window.removeEventListener("load", handleLoad);
      clearInterval(memoryInterval);
    };
  }, [
    markTime,
    getCoreWebVitals,
    getNavigationTiming,
    getNetworkInfo,
    getMemoryInfo,
  ]);

  return {
    metrics,
    isLoading,
    markTime,
    measureTime,
    getMetricsSummary,
  };
};
