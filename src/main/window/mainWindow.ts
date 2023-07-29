import { ElectronWindowType } from '../window-type'
import CommonWindow from './common'
import { join } from 'path'

const icon = join(__dirname, '../../../resources/icon.png')

export default class MainWindow extends CommonWindow {
  constructor() {
    super({
      width: 1200,
      height: 800,
      show: false,
      frame: false, // 无边框
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        // Use pluginOptions.nodeIntegration, leave this alone
        // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION as unknown as boolean,
        contextIsolation: !(process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false,
        // webSecurity:false
      },
      windowType: ElectronWindowType.Main,
      loadUrl: (host) => `${host}#main`
    })
  }
}
