const { json } = require('body-parser');
const Joi = require('joi'); 
const { Double } = require('mongodb');
class CreatVendaUseCase {

    constructor(presenter, userDTO) {
        this.presenter = presenter
        this.userDTO = userDTO
        this.collection = 'Vendas'
    }


    execute() {
        var  valid =  this.validar2(this.userDTO)
        if (valid){
            
            const keys = this.userDTO
            const key_to_use = keys["data_venda"];
            const key_to_use1 = keys['data_ultima'];
            const key_to_use2 = keys['valor'];
            const vl_final = this.calcular_valor_pagar(key_to_use,key_to_use1,key_to_use2);
            this.presenter.ok(vl_final)
        }else{
            this.presenter.error("Dados Invalidos")
        }        
    }

     validar2(Venda){

        const userSchema = Joi.object({
            data_venda: Joi.date().iso().min('now'),
            data_ultima: Joi.date().iso().min('now'),
            valor: Joi.number()
                      .positive()  
        })
        const val1 = userSchema.validate(Venda);
        
        if(!val1.error){
            return true;
        }else{
            return  ;
        } 

    }

    calcular_valor_pagar(dt_pag,dt_ult,valor_pg){
        //console.log(dt_pag +' ' + dt_ult + ' '+valor_pg);
        var vl_pag = parseFloat(valor_pg) + parseFloat((this.obter_difenca_data_em_mes(dt_pag,dt_ult)*(valor_pg*0.03))) 
        
        return vl_pag ;
    }

    obter_difenca_data_em_mes(dt_1,dt_2){
        const now = new Date(dt_1); // Data de hoje
        const past = new Date(dt_2); // Outra data no passado
        const diff = (past.getTime()-now.getTime()); // Subtrai uma data pela outra
        var days = 0;
        if (diff < 0 ){
        days=0    
        }else{ 
         days = Math.trunc((diff / (1000 * 60 * 60 * 24))/30); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
        }    
        // Mostra a diferença em dias
        //console.log('Entre 07/07/2014 até agora já se passaram ' + days + ' dias');
        return days ;
    }

}

module.exports = { CreatVendaUseCase }