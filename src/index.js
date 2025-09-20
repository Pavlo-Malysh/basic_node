import path from 'node:path';

import fs from 'node:fs/promises';

const somePath = path.join(process.cwd());
console.log('path', somePath);

const message = 'Hello NODE!';
console.log(message);


const parse = path.parse(somePath);
console.log('PARSE', parse);


const readFun = async () => {
    try {
        const data = await fs.readFile('hello.txt', 'utf-8');
        console.log('DATA', data);

        // const newFile = await fs.writeFile('src/testNewFile.txt', 'NEW File created', 'utf-8'); - створення і запис в файл, або перезапис в існуючий файл
        await fs.writeFile('hello.txt', 'Hello');

        const addData = await fs.appendFile('src/testNewFile.txt', 'DATA at the end file22', 'utf-8');

        const d = await fs.readFile('src/testNewFile.txt', 'utf-8');
        console.log(d);

        // const newPath = await fs.rename('src/test/testNewFile.txt', 'src/test/testFile.txt'); - перейменування або переміщення файлу

        const files = await fs.readdir('.');
        console.log('this is:', files);

    } catch (error) {
        console.log('Помилка:', error);

    }
};

readFun();

// fs.unlink('hello.txt'); видалеення файлу


