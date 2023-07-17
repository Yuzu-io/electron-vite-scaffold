import { BrowserWindow } from 'electron';
import { ElectronWindowType } from '../window-type';

import AuthWindow from '../window/authWindow';
import MainWindow from '../window/mainWindow';

export function switchWindow(winType: ElectronWindowType, win: BrowserWindow) {
  win.close()
  switch (winType) {
    case ElectronWindowType.Auth:
      return new AuthWindow();
    case ElectronWindowType.Main:
      return new MainWindow();
  }
}
