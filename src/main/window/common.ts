import { BrowserWindow, shell, type BrowserWindowConstructorOptions } from 'electron'
import { ElectronWindowType } from '../window-type'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

import { trimEnd } from 'lodash'

interface IBrowserWindowConstructorOptions extends BrowserWindowConstructorOptions {
  windowType: ElectronWindowType
  loadUrl: (host: string) => string
}

export default class CommonWindow {
  private win: BrowserWindow | null
  private windowType: ElectronWindowType
  private loadUrlFormatter: IBrowserWindowConstructorOptions['loadUrl']

  constructor(options: IBrowserWindowConstructorOptions) {
    this.win = new BrowserWindow(options)
    this.windowType = options.windowType
    this.loadUrlFormatter = options.loadUrl
    this.initWindow()
  }

  private async initWindow() {
    if (this.win) {
      this.win.on('ready-to-show', () => {
        this.win!.show()
      })

      this.win.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
      })

      // HMR for renderer base on electron-vite cli.
      // Load the remote URL for development or the local html file for production.
      if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        this.loadUrl(process.env['ELECTRON_RENDERER_URL'])
      } else {
        // 注意
        this.win.loadFile(join(__dirname, `../renderer/${this.windowType}.html`))
      }

      this.win?.on('close', () => {
        // 窗口退出时发送
        ; (this.win as BrowserWindow).webContents.send('window-close')
        this.win = null // 删除引用，释放内存，防止内存泄露
      })
    } else Promise.reject(new Error('Variable window is undefined.'))
  }

  private loadUrl(url: string): Promise<void> {
    if (!this.win) return Promise.reject()
    return this.win.loadURL(this.loadUrlFormatter(trimEnd(url, '/')))
  }

  /**
   * 获取窗口类型
   * @returns {ElectronWindowType}
   */
  getType() {
    return this.windowType
  }

  /**
   * 获取 Window 实例
   * @returns {BrowserWindow} Electron 视窗实例
   */
  getWindow() {
    return this.win
  }

  /**
   * 软关闭页面
   */
  close() {
    this.win && this.win.close()
  }

  /**
   * 销毁页面实例
   */
  destroy() {
    this.win && this.win.destroy()
  }
}
