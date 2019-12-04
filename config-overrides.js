const {fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = function override(config, env) {
	config = fixBabelImports('import', {
		libraryName      : 'antd-mobile',
		libraryDirectory : 'es',
		style            : true
	})(config, env);

	config = addLessLoader({
		javascriptEnabled : true
	})(config, env);
	return config;
};