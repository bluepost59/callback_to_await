// サンプル3: Promiseを返すfunctionを使う方法
//    引数も戻り値も取れるが、コードがややこしい

function timeout_function(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, 1000);
    });
}

async function main() {
    //await timeout_promise;
    console.log("start");
    console.log(await timeout_function("finished"));
}

main();