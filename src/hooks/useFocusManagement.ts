import { useEffect, useRef, useCallback } from "react";

interface FocusManagementOptions {
  autoFocus?: boolean;
  restoreFocus?: boolean;
  trapFocus?: boolean;
}

export const useFocusManagement = (options: FocusManagementOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Focusable elements selector
  const focusableElementsSelector = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
    "[contenteditable]",
  ].join(", ");

  // Get all focusable elements within a container
  const getFocusableElements = useCallback(
    (container: HTMLElement): HTMLElement[] => {
      return Array.from(
        container.querySelectorAll(focusableElementsSelector)
      ).filter((element) => {
        return (
          element instanceof HTMLElement &&
          !element.hasAttribute("disabled") &&
          element.offsetWidth > 0 &&
          element.offsetHeight > 0 &&
          getComputedStyle(element).visibility !== "hidden"
        );
      }) as HTMLElement[];
    },
    []
  );

  // Focus the first focusable element
  const focusFirst = useCallback(() => {
    if (!containerRef.current) return false;

    const focusableElements = getFocusableElements(containerRef.current);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
      return true;
    }
    return false;
  }, [getFocusableElements]);

  // Focus the last focusable element
  const focusLast = useCallback(() => {
    if (!containerRef.current) return false;

    const focusableElements = getFocusableElements(containerRef.current);
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus();
      return true;
    }
    return false;
  }, [getFocusableElements]);

  // Focus trap implementation
  const trapFocus = useCallback(
    (event: KeyboardEvent) => {
      if (!options.trapFocus || !containerRef.current) return;

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements(containerRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      if (event.shiftKey) {
        // Shift + Tab (moving backwards)
        if (activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab (moving forwards)
        if (activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [options.trapFocus, getFocusableElements]
  );

  // Store the currently focused element (for restoration later)
  const storeFocus = useCallback(() => {
    previousActiveElementRef.current = document.activeElement as HTMLElement;
  }, []);

  // Restore focus to the previously focused element
  const restoreFocus = useCallback(() => {
    if (
      previousActiveElementRef.current &&
      typeof previousActiveElementRef.current.focus === "function"
    ) {
      previousActiveElementRef.current.focus();
      previousActiveElementRef.current = null;
    }
  }, []);

  // Setup focus management on mount
  useEffect(() => {
    if (options.autoFocus && containerRef.current) {
      storeFocus();
      focusFirst();
    }

    if (options.trapFocus) {
      document.addEventListener("keydown", trapFocus);
    }

    return () => {
      if (options.trapFocus) {
        document.removeEventListener("keydown", trapFocus);
      }

      if (options.restoreFocus) {
        restoreFocus();
      }
    };
  }, [
    options.autoFocus,
    options.trapFocus,
    options.restoreFocus,
    focusFirst,
    trapFocus,
    storeFocus,
    restoreFocus,
  ]);

  return {
    containerRef,
    focusFirst,
    focusLast,
    storeFocus,
    restoreFocus,
    getFocusableElements,
  };
};

// Hook for managing roving tabindex (useful for complex widgets)
export const useRovingTabIndex = (
  items: HTMLElement[],
  activeIndex: number = 0
) => {
  useEffect(() => {
    items.forEach((item, index) => {
      if (item) {
        item.setAttribute("tabindex", index === activeIndex ? "0" : "-1");
      }
    });
  }, [items, activeIndex]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent, currentIndex: number) => {
      let newIndex = currentIndex;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          newIndex = (currentIndex + 1) % items.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          break;
        case "Home":
          event.preventDefault();
          newIndex = 0;
          break;
        case "End":
          event.preventDefault();
          newIndex = items.length - 1;
          break;
        default:
          return currentIndex;
      }

      items[newIndex]?.focus();
      return newIndex;
    },
    [items]
  );

  return { handleKeyDown };
};
