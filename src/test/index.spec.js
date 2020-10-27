const chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');

const CreatProductUseCase = (produto,preco,codigo) => {preco + codigo}

describe("Validando create", () => {
    it('Dados não são nulos',(done) =>{
        const resultado = CreatProductUseCase(3,1,2);
        expect(resultado).be.equal(3);
        done();
    })
})    
