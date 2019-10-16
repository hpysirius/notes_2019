const oss = {
    region: '华北2（北京）',
    accessKeyId: '',
    accessKeySecret: '',
    bucket: 'knows-hpysirius'
}


async function putStream() {
    try {
        // use 'chunked encoding'
        let stream = fs.createReadStream('./input.txt');
        let result = await client.putStream('txt01', stream);
        console.log(result);

        // don't use 'chunked encoding'
        // let stream = fs.createReadStream('local-file');
        // let size = fs.statSync('local-file').size;
        // let result = await client.putStream(
        //     'object-name', stream, { contentLength: size });
        // console.log(result);
    } catch (e) {
        console.log(e)
    }
}

putStream();