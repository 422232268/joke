/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:34:20
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-23 02:23:09
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked = require('./marked.min.js');
let devPath: string = '../';
let dataObj: any = {};
let catalogue: Array<string> = [];
let chapter: Array<string> = fs.readdirSync((join(__dirname, devPath, './file')));
let defineType: Array<string> = ['Obj', 'Arr', 'Num', 'Str', 'Bln']

let writeFile = (target: string, fileName: string, content: string) => {
    fs.createWriteStream((join(target, fileName)), JSON.stringify(content), (err: any) => {
        if (err) {
            console.log('写入文件失败');
            return;
        }
        console.log('文件写入完毕');
    })
}

let cpDir = (path: string, target: string, fileName: string, content: string, callback: any) => {
    fs.exists(path, (exists: boolean) => {
        if (exists) {
            callback(target, fileName, content);
        } else {
            fs.mkdir(path, function () {
                callback(target, fileName, content);
            });
        }
    });
}
let cpFile = (src: string, target: string, fileName: string) => {
    let MarkContent: any = fs.createReadStream((join(src, fileName)));
    cpDir(src, target, fileName, MarkContent, writeFile);
}
// cpFile('./', '../out/', 'marked.min.js');

chapter.forEach(item => {
    // console.log(item.slice(0, 3));
    // if (defineType.includes(item.slice(0, 3))) {
    let content: any = fs.readFileSync((join(__dirname, devPath, `./file/${item}`))).toString();
    let data: string = content.split('<div style="display:none">')[1]?.split('</div>')[0].replace(/[\n]/, "");
    let catalogueData = content.split('<!-- ')[1]?.split(' -->')[0];
    let methodType = content.split('<!-- ')[2]?.split(' -->')[0];
    if (defineType.includes(methodType)) {
        if (data === undefined) return;
        let value = data;
        dataObj[methodType] = [...dataObj[methodType] || [], value];
    }
    fs.exists(`../out/file/article/${catalogueData}`, (exists: boolean) => {
        let path = `./out/file/article/${catalogueData}/`;
        console.log(path);
        if (!exists) {
            fs.mkdir(path, (e: any)=>{
                if (!e){
                    fs.writeFileSync((join(__dirname, devPath, path, `./${item}`)), content, (err: any) => {
                            if (err) {
                                console.log('写入文件失败');
                                return;
                            }
                            console.log('文件写入完毕');
                        })
                }
                console.log(e);
            })
        }
        fs.writeFileSync((join(__dirname, devPath, path, `./${item}`)), content, (err: any) => {
            if (err) {
                console.log('写入文件失败');
                return;
            }
            console.log('文件写入完毕');
        })
    })
})
Object.keys(dataObj).forEach(key => {

    fs.writeFileSync((join(__dirname, devPath, './out/file/method', `./${key}.json`)), JSON.stringify(dataObj[key]), (err: any) => {
        if (err) {
            console.log('写入文件失败');
            return;
        }
        console.log('文件写入完毕');
    })
})
