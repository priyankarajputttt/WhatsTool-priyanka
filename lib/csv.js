const { Parser } = require('json2csv');

const { transforms: { unwind, flatten } } = require('json2csv');


function toCSV(json){
    const opts = {transforms:[flatten()]};
    try {
        const parser = new Parser(opts);
        const csv = parser.parse(json);
        return csv
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    toCSV
}