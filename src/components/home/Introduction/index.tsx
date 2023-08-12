import Typewriter from 'typewriter-effect';
import { useMemo } from 'react';

import { Avatar, Container, IntroInfo, IntroText, IntroWriter } from './styles';

function Introduction() {
  const renderTypeWriter = useMemo(
    () => (
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .pauseFor(2000)
            .changeDeleteSpeed(30)
            .changeDelay(30)

            .typeString("I'm <strong>front-end</strong> developer")
            .pauseFor(500)
            .deleteAll()

            .typeString('I code cool <strong>websites</strong>')
            .pauseFor(500)
            .deleteAll()

            .typeString('I love <strong>javascript</strong>')
            .pauseFor(500)
            .deleteAll()

            .typeString('I live in <strong>HCM City</strong>')
            .pauseFor(500)
            .deleteAll()

            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: '',
          wrapperClassName: 'typing-text',
        }}
      />
    ),
    [],
  );

  return (
    <Container>
      <Avatar
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        }}
      />
      <IntroText>
        <p>
          Hello, I’m <strong>Nam</strong>, a Middle Frontend Developer at Tiki.
        </p>
      </IntroText>
      <IntroInfo>
        <div className="contact">
          <span>
            Email: <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
          </span>
          <span>
            Phone: <a href="tel: +84948147259">0948147259</a>
          </span>
        </div>
        <IntroWriter>{renderTypeWriter}</IntroWriter>
      </IntroInfo>
    </Container>
  );
}

export default Introduction;
