const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (platform === "web" && moduleName === "crypto") {
      return {
        type: "empty",
      };
    }

    // Ensure you call the default resolver.
    return context.resolveRequest(context, moduleName, platform);
  };

  return config;
})();
