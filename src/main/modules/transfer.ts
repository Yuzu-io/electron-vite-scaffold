import { BrowserWindow } from "electron";

// 不同窗口之间传递消息
export function transferData(win: BrowserWindow, data: any | null) {
  // win.webContents.on('did-finish-load', () => {
  win.on('ready-to-show', () => {
    console.log(`窗口创建完成,数据：`, data);
    win.webContents.send('pull:transfer:data', data)
  })
  // })
}
