const { router, get } = require("microrouter")
const { send } = require("micro")
const currentBufferEndpoint = require("./api/current-buffer")

const notfound = (req, res) => send(res, 404, "Not found route")

module.exports = router(
  get("/api/current-buffer", currentBufferEndpoint),
  get("/*", notfound)
)
