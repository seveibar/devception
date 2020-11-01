import { styled } from "@material-ui/core/styles"
import FileItem from "../FileItem"
import DirectoryItem from "../DirectoryItem"
import mockFileData from "./mockdata"

const Container = styled("div")({
  height: 400,
})

export const FileBox = ({ dirs = mockFileData, selectedFileIndex = null }) => {
  return (
    <Container>
      {dirs.map((dir, i) => (
        <DirectoryItem {...dir} key={i} />
      ))}
    </Container>
  )
}

export default FileBox
