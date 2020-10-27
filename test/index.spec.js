const chai = require('chai');
const expect = chai.expect;

const CreatProductUseCase = (produto,preco,codigo) => {
    if(  produto != undefined &&  preco != undefined && typeof codigo != undefined ){ 
      if ( typeof produto === "string" && produto.length > 3 && produto.length < 30 ){ 
        if ( typeof codigo === "number" && Number.isInteger(codigo) ){  
            if ( typeof preco === "number"  && preco > 0.0 ){  
                return true;
                } else { return false;} ;
        } else { return false;} ;
        }  else { return false;} ;
    }else {return false;}
}

describe("Validando create", () => {
    it('Todos os Dados São String - false',(done) =>{
        const resultado = CreatProductUseCase('t','d',"d");
        expect(resultado).be.equal(false);
        done();
    })

    
    it('Dados Invalidos - false',(done) =>{
        const resultado = CreatProductUseCase(undefined,'d',"d");
        expect(resultado).be.equal(false);
        done();
    })

    it('Correto com Inteiro - true',(done) =>{
        const resultado = CreatProductUseCase('tere',1,2);
        expect(resultado).be.equal(true);
        done();
    })

    it('Produto com descrição inferior a 3 - false',(done) =>{
        const resultado = CreatProductUseCase('te',1,2);
        expect(resultado).be.equal(false);
        done();
    })

    it('Produto com descrição superior a 30 - false',(done) =>{
        const resultado = CreatProductUseCase('teaaaaaaaaaaaaaaaaaaaaaa aaaaaaa',1,2);
        expect(resultado).be.equal(false);
        done();
    })
    
    it('preço negativo - false',(done) =>{
        const resultado = CreatProductUseCase('agulha',-1,2);
        expect(resultado).be.equal(false);
        done();
    })

    it('preço com casas decimais - true',(done) =>{
        const resultado = CreatProductUseCase('agulha',1.99,2);
        expect(resultado).be.equal(true);
        done();
    })

    it('Dado Nulo -falso',(done) =>{
        const resultado = CreatProductUseCase('agulha',1.99,null);
        expect(resultado).be.equal(false);
        done();
    })

    it('Codigo com Virgula -falso',(done) =>{
        const resultado = CreatProductUseCase('agulha',1.99,null);
        expect(resultado).be.equal(false);
        done();
    })
})    
