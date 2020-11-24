const { CreatVendaUseCase } = require('../../../usecase/CreatVendaUseCase')
const { PresenterWEB } = require('.././../../presenter/PresenterWEB')

module.exports = app => {

    app.get('/vendas', function (req, res) {
        res.send('Hello World')
      })
      
      app.post('/vendas', function (req, res) {
          //console.log("Post User",req.body)
          //res.send('Got a POST request');
          new CreatVendaUseCase(new PresenterWEB(res), req.body).execute()
        }); 
        
      app.put('/vendas', function (req, res) {
          res.send('Got a PUT request at /user');
      });
        
      app.delete('/vendas', function (req, res) {
         res.send('Got a DELETE request at /user');
      });   

    
}