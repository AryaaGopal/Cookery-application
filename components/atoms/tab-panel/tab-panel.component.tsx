import React, { JSX } from 'react';

import { TabPanelProps } from './tab-panel.types';

/**
 * TabPanel Component
 * @param props [TabPanelProps] - Props for TabPanel component
 * @param props.children [ReactNode] - Children to be wrapped by the TabPanel.
 * @param props.id [string] - Id of the component.
 * @param props.className [string] - Additional class for the component.
 * @returns [JSX.Element] - TabPanel component
 */
function TabPanel({ children, id, className = '' }: TabPanelProps): JSX.Element {
  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${id}`}
      aria-labelledby={`vertical-tab-panel-${id}`}
      className={`w-full h-full p-4 bg-white rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default TabPanel;
