import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
export const Container = styled(({ ...props }) => (<SectionContainer {...props} />))`
  align-items: center;
  flex-direction: column;
`;
export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0,5rem, 0, 0;
`;
export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
`;
