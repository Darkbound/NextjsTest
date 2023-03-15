import { Container, StyledTitle, StyledSubTitle } from "./element";
export const AgencySelection = ({
  title,
  subTitle,
  backGroundPicture,
  video,
  carts,
  ...props
}) => {
  return (
    <Container {...props}>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </Container>
  );
};
