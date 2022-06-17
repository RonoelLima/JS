// promises utilizado para permite a execução de uma função assicrona
const fs = require('fs').promises;
const path = require('path');

//comando para fazer a leitura do arquivo na pasta
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch((err) => {
//         console.log(err)
//     }
let rootDir = path.resolve((__dirname), '..','..','Node')  
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files)
}

async function walk(files, rootDir) {
    for(let file of files) {
        let rootDir = path.resolve((__dirname), '..','..','Node', `${file}`)
        const arquivos = await fs.readdir(rootDir);
        console.log(arquivos)
    }
}

readdir(rootDir)

