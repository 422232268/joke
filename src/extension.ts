
/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 21:52:48
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 11:12:45
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import * as vscode from 'vscode';
import {ApiService, ApiServices} from './getData';
import {zaDataProvider} from './defineDataProvider'
import snippet from './snippet';

export function activate(context: vscode.ExtensionContext) {
    const service = new ApiService();
    const services = new ApiServices();
    vscode.window.registerTreeDataProvider('view.za', new zaDataProvider(service, services));
    const panel = vscode.window.createWebviewPanel(
        'webview',
        'za-readme',
        vscode.ViewColumn.One,
        {
        }
    );
    let showcontent = vscode.commands.registerCommand('za.click', (hashId,content, position: string) => {
        panel.webview.html = `
        <html>
            <body>${service.getContent(position,content)}</body>
        </html?
        `;
    });

    let showtitle = vscode.commands.registerCommand('za.showtitle', (hashId, content) => {
        services.getChapters();
    });
	let disposable = vscode.commands.registerCommand('za.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from demo!');
    });

    snippet(context);
    context.subscriptions.push(disposable);
    context.subscriptions.push(showcontent);
    context.subscriptions.push(showtitle);
}
export function deactivate() {}
