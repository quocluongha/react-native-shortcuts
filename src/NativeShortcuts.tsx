import { type TurboModule, TurboModuleRegistry } from 'react-native';
import type { EventEmitter } from 'react-native/Libraries/Types/CodegenTypes';

export interface ShortcutResponseType {
  id: string;
  title: string;
  subTitle?: string;
  longLabel?: string;
}

export interface ShortcutParamsType extends ShortcutResponseType {
  iconName?: string;
}

export interface Spec extends TurboModule {
  addShortcut(params: ShortcutParamsType): Promise<ShortcutResponseType>;
  updateShortcut(params: ShortcutParamsType): Promise<ShortcutResponseType>;
  removeShortcut(id: string): Promise<boolean>;
  removeAllShortcuts(): Promise<boolean>;
  getShortcutById(id: string): Promise<ShortcutResponseType>;
  isShortcutExists(id: string): Promise<boolean>;
  isShortcutSupported(): Promise<boolean>;
  getInitialShortcutId(): Promise<string>;
  readonly onShortcutUsed: EventEmitter<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>("RNShortcuts");