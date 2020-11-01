import { styled } from "@material-ui/core/styles"
import FileItem from "../FileItem"
import Box from "@material-ui/core/Box"
import FolderIcon from "@material-ui/icons/Folder"

const Container = styled("div")({})

export const DirectoryItem = ({ pathToDirectory, files }) => {
  return (
    <Container>
      <Box display="flex" alignItems="center">
        <FolderIcon />
        <Box display="inline-flex">{pathToDirectory}</Box>
      </Box>
      {files.map((file, i) => (
        <FileItem
          {...file}
          filePath={file.filePath.replace(
            new RegExp("^" + pathToDirectory + "/"),
            ""
          )}
          key={i}
        />
      ))}
    </Container>
  )
}

export default DirectoryItem
