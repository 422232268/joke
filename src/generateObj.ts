/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-10-08 17:34:20
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-11-19 11:13:00
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
const fs = require('fs');
const path = require('path');
const join = path.join;
const marked = require('./marked.js');
let devPath: string = '../';
let dataObj: any = {};
let catalogue: Array<string> = [];
let chapter: Array<string> = fs.readdirSync((join(__dirname, devPath, './file')));
let defineType: Array<string> = ['Obj', 'Arr', 'Num', 'Str', 'Bln']
// console.log(chapter);

let writeFile = (target: string, fileName: string, content: string) => {
    fs.writeFileSync((join(target, fileName)), JSON.stringify(content), (err: any) => {
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
    let MarkContent: any = fs.readFileSync((join(src, fileName))).toString();
    cpDir(src, target, fileName, MarkContent, writeFile);
}
cpFile('./', '../out/', 'marked.js');

chapter.forEach(item => {
    // console.log(item.slice(0, 3));
    // if (defineType.includes(item.slice(0, 3))) {
    let content: any = fs.readFileSync((join(__dirname, devPath, `./file/${item}`))).toString();
    let data: string = content.split('<div style="display:none">')[1]?.split('</div>')[0];
    let catalogueData = content.split('<!-- ')[1]?.split(' -->')[0];
    let methodType = content.split('<!-- ')[2]?.split(' -->')[0];
    // console.log(catalogueData);
    // console.log(content);
    // console.log(methodType);
    // if (defineType.includes(methodType)) {
    //     if (data === undefined) return;
    //     let value = data;
    //     // dataObj[item.slice(0, 3)] = [...dataObj[item.slice(0, 3)] || [], value];
    //     dataObj[methodType] = [...dataObj[methodType] || [], value];
    //     console.log(dataObj);
    //     // if (!catalogue.some(item => catalogueData)) catalogue.push(catalogueData);
    //     fs.writeFileSync((join(__dirname, devPath, './out/file/method', `./${methodType}.md`)), JSON.stringify(dataObj[key]), (err: any) => {
    //         if (err) {
    //             console.log('写入文件失败');
    //             return;
    //         }
    //         console.log('文件写入完毕');
    //     })
    // }
    fs.exists(`../out/file/article/${catalogueData}`, (exists: boolean) => {
        console.log(exists);
        console.log(`../out/file/article/${catalogueData}/`);
        let path = `../out/file/article/${catalogueData}/`;
        if (!exists) {
            // fs.mkdirSyns(path);
            fs.mkdir(path, (e: any)=>{
                if (!e){
                        fs.writeFileSync((join(__dirname, devPath, `./out/file/article/${catalogueData}`, `./${item}`)), content, (err: any) => {
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
        fs.writeFileSync((join(__dirname, devPath, `./out/file/article/${catalogueData}`, `./${item}`)), content, (err: any) => {
            if (err) {
                console.log('写入文件失败');
                return;
            }
            console.log('文件写入完毕');
        })
    });
    // fs.writeFileSync((join(__dirname, devPath, `./out/file/article/${catalogueData}`, `./${item}`)), JSON.stringify(content), (err: any) => {
    //     if (err) {
    //         console.log('写入文件失败');
    //         return;
    //     }
    //     console.log('文件写入完毕');
    // })


        // if (data === undefined) return;
        // let value = data;
        // dataObj[item.slice(0, 3)] = [...dataObj[item.slice(0, 3)] || [], value];
        // // if (!catalogue.some(item => catalogueData)) catalogue.push(catalogueData);
        // fs.writeFileSync((join(__dirname, devPath, './out/file', `${catalogueData}`, `./${item}.md`)), JSON.stringify(content), (err: any) => {
        //     if (err) {
        //         console.log('写入文件失败');
        //         return;
        //     }
        //     console.log('文件写入完毕');
        // })
    // }
})

Object.keys(dataObj).forEach(key => {
    fs.writeFileSync((join(__dirname, devPath, './out/file/method', `./${key}.md`)), JSON.stringify(dataObj[key]), (err: any) => {
        if (err) {
            console.log('写入文件失败');
            return;
        }
        console.log('文件写入完毕');
    })
})


// let writeFile = (target: string, fileName: string, content: string) => {
//     fs.writeFileSync((join(target, fileName)), JSON.stringify(content), (err: any) => {
//         if (err) {
//             console.log('写入文件失败');
//             return;
//         }
//         console.log('文件写入完毕');
//     })
// }

// let cpDir = (path: string, target: string, fileName: string, content: string, callback: any) => {
//     fs.exists(path, (exists: boolean) => {
//         if (exists) {
//             callback(target, fileName, content);
//         } else {
//             fs.mkdir(path, function () {
//                 callback(target, fileName, content);
//             });
//         }
//     });
// }
// let cpFile = (src: string, target: string, fileName: string) => {
//     let MarkContent: any = fs.readFileSync((join(src, fileName))).toString();
//     cpDir(src, target, fileName, MarkContent, writeFile);
// }
// cpFile('./', '../out/', 'marked.js');
