import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

interface NavigationProps {
  name: string;
  href: string;
}

export function useAnnotatedLinks(
  navigation: NavigationProps[],
  currentPath: string,
  isReady: boolean
) {
  const linkRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  useEffect(() => {
    if (!isReady) return;

    Object.values(linkRefs.current).forEach((el) => {
      if (el) {
        const existingAnnotation = el.dataset.annotation;
        if (existingAnnotation) {
          el.dataset.annotation = "";
        }
      }
    });

    navigation.forEach((item) => {
      if (currentPath === item.href && linkRefs.current[item.name]) {
        const el = linkRefs.current[item.name];
        if (el) {
          const annotation = annotate(el, {
            type: "underline",
            color: "#db9f6a",
          });
          annotation.show();
          el.dataset.annotation = "active";
        }
      }
    });
  }, [currentPath, navigation, isReady]);

  return linkRefs;
}
