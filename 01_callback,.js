// サンプル1: 普通にcallbackを使ってsetTimeoutする
async function main() {
    console.log("start");
    setTimeout(() => {
        console.log("finished");
    }, 1000);
}

main()