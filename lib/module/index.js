"use strict";

import { Platform, NativeEventEmitter } from 'react-native';
import NativeShortcuts from "./NativeShortcuts.js";
const nativeModule = Platform.OS === 'ios' ? NativeShortcuts : null;
const shortcutsEventEmitter = new NativeEventEmitter(nativeModule);
async function addShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return NativeShortcuts.addShortcut(params);
}
async function updateShortcut(params) {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }
  return NativeShortcuts.updateShortcut(params);
}
async function removeShortcut(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.removeShortcut(id);
}
async function removeAllShortcuts() {
  return NativeShortcuts.removeAllShortcuts();
}
async function getShortcutById(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.getShortcutById(id);
}
async function isShortcutExists(id) {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.isShortcutExists(id);
}
async function isShortcutSupported() {
  return NativeShortcuts.isShortcutSupported();
}
async function getInitialShortcutId() {
  return NativeShortcuts.getInitialShortcutId();
}
function addOnShortcutUsedListener(callback) {
  shortcutsEventEmitter.addListener('onShortcutUsed', callback);
}
function removeOnShortcutUsedListener() {
  shortcutsEventEmitter.removeAllListeners('onShortcutUsed');
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
  addOnShortcutUsedListener,
  removeOnShortcutUsedListener
};
//# sourceMappingURL=index.js.map