module.exports = {

    users: (app, req, res) => {
        req.assert('name', 'O nome e obrigatorio').notEmpty();
        req.assert('email', 'O e-mail esta invalido.').notEmpty().isEmail();

        let erros = req.validationErrors();

        if (erros) {
            app.utils.error.send(erros, req, res);
            return false;
        } else {
            return true;
        }
    }
};