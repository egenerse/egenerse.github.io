import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem;
  margin-top: 5rem;
`;
const Header = styled.div`
  font-weight: bold;
`;

export default function PersonalData() {
  return (
    <Container>
      <Header>
        Munich, Germany —{" "}
        <a href="mailto:egenerse@gmail.com">egenerse@gmail.com</a> — (+49) 157
        34886998
      </Header>
      <div>
        <a
          href="https://www.linkedin.com/in/ege-nerse-b81aba115/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        —{" "}
        <a href="https://github.com/egenerse" target="_blank">
          Github
        </a>
      </div>
    </Container>
  );
}
