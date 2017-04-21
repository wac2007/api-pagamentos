module.exports = (app) => {
    app.get('/pagamentos', (req, res) => {
        res.send('Funciona!');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        var pagamento = req.body;
        console.log('processando pagamento');
        pagamento.status = 'CRIADO';
        pagamento.data = new Date();
        res.send(pagamento);
    })
}