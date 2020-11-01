import { styled } from "@material-ui/core/styles"
import FileCode from "../FileCode"
import FileBox from "../FileBox"

const Container = styled("div")({
  display: "flex",
})

const FaceArea = styled("div")({
  height: 300,
})

const LeftSide = styled("div")({
  width: (1280 * 9) / 12,
})

const RightSide = styled("div")({
  backgroundColor: "#eee",
  width: (1280 * 3) / 12,
})

export const MainApp = () => {
  return (
    <Container>
      <LeftSide>
        <FileCode />
      </LeftSide>
      <RightSide>
        <FaceArea />
        <FileBox />
      </RightSide>
    </Container>
  )
}

export default MainApp
