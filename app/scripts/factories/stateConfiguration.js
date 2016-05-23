app.factory('StateConfiguration', function () {
  function StateConfigurationInstance(cd, server, enabled) {
    return {
      cd : cd,
      server : server,
      enabled : enabled
    };
  }
  return {
    createNew: function (cd, server, enabled) {
      return new StateConfigurationInstance(cd, server, enabled);
    }
  };
});