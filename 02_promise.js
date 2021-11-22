// サンプル2: 生のPromiseに包んでawaitする
//   awaitが使えるが引数や戻り値が取れない

const timeout_promise = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 1000);
    }
);

async function main() {
    console.log("start");
    await timeout_promise;
    console.log("finished");
}

main();
