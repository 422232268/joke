/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:34:20
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-10-08 19:56:43
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked = require('marked');
let devPath: string = '../';
let dataObj: any = {};
let chapter: Array<string> = fs.readdirSync((join(__dirname, devPath, './file')));
chapter.forEach(item => {
    let content:any = fs.readFileSync((join(__dirname, devPath, `./file/${item}`))).toString();
    let data:string = content.split('<div style="display:none">')[1]?.split('</div>')[0];
    if (data === undefined) return;
    let key = data.substr(0, data.indexOf(':')).trim();
    let value = data.substr(data.indexOf(':') + 1, data.length - data.indexOf(':')).trim();
    dataObj[JSON.parse(key)] = JSON.parse(value);
})
fs.writeFileSync((join(__dirname, devPath, './out/file', './snippet.md')), JSON.stringify(dataObj), (err: any) => {
    if (err) {
        console.log('写入文件失败');
        return;
    }
    console.log('文件写入完毕');
})
