const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
            //   '@primary-color': '#ffffff',
            // '@layout-header-background': '#ffcc00',
            // "@select-item-selected-bg":"#666666",
           '@menu-dark-color': '#000000',
'@menu-dark-danger-color':'red',
'@menu-dark-bg':'#ffffff' ,
// '@menu-dark-arrow-color':'' ,
'@menu-dark-inline-submenu-bg':'#0ff' ,
'@menu-dark-highlight-color':'#ffffff',
'@menu-dark-item-active-bg':'#666666' ,
// '@menu-dark-item-active-danger-bg':'#000fff',
// '@menu-dark-selected-item-icon-color':'#',
'@menu-dark-selected-item-text-color':'#00ff00',
'@menu-dark-item-hover-bg':'#ffcc00' ,

           },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};