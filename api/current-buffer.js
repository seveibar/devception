const { send } = require("micro")

module.exports = (req, res) => {
  return send(res, 200, {
    helloworld: true,
  })
}
