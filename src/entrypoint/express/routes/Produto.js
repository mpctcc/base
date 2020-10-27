const { CreatProductUseCase } = require('../../../usecase/CreatProductUseCase')
const { ListProductUseCase } = require('../../../usecase/ListProductUseCase')
const { DeletarprodutoUseCase } = require('../../../usecase/DeletarprodutoUseCase')
const { AlterarprodutoUseCase } = require('../../../usecase/AlterarprodutoUseCase')
const { PresenterWEB } = require('.././../../presenter/PresenterWEB')
const { OperatorsDB } = require('.././../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {


    app.get('/user', function (req, res) {
        // console.log('GET')
        const listProductUseCase = new ListProductUseCase(new PresenterWEB(res), new OperatorsDB())
        listProductUseCase.findAll()
    })

    app.get('/user/:id', function (req, res) {
        // console.log('GET')
        const listProductUseCase = new ListProductUseCase(new PresenterWEB(res), new OperatorsDB())
        listProductUseCase.findById(req.params.id)
    })

    app.post('/user', function (req, res) {
        // console.log('POST USER', req.body)
        new CreatProductUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })


    app.put('/user/:id', function (req, res) {
        const alterarprodutoUseCase = new AlterarprodutoUseCase(new PresenterWEB(res), new OperatorsDB(),req.params.id, req.body).execute()
        //alterarprodutoUseCase.updateOne(req.params.id,req.body)
        //res.send('Got a PUT request at /user')
    })


    app.delete('/user/:id', function (req, res) {
        const deletarprodutoUseCase = new DeletarprodutoUseCase(new PresenterWEB(res), new OperatorsDB())
        deletarprodutoUseCase.deleteOne(req.params.id)
    })



}