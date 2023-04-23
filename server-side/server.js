const server = require('./config/express')();
const port = server.get('port');
const routes = require('./api/routes')

server.get('/', (req, res) => res.send('EPK! Api is working'))

server.use('/', routes);

server.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
});