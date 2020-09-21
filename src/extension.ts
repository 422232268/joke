import { ApiService } from './servce';
import {JokeDateProvider} from './jokeDateProvider'
/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 21:52:48
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-09-21 21:06:30
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "joke" is now active!');

    const service = new ApiService();

    vscode.window.registerTreeDataProvider('view.joke', new JokeDateProvider(service));

    const panel = vscode.window.createWebviewPanel(
        'webview',
        'joke-笑话',
        vscode.ViewColumn.One,
        {

        }
    );

    let showcontent = vscode.commands.registerCommand('joke.click', (hashId,content) => {
        panel.webview.html = `
        <html>
            <body>
                <div>${content}----${hashId}</div>
            </body>
        </html>`
    });

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('joke.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from demo!');
	});

    context.subscriptions.push(disposable);

    context.subscriptions.push(showcontent);

}

// this method is called when your extension is deactivated
export function deactivate() {}
