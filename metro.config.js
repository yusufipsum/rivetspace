const blacklist = require('metro-config/src/defaults/exclusionList');
const { getDefaultConfig } = require("metro-config");


module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }, transformer,
  } = await getDefaultConfig();
  return {  
    resolver: {
      blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
    
  };
})();