
class PresenterWEB {

    constructor(response) {
        this.response = response
    }

    ok(payload) {
        this.response.json({payload})
    }

    error(error) {
        this.response.status(400).json({error})
    }

    fail(fail) {
        this.response.status(500).json({fail})
    }
}

module.exports = { PresenterWEB }
