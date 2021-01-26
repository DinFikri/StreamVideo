const fs = require('fs');

const readStream = fs.createReadStream('./JENNIE - SOLO MV.mp4');

// trying to decrase memory usage

readStream.on('data', (chunk) => {
    console.log('size: ', chunk.length)
});

readStream.on('end', () => {
    console.log(('stream is finished'))
});

readStream.on('error', (err) => {
    console.log("an error has occuered.")
    console.log(err)
});

readStream.pause()
process.stdin.on('data', (chunk) => {
    if (chunk.toString().trim() === 'finished') {
        readStream.resume()
    }
    readStream.read()
})