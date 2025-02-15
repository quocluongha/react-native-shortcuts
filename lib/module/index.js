"use strict";

import { Platform, NativeEventEmitter } from 'react-native';
import RNShortcuts from "./NativeShortcuts.js";
const emitterModule = Platform.select({
  ios: RNShortcuts,
  android: null
});
const shortcutsEventEmitter = new NativeEventEmitter(emitterModule);
async function addShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return RNShortcuts.addShortcut(params);
}
async function updateShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return RNShortcuts.updateShortcut(params);
}
async function removeShortcut(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return RNShortcuts.removeShortcut(id);
}
async function removeAllShortcuts() {
  return RNShortcuts.removeAllShortcuts();
}
async function getShortcutById(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return RNShortcuts.getShortcutById(id);
}
async function isShortcutExists(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return RNShortcuts.isShortcutExists(id);
}
async function isShortcutSupported() {
  return RNShortcuts.isShortcutSupported();
}
async function getInitialShortcutId() {
  return RNShortcuts.getInitialShortcutId();
}
function addOnShortcutUsedListener(callback) {
  if (typeof RNShortcuts.onShortcutUsed === "function") {
    return RNShortcuts.onShortcutUsed(callback);
  }
  return shortcutsEventEmitter.addListener('onShortcutUsed', callback);
}
export default {
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