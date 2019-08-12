module.exports = function (source) {
    console.log(source);
    const result = `['` + source.replace(/\n/g, `',\n'`) + `']`
    console.log(result);
    return `export default ${JSON.stringify(result)}`
}