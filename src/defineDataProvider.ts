/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:38:08
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-08 06:34:10
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {zaTreeItem} from './define';
import {TreeDataProvider, EventEmitter, Event} from 'vscode';
import {ApiService} from './data';

export class zaDataProvider implements TreeDataProvider<zaTreeItem>{
    private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();

    readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;
    private service: ApiService;

    constructor(service: ApiService) {
        console.log(service);
        this.service = service;
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: zaTreeItem) {
        return element;
    }

    getChildren(element: zaTreeItem) {
        return this.service.getChapter();
    }

    getParent(element: zaTreeItem) {
        return null;
    }

}
