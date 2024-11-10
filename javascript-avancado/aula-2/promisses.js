// conteudo copiado e colado

let promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve("Operação bem-sucedida!");
    } else {
        reject("Ocorreu um erro.");
    }
});

promessa
    .then(result => console.log(result))
    .catch(error => console.log(error));
