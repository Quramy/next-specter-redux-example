console.log("hello");
module.exports = {
  webpack: (config, { isServer }) => {
    // config.devtool =
    //   process.env.NODE_ENV === "production"
    //     ? "source-map"
    //     : "eval-cheap-module-source-map";

    if (!isServer) {
      config.resolve.alias["@specter/client"] = "@specter/client/esm/browser";
    }
    return config;
  },
};
