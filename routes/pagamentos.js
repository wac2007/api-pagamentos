module.exports = (app) => {
    app.get('/pagamentos', (req, res) => {
        res.send('Funciona!');
    });
}