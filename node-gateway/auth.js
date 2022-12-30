const Keycloak = require("keycloak-connect");
const session = require("express-session");

const setupAuth = (app, routes) => {
  var memoryStore = new session.MemoryStore();
  var keycloak = new Keycloak({ store: memoryStore });

  app.use(
    session({
      secret: "<Radnom Token>",
      resave: false,
      saveUninitialized: true,
      store: memoryStore,
    })
  );

  app.use(keycloak.middleware());

  routes.forEach((element) => {
    if (element.auth) {
      app.use(element.url, keycloak.protect(), function (req, res, next) {
        next();
      });
    }
  });
};

exports.setupAuth=setupAuth;
