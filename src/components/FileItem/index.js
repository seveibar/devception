import { styled } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"

const Container = styled("div")({
  paddingLeft: 16,
  display: "flex",
  alignItems: "center",
})

export const FileItem = ({ fileName, filePath, linesChanged, active }) => {
  return (
    <Container>
      ↳
      <InsertDriveFileIcon />
      <Box display="inline-flex" color="#000">
        {filePath}
      </Box>
    </Container>
  )
}

export default FileItem
