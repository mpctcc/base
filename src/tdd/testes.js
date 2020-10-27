const chai = require('chai');
const expect = chai.expect;


const CreatProductUseCase = (produto,preco,codigo) => {preco + codigo}

describe()
    it('Dados não são nulos',(done) =>{
        const resultado = CreatProductUseCase('',1,2);
        expect(resultado).be.equal(3);
        done();
    })

    it('Dados não são nulos',(done) =>{
        const resultado = CreatProductUseCase('',1,2);
        expect(resultado).be.equal(3);
        done();
    })
