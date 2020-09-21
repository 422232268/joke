/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:38:08
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-09-21 21:30:34
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {JokeTreeItem} from './joke';
import {TreeDataProvider, EventEmitter, Event} from 'vscode';
import {ApiService} from './servce';

export class JokeDateProvider implements TreeDataProvider<JokeTreeItem>{
    private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();

    readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;
    private service: ApiService;

    constructor(service: ApiService) {
        this.service = service;
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: JokeTreeItem) {
        return element;
    }

    getChildren(element: JokeTreeItem) {
        return this.service.getJokes('1', '23b9da300d551ea41a36559234c5dc64');
    }

    getParent(element: JokeTreeItem) {
        return null;
    }

}
