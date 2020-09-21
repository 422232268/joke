/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:10:52
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-09-21 13:19:56
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {TreeItem, TreeItemCollapsibleState} from 'vscode';

export interface Joke {
    content: string;
    hashId: string;
    time: string;
}

export class JokeTreeItem extends TreeItem {

    constructor(info: Joke) {
        super('', TreeItemCollapsibleState.None);
        this.label = '笑话';
        this.id = info.hashId;
        this.description = info.content;
        this.command = {
            title: '今日笑话',
            command: 'joke.click',
            arguments: [
                info.hashId,
                info.content
            ],
        };
        this.tooltip = '点击查看详情';
    }
}
