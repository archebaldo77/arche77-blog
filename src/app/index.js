'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.App = void 0;
// functions;
var theme_provider_1 = require('@/app/providers/theme-provider');
var lib_1 = require('@/shared/lib');
// styles;
var index_module_scss_1 = require('./index.module.scss');
// components;
var header_1 = require('@/widgets/header');
var app_router_1 = require('@/app/providers/app-router');
var sidebar_1 = require('@/widgets/sidebar');
var App = function (props) {
  var theme = (0, theme_provider_1.useTheme)()[0];
  var className = props.className;
  return (
    <div
      className={(0, lib_1.classNames)(index_module_scss_1.default.app, {}, [
        theme,
        className !== null && className !== void 0 ? className : '',
      ])}
    >
      <header_1.Header />
      <div
        className={(0, lib_1.classNames)(
          index_module_scss_1.default['app-content']
        )}
      >
        <sidebar_1.Sidebar />
        <app_router_1.AppRouter />
      </div>
    </div>
  );
};
exports.App = App;
