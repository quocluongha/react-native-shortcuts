"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _NativeShortcuts = _interopRequireDefault(require("./NativeShortcuts.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const emitterModule = _reactNative.Platform.select({
  ios: _NativeShortcuts.default,
  android: null
});
const shortcutsEventEmitter = new _reactNative.NativeEventEmitter(emitterModule);
async function addShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return _NativeShortcuts.default.addShortcut(params);
}
async function updateShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return _NativeShortcuts.default.updateShortcut(params);
}
async function removeShortcut(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return _NativeShortcuts.default.removeShortcut(id);
}
async function removeAllShortcuts() {
  return _NativeShortcuts.default.removeAllShortcuts();
}
async function getShortcutById(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return _NativeShortcuts.default.getShortcutById(id);
}
async function isShortcutExists(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return _NativeShortcuts.default.isShortcutExists(id);
}
async function isShortcutSupported() {
  return _NativeShortcuts.default.isShortcutSupported();
}
async function getInitialShortcutId() {
  return _NativeShortcuts.default.getInitialShortcutId();
}
function addOnShortcutUsedListener(callback) {
  if (typeof _NativeShortcuts.default.onShortcutUsed === "function") {
    return _NativeShortcuts.default.onShortcutUsed(callback);
  }
  return shortcutsEventEmitter.addListener('onShortcutUsed', callback);
}
var _default = exports.default = {
  addShortcut,
  updateShortcut,
  removeShortcut,
  removeAllShortcuts,
  getShortcutById,
  isShortcutExists,
  isShortcutSupported,
  getInitialShortcutId,
  addOnShortcutUsedListener
};
//# sourceMappingURL=index.js.map