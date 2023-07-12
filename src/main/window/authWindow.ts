import { ElectronWindowType } from '../window-type'
import CommonWindow from './common'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export default class AuthWindow extends CommonWindow {
  constructor() {
    super({
      width: 300,
      height: 450,
      frame: false, // 无边框
      resizable: false, // 不允许改变窗口大小
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        // Use pluginOptions.nodeIntegration, leave this alone
        // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION as unknown as boolean,
        contextIsolation: !(process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      },
      windowType: ElectronWindowType.Auth,
      loadUrl: (host) => `${host}/auth`
    })
  }
}
