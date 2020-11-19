/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:38:08
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-19 11:26:26
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import * as vscode from 'vscode';
import {zaTreeItem, zaTreeItems} from './define';
import {TreeDataProvider, EventEmitter, Event} from 'vscode';
import {ApiService, ApiServices} from './data';

export class zaDataProvider implements TreeDataProvider<zaTreeItem>{
    private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();

    readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;
    private service: ApiService;
    private services: ApiServices;

    constructor(service: ApiService, services: ApiServices) {
        this.service = service;
        this.services = services;
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element: zaTreeItem | zaTreeItems) {
        return {
            label: element.label,
            description: element.description,
            id: element.id,
            collapsibleState: element.isDirectory ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None,
            command: !element.isDirectory ? element.command : undefined
        };
    }

    getChildren(element: zaTreeItem | zaTreeItems) {
        if (!element) return this.services.getChapters();
        return this.service.getChapter();
    }

    getParent(element: zaTreeItem) {
        return null;
    }

}
