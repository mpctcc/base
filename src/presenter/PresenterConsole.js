
class PresenterConsole {

    ok(result) {
        console.log('Ok: ', JSON.stringify(result))
    }

    error(error) {
        console.log('Error: ', JSON.stringify(error))
    }

    fail(fail) {
        console.log('Fail: ', JSON.stringify(fail))
    }
}

module.exports = { PresenterConsole }