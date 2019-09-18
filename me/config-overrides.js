 const { override, fixBabelImports } = require('customize-cra');

 module.exports = override(
       fixBabelImports('import', {
             libraryName: 'antd-mobile',
         style: 'css',
       }),
 );
//Meng添加的引入Design Mobile ui