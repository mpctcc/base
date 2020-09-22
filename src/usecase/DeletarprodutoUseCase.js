

class DeletarprodutoUseCase{


    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'produtos'
    }

    async deleteOne(userId){
        try {
            const user = await this.repository.deleteOne(this.collection, userId)
            this.presenter.ok(user)
        } catch (fail) {
            console.log('DeletarprodutoUseCase.deleteOne', fail)
        }
    }
    
}

module.exports = { DeletarprodutoUseCase }