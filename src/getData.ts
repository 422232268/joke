/*
 * @Autor: za-wangxuezhong
 * @data: 2020-09-20 22:22:31
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 13:44:30
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {zaTreeItems, zaTreeItem} from './define';
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked = require("./marked.min.js");
// const marked = require("./marked");
export class ApiService {
    private description: string = ''
    private items: Array<zaTreeItem> = [];
    // private devPath: string = '../';
    private devPath: string = './';
    getChapter(description: any): Array<zaTreeItem> {
        this.items = [];
        let data: Array<string> = [];
        this.description = description
        data = fs.readdirSync((join(__dirname, this.devPath, `./file/article/${this.description}/`)));
        for (let i = 0; i < data.length; i++) {
            const za = {
                hashId: data[i],
                content: data[i],
                position: this.description,
            }
            this.items.push(new zaTreeItem(za));
        }
        return this.items;
    }
    getContent(position:string, Chapter:string): any {
        let data: string = '';
        data = fs.readFileSync((join(__dirname, this.devPath, `./file/article/${position}/${Chapter}`)));
        try {
            return marked(data.toString());
        } catch (e){
            console.log(e)
        }
    }
}

export class ApiServices {
    private items: Array<zaTreeItems> = [];
    // private devPath: string = '../';
    private devPath: string = './';
    getChapters(): Array<zaTreeItems> {
        this.items = [];
        let data: Array<string> = [];
        data = fs.readdirSync((join(__dirname, this.devPath, './file/article')));
        for (let i = 0; i < data.length; i++) {
            const za = {
                hashId: data[i],
                content: data[i],
                position: ''
            }
            this.items.push(new zaTreeItems(za));
        }
        return this.items;
    }
}
