const path = require('path');
let HelloWorldPlugin = require('./plugin/hello-world');
let FileListPlugin = require('./plugin/FileListPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /namelist.txt$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './loader/namelist-loader.js'),
                        options: {
                            a: 123,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HelloWorldPlugin({ options: true }),
        new FileListPlugin({ options: true })
    ]
};