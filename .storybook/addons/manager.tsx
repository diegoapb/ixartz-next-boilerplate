import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';
import { Tool } from './Tool';
import { Icons, IconButton } from '@storybook/components';




const ToolbarIcon: React.FC = () => {
  // Agrega aquí el contenido de tu icono de toolbar
  return (
    <button onClick={() => alert('Hiciste clic en el botón del toolbar')}>
      Mi Addon
    </button>
  );
};


// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    title: 'Example Storybook toolbar',
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    render: ({ active }) => (
      <IconButton active={active} title="Show a Storybook toolbar">
        <Icons icon="outline" />
      </IconButton>
    ),
  }); 

});