import { ElectronWindowType } from '../window-type';
import AuthWindow from './authWindow';
import MainWindow from './mainWindow';

// 实现工厂方法
export default class WindowFactory{
  static createWindow(winType:string) {
    switch (winType) {
      case ElectronWindowType.Auth:
        return new AuthWindow();
      case ElectronWindowType.Main:
        return new MainWindow();
      default:
        throw new Error(`Invalid animal type: ${winType}`)
    }
  }
}
