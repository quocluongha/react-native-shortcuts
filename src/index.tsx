import {
  Platform,
  NativeEventEmitter,
} from 'react-native';
import NativeShortcuts from './NativeShortcuts';

const nativeModule: any = Platform.OS === 'ios' ? NativeShortcuts : null;
const shortcutsEventEmitter = new NativeEventEmitter(nativeModule);

export interface shortcutResponseType {
  id: string;
  title: string;
  subTitle?: string;
  longLabel?: string;
}

export interface shortcutParamsType extends shortcutResponseType {
  iconName?: string;
}

async function addShortcut(
  params: shortcutParamsType
): Promise<shortcutResponseType> {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }

  return NativeShortcuts.addShortcut(params);
}

async function updateShortcut(
  params: shortcutParamsType
): Promise<shortcutResponseType> {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }

  return NativeShortcuts.updateShortcut(params);
}

async function removeShortcut(id: string): Promise<boolean> {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.removeShortcut(id);
}

async function removeAllShortcuts(): Promise<boolean> {
  return NativeShortcuts.removeAllShortcuts();
}

async function getShortcutById(id: string): Promise<shortcutResponseType> {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.getShortcutById(id);
}

async function isShortcutExists(id: string): Promise<boolean> {
  if (!id) {
    return Promise.reject('Invalid id');
  }
  return NativeShortcuts.isShortcutExists(id);
}

async function isShortcutSupported(): Promise<boolean> {
  return NativeShortcuts.isShortcutSupported();
}

async function getInitialShortcutId(): Promise<string> {
  return NativeShortcuts.getInitialShortcutId();
}

function addOnShortcutUsedListener(
  callback: (id: string) => void
) {
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
