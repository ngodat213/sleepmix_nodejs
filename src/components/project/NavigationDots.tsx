import { useState, useEffect } from 'react';

export type Section = 'hero' | 'screenshots' | 'features' | 'tech' | 'cta';

export interface NavigationDotsProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function NavigationDots({ activeSection, onSectionChange }: NavigationDotsProps) {
  const sections: Section[] = ['hero', 'screenshots', 'features', 'tech', 'cta'];

  return (
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionChange(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-gray-900 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Navigate to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
} 