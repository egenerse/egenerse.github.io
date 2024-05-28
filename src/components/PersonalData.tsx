import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 2rem;
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
      <p>
        <a href="https://www.linkedin.com/in/ege-nerse-b81aba115/">LinkedIn</a>{" "}
        — <a href="https://github.com/egenerse">Github</a>
      </p>
    </Container>
  );
}
