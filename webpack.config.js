const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const RetentionSchedulesModuleFederationConfigPlugin = withModuleFederationPlugin({

  name: 'gdmt-mfe-retentionschedules',

  exposes: {
    './RetentionSchedulesModule': './src/app/retention-schedules/retention-schedules.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

RetentionSchedulesModuleFederationConfigPlugin.output.publicPath = 'http://localhost:4201/'
module.exports = RetentionSchedulesModuleFederationConfigPlugin;

