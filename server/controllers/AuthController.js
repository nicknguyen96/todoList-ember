class AuthController {
    async login(req, res) {
        return res.json({status: 200, message:"login route"})
    }

    async signup(req, res) {
        return res.json({status: 200, message:"signup route"})
    }

    async logout(req, res) {
        return res.json({status: 200, message:"logout route"})
    }

    async resetPassword(req, res) {
        return res.json({status: 200, message:"resetPassword route"})
    }
}

module.exports = new AuthController();