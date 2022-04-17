const ApiError = require("../error/ApiError");

class UserConroller {

    async registration(req, res) {

    };

    async login(req, res) {

    };

    async check (req, res, next) {
const {id} = req.query;
if(!id){
    return next(ApiError.badRequest('can not find ID'))
}
res.json(id);
    };
}

module.exports = new UserConroller();