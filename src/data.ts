/*
 * @Autor: za-wangxuezhong
 * @data: 2020-09-20 22:22:31
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-19 11:22:02
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {zaTreeItems, zaTreeItem} from './define';
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked = require("marked");
console.log('12344356789876545678')
console.log(marked);
export class ApiService {
    private items: Array<zaTreeItem> = [];
    // private devPath: string = '../';
    private devPath: string = './';
    getChapter(): Array<zaTreeItem> {
        let data: Array<string> = [];
        data = fs.readdirSync((join(__dirname, this.devPath,'./file/article/es6/')));
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            const za = {
                hashId: data[i],
                content: data[i],
            }
            this.items.push(new zaTreeItem(za));
        }
        return this.items;
    }
    getContent(Chapter:string): any {
        let data: string = '';
        data = fs.readFileSync((join(__dirname, this.devPath,`./file/article/es6/${Chapter}`)));
        return marked(data.toString());
    }
}

export class ApiServices {
    private items: Array<zaTreeItems> = [];
    // private devPath: string = '../';
    private devPath: string = './';
    getChapters(): Array<zaTreeItems> {
        let data: Array<string> = [];
        data = fs.readdirSync((join(__dirname, this.devPath, './file/article')));
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            const za = {
                hashId: data[i],
                content: data[i],
            }
            this.items.push(new zaTreeItems(za));
        }
        return this.items;
    }
}
