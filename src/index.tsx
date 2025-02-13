import {
  Platform,
  NativeEventEmitter,
  type NativeModule,
} from 'react-native';
import NativeShortcuts, { type ShortcutParamsType, type ShortcutResponseType } from './NativeShortcuts';

const nativeModule = Platform.OS === 'ios' ? NativeShortcuts : null;
const shortcutsEventEmitter = new NativeEventEmitter(nativeModule as unknown as NativeModule);

async function addShortcut(
  params: ShortcutParamsType
): Promise<ShortcutResponseType> {
  if (!params.id || !params.title) {
    return Promise.reject('Invalid request parameters');
  }

  return NativeShortcuts.addShortcut(params);
}

async function updateShortcut(
  params: ShortcutParamsType
): Promise<ShortcutResponseType> {
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

async function getShortcutById(id: string): Promise<ShortcutResponseType> {
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
