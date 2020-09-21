/*
 * @Autor: za-wangxuezhong
 * @Date: 2020-09-20 22:22:31
 * @LastEditors: za-wangxuezhong
 * @LastEditTime: 2020-09-21 21:23:41
 * @Description:
 * @ToDo:
 * @JiraID: SOMPO-
 */
import axios from 'axios';
import {JokeTreeItem} from './joke';

export class ApiService {

    private items: Array<JokeTreeItem> = [];

    async getJokes(page: string, key: string): Promise<Array<JokeTreeItem>> {
        const url = 'http://v.juhe.cn/joke/content/list.php'

        const res = await axios.get(url, {
            headers: {
                'content-type': 'application/json'
            },
            params: {
                page,
                key,
                time: '1418816972'
            }
        });
        for (let i = 0; i < res.data.result.data.length; i++) {
            const joke = {
                hashId: res.data.result.data[i].hashId,
                time: res.data.result.data[i].updatetime,
                content: res.data.result.data[i].content,
            }
            this.items.push(new JokeTreeItem(joke));
        }
        console.log(this.items);
        return this.items;
    }
}

