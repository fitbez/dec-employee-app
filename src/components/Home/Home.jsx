import styled from "styled-components";
import { Typography, Button } from "@mui/material";

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

const HeaderParagraph = styled.p`
  text-align: center;
  line-height: 2;
  padding: 0rem 5rem;
`;

const StyledButton = styled(Button)`
  margin: 0rem 1rem !important;
`;

const StyledButtonGroup = styled.div`
  margin: 3rem auto;
  max-width: 300px;
`;

function Home() {
  return (
    <div>
      <Typography
        variant='h2'
        sx={{ padding: "1rem 3rem", textAlign: "center" }}
      >
        Welcome to Employee Management Portal!
      </Typography>
      <Typography
        variant='body1'
        sx={{ padding: "1rem 3rem", textAlign: "justify" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint
        corrupti sequi dolor deleniti sunt voluptatem ipsam veniam soluta ad
        sapiente facilis blanditiis debitis et porro aspernatur dolore delectus
        deserunt fugiat consequatur, ut officiis, odit cupiditate! Nisi sint
        pariatur sequi totam distinctio itaque obcaecati, voluptate nam
        exercitationem porro officia omnis, atque quo saepe aliquid iure
        necessitatibus, iste voluptatibus? Recusandae tenetur ratione facilis
        rerum libero. Rerum fugiat repudiandae quaerat enim cum ratione
        consequatur eligendi suscipit nesciunt, quidem cupiditate dolorum sunt
        totam maxime quo sequi assumenda nulla aut molestiae vero quibusdam
        voluptatibus! Illum officia velit, vero obcaecati vel dicta similique
        beatae in?
      </Typography>
      <StyledButtonGroup>
        <StyledButton variant='contained'>Login</StyledButton>
        <StyledButton variant='outlined'>Sign up</StyledButton>
      </StyledButtonGroup>
    </div>
  );
}

export default Home;
