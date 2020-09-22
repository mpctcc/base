const ajv = require("ajv")
const { boolean } = require("joi")
const Joi = require('joi')

class CreatProductUseCase {

    constructor(presenter, repository, userDTO) {
        this.presenter = presenter
        this.repository = repository
        this.userDTO = userDTO
        this.collection = 'produtos'
    }


    execute() {
        //criptografia da senha
        var  valid =  this.validar(this.userDTO)
        if (valid){

            this.count(this.userDTO)
        }else{
            this.presenter.error("Dados Invalidos")
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

    async save(user) {
        try {
            const newUser = await this.repository.save(this.collection, user)
            this.presenter.ok(newUser)
        } catch (fail) {
            console.log('CreatProductUseCase.save', fail)
        }
    }

    async count(user){
        try {
            const allUsers = await this.repository.count(this.collection, user)
            var myMap = new Map(allUsers);
            var vazio = []
            if(myMap.size==0){ 
                //console.log(myMap.size)
                this.save(user)
            }else{
                this.presenter.error("Já possui cadastro")    
            }
            
        } catch (fail) {
            console.log('cadasto', fail)
        }
    }


}

module.exports = { CreatProductUseCase }