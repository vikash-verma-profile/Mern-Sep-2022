const Routes = [
  {
    url: "/api/order",
    auth: false,
    proxy: {
      target: "https://www.google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/order`]: "",
      },
    },
  },
];

exports.Routes=Routes;
