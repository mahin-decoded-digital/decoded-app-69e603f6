import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-35% 0px -45% 0px',
          threshold: 0.2,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};
