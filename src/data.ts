/*
 * @Autor: za-wangxuezhong
 * @data: 2020-09-20 22:22:31
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-08 19:58:44
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import {zaTreeItem} from './define';
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked =require('marked');
export class ApiService {
    private items: Array<zaTreeItem> = [];
    // private devPath: string = '../';
    private devPath: string = './';
    getChapter(): Array<zaTreeItem> {
        let data: Array<string> = [];
        data = fs.readdirSync((join(__dirname, this.devPath,'./file')));
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
        data = fs.readFileSync((join(__dirname, this.devPath,`./file/${Chapter}`)));
        return marked(data.toString());
    }
}
