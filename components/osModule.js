const os = require('os');
const { stringify } = require('querystring');

exports.osModule = () => {
    return(
        `
        <h1>OS Module</h1>
        <a href="/">Back</a>
        <p>Arch: ${os.arch()}</p>
        <p>CPU: ${stringify(os.cpus()[0])}</p>
        <p>CPU: ${stringify(os.cpus()[1])}</p>
        <p>Endianness: ${os.endianness()}</p>
        <p>EOL: ${os.endianness()}</p>
        <p>Free memory: ${os.freemem()}</p>
        <p>Total memory: ${os.totalmem()}</p>
        <p>Host name: ${os.hostname()}</p>
        <p>Network: ${os.networkInterfaces()[0]}</p>
        <p>Platform: ${os.platform()}</p>
        <p>Os release date: ${os.release()}</p>
        <p>Directory for temporary files: ${os.tmpdir()}</p>
        <p>Type: ${os.type()}</p>
        <p>Uptime: ${os.uptime()}</p>
        <p>User Info: ${os.userInfo()[0]}</p>
        `
    );
}