module.exports= (app)=>{
    //importar a configuração do database
    var conexao = require('../config/database')
    //executar a conexao
    conexao()
    //impoartar o modelo my grid
    var mygrid = require('../models/mygrid')

    //abrir o formulário
    app.get('/mygrid', (req,res)=>{
        res.render('mygrid.ejs')
    })

    //gravar as informações do fomulário no banco de dados
    app.post('/mygrid', (req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{ res.redirect('/mygrid')})
        .catch(()=>{res.send('Não foi possível gravar')})
    })
}