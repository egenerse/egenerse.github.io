import styled from "@emotion/styled";

const Container = styled.div`
  margin: 2rem;
  display:flex;
  align-items:center;
  justify-contnet:center;
  flex-direction: column;
`;
const Header = styled.div`
  font-weight: bold;
`;

const NameField = styled.div`
font-size: 2rem;
  font-weight: bold;
margin-bottom:0.5rem;

`

export default function PersonalData() {
  return (
    <Container>
      <NameField >
        Ege Nerse
      </NameField>
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
