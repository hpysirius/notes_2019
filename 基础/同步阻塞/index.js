const sleep = delay => {
    const start = new Date().getTime();
    while(new Date().getTime() < start + delay){
        continue;
    }
}

console.log(1);
sleep(3000);
console.log(2);