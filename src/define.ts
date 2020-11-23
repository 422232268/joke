/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:10:52
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 13:46:17
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {TreeItem, TreeItemCollapsibleState} from 'vscode';

export interface define {
    content: string;
    hashId: string;
}
export interface Square extends define {
    position: string;
}

export class zaTreeItem extends TreeItem {
    position: string;
    constructor(info: Square) {
        super('', TreeItemCollapsibleState.None);
        this.label = 'ZA';
        this.id = info.hashId;
        this.description = info.content;
        this.command = {
            title: 'ZAREADME',
            command: 'za.click',
            arguments: [
                info.hashId,
                info.content,
                info.position,
            ],
        };
        this.tooltip = '点击查看详情';
        this.position = info.position;
    }
    isDirectory = false;
}
export class zaTreeItems extends TreeItem {
    position: string;
    constructor(info: Square) {
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
        this.position = info.position;
    }
    isDirectory = true;
}
