const Application = require('./app');
const config = require('./config.json');

let app = new Application();
app.expressApp.listen(config.port, config.host, function() {
    console.log('Anifind backend listening at ' + config.port);
});