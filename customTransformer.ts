var tsTransformer = require('react-native-typescript-transformer');
var svgTransformer = require("react-native-svg-transformer");

module.exports.transform = function({ src, filename, options }) {
 if (filename.endsWith(".svg")) {
    return svgTransformer.transform({ src, filename, options });
  }  else {
    return tsTransformer.transform({ src, filename, options });
  } 
};
