const fs = require('fs');

const access = () => {
    return(
        fs.accessSync('testFile.txt', fs.constants.X_OK, (err) =>{
            if(err){
                console.log(err);
            }else{
                console.log('File can be read');
            }
        })
    );
}

const append = () => {
    return(
        fs.appendFileSync('testFile.txt', 'World', (err) =>{
            if(err){
                console.log(err);
            }else{
                fs.readFileSync('testFile.txt')
            }
        })
    );
}

exports.fsModule = () => {
    return(
        `
        <h1>FS Module</h1>
        <a href="/">Back</a>
        <p>Access: ${access()}</p>
        <p>Append and read file: ${append()}</p>
        `
    );
}