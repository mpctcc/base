const { boolean } = require("joi")
const Joi = require('joi')


class AlterarprodutoUseCase{


    constructor(presenter, repository,id,userDTO) {
        this.presenter = presenter
        this.repository = repository
        this.id = id
        this.userDTO = userDTO
        this.collection = 'produtos'
    }

    execute() {
        //console.log(this.id)
        //criptografia da senha
        var  valid =  this.validar(this.userDTO)
        if (valid){
            //this.presenter.ok("Dados ok")
            this.count(this.id,this.userDTO)
        }else{
            this.presenter.error("Dados Invalidos")
        }
        
    }

    async count(user,query){
        try {
            const allUsers = await this.repository.countbyid(this.collection, user)
            var myMap = new Map(allUsers);
            if(myMap.size!=0){ 
                //console.log(myMap.size)
                //this.presenter.ok("Id Localizado") 
                this.updateOne(user,query)
                //this.presenter.ok("I")
            }else{
                this.presenter.error("Id Não Localizado")    
            }
            
        } catch (fail) {
            console.log('cadasto', fail)
        }
    }


    validar(user){

        const userSchema = Joi.object({
            Produto: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

                preco: Joi.number(),
            
                codigo: Joi.number()
                .integer()
                
        })

        const val1 = userSchema.validate(user);
        //console.log("passou na validação: " + !val1.error)

        if(!val1.error){
            //console.log("s")
            return true;
        }else{
            //console.log()
            return ;
        } 

    }

    async updateOne(id,query){
        try {
            const allUsers = await this.repository.updateOne(this.collection, id,query)
            this.presenter.ok(allUsers)
        } catch (fail) {
            console.log('AlterarprodutoUseCase.replaceOne', fail)
        }
    }

    async findById(userId){
        try {
            const user = await this.repository.findById(this.collection, userId)
            this.presenter.ok(user)
        } catch (fail) {
            console.log('AlterarprodutoUseCase.findAll', fail)
        }
    }
    


}


module.exports = { AlterarprodutoUseCase }