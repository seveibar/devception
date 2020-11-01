import "highlightjs/styles/dracula.css"
import "dracula-prism/css/dracula-prism.css"

import { styled } from "@material-ui/core/styles"
import Prism from "prismjs"
import colors from "../colors"

const Container = styled("div")({
  backgroundColor: colors.bg,
  height: "100%",
})

const highlightSyntax = (str) => (
  <pre
    style={{ display: "inline", color: colors.fg }}
    dangerouslySetInnerHTML={{
      __html: Prism.highlight(str, Prism.languages.javascript),
    }}
  />
)

export const FileCode = () => {
  return (
    <Container>
      {highlightSyntax(
        `

const highlightSyntax = (str) => (
  <pre
    style={{ display: "inline" }}
    dangerouslySetInnerHTML={{
      __html: Prism.highlight(str, Prism.languages.javascript),
    }}
  />
)


    `.trim()
      )}
    </Container>
  )
}

export default FileCode
