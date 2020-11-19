/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-11-02 10:34:29
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-03 10:54:09
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import * as vscode from 'vscode';

/**
 * @param {*} document
 * @param {*} position
 */
function provideCompletionItems(document: any, position: any) {
    const line = document.lineAt(position);
    const lineText: string = line.text.substring(0, position.character);
    let reg = /^(\s|\.)+.+(Obj.|Arr.|Num.|Str.|Bln.)$/g;
    // console.log(reg.test(lineText));
    if (reg.test(lineText)) {
        const json = require(`./file/${lineText.substring(lineText.length - 4)}json`);
        console.log(json);
        return json.map((dep: any) => {
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Snippet);
        })
    }
}


function resolveCompletionItem() {
    return null;
}

export default function (context: any) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems,
        resolveCompletionItem
    }, '.'));
};

