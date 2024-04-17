// jsonでコメントアウトできないのが面倒くさいので、tsファイルにしてjsonを読み込む

import * as fs from 'fs';

const json = fs.readFileSync('./list.json', 'utf8');
const list = JSON.parse(json);

console.log(list);