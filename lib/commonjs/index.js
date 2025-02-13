"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _NativeShortcuts = _interopRequireDefault(require("./NativeShortcuts.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const nativeModule = _reactNative.Platform.OS === 'ios' ? _NativeShortcuts.default : null;
const shortcutsEventEmitter = new _reactNative.NativeEventEmitter(nativeModule);
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
  shortcutsEventEmitter.addListener('onShortcutUsed', callback);
}
function removeOnShortcutUsedListener() {
  shortcutsEventEmitter.removeAllListeners('onShortcutUsed');
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
  addOnShortcutUsedListener,
  removeOnShortcutUsedListener
};
//# sourceMappingURL=index.js.map