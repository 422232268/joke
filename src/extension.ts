
/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 21:52:48
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-08 06:40:28
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import * as vscode from 'vscode';
import {ApiService} from './data';
import {zaDataProvider} from './defineDataProvider'
export function activate(context: vscode.ExtensionContext) {
    const service = new ApiService();
    vscode.window.registerTreeDataProvider('view.za', new zaDataProvider(service));
    const panel = vscode.window.createWebviewPanel(
        'webview',
        'za-readme',
        vscode.ViewColumn.One,
        {
        }
    );
    let showcontent = vscode.commands.registerCommand('za.click', (hashId,content) => {
        panel.webview.html = `
        <html>
            <body>${service.getContent(content)}</body>
        </html?
        `;
    });
	let disposable = vscode.commands.registerCommand('za.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from demo!');
	});
    context.subscriptions.push(disposable);
    context.subscriptions.push(showcontent);

}
export function deactivate() {}
