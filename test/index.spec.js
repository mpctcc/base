const chai = require('chai');
chaiHttp = require('chai-http')
chai.use(chaiHttp);
const expect = chai.expect;
const { CreatVendaUseCase } = require('../src/usecase/CreatVendaUseCase')



describe("Validando Botton Top", () => {
    it('Menor função',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).obter_difenca_data_em_mes('2020-01-01','2020-01-02');
        expect(resultado).be.equal(0);
        done();
    })

    it('Menor Função - Teste mesmo mes invertido',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).obter_difenca_data_em_mes('2020-01-02','2020-01-01');
        expect(resultado).be.equal(0);
        done();
    })


    it('Menor Função - Teste Um ano',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).obter_difenca_data_em_mes('2020-01-01','2021-01-01');
        expect(resultado).be.equal(12);
        done();
    })


    it(' 1 Drive',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).calcular_valor_pagar('2020-01-01','2020-01-02',200);
        expect(resultado).be.equal(200);
        done();
    })

    it(' 1 Drive - teste ano ',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).calcular_valor_pagar('2020-01-01','2021-01-02',200);
        expect(resultado).be.equal(272);
        done();
    })

    it(' 1 Drive - teste 5 meses ',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).calcular_valor_pagar('2020-01-01','2020-06-02',200);
        expect(resultado).be.equal(230);
        done();
    })

    it(' 1 Drive - teste 5 meses valor quebrado ',(done) =>{
        const resultado = new CreatVendaUseCase(null, null).calcular_valor_pagar('2020-01-01','2020-06-02',200.50);
        expect(resultado).be.equal(230.575);
        done();
    })

    it(' 2 Drive - Validar ', () =>{
        //var simulajson['data_venda']['2020-01-01']['data_ultima']['2020-06-02'] ['valor'][250] 
        //var Myuserdto = JSON.stringify({ data_venda: '2020-01-01' , data_ultima: '2020-06-02' , valor: 250 })
    
        /*const resultado = new CreatVendaUseCase(null, null).validar2(JSON.stringify({ data_venda: '2020-01-01' , data_ultima: 2020-06-02 , valor: 250 }));
        expect(resultado).be.equal(undefined);
        done();*/
        stripe_request = chai.request('localhost:3000/venda');

stripe_request.post('/venda')
              .set('content-type', 'application/x-www-form-urlencoded')
              .send({
                  
                    data_venda: '2020-01-01' , data_ultima: '2020-06-02' , valor: 250
              })
              .end(function(err, res) {
                  //console.log(err);
                  //console.log(res.body);
                  const resultado = new CreatVendaUseCase(null, null).validar2(res.body);
                 expect(resultado).be.equal(undefined);
                
              });

        
    })
})    
