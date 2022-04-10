module.exports = app => {
    app.get('/users/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                nome: 'Hcode',
                email: 'contato@hcide.com.br',
                id: 1
            }]
        });
    });



    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: []
        });
    });
};