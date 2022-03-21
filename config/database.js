const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tre')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAdmin:tom110606@fiaptecnico.4xniq.mongodb.net/ac1tri?retryWrites=true&w=majority')
}

module.exports = conexao