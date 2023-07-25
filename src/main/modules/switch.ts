import { BrowserWindow } from 'electron';
import { ElectronWindowType } from '../window-type';
import WindowFactory from '../window';

export function switchWindow(winType: ElectronWindowType, win: BrowserWindow) {
  win.close()
  return WindowFactory.createWindow(winType)
}
