/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:10:52
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-17 04:28:48
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {TreeItem, TreeItemCollapsibleState} from 'vscode';

export interface define {
    content: string;
    hashId: string;
}

export class zaTreeItem extends TreeItem {

    constructor(info: define) {
        super('', TreeItemCollapsibleState.None);
        this.label = 'ZA';
        this.id = info.hashId;
        this.description = info.content;
        this.command = {
            title: 'ZAREADME',
            command: 'za.click',
            arguments: [
                info.hashId,
                info.content
            ],
        };
        this.tooltip = '点击查看详情';
    }
    isDirectory = false;
}
export class zaTreeItems extends TreeItem {

    constructor(info: define) {
        super('', TreeItemCollapsibleState.Expanded);
        this.label = 'ZA';
        this.id = info.hashId;
        this.description = info.content;
        this.command = {
            title: 'ZAREADME',
            command: 'za.showtitle',
            arguments: [
                info.hashId,
                info.content
            ],
        };
        this.tooltip = '点击查看目录';
    }
    isDirectory = true;
}
