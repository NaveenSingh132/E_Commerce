import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./eComComponents/Button";
import image from "./eComComponents/images/404-error-3702359-3119148.webp"

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <figure>
            <img src={image} alt="404 Page Not Found" />
          </figure>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;