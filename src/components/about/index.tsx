import { Container } from './styles';
import Introduction from './Introduction';
import Skills from './Skills';
import Experiences from './Experiences';

function About() {
  return (
    <Container>
      <Introduction />
      <Skills />
      <Experiences />
    </Container>
  );
}

export default About;
