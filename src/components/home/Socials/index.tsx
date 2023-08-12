import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { CursorContext } from '@/contexts/CursorContext';
import { SOCIAL_LIST } from '@/constants/constants';

import { Container, SocialIcons } from './styles';

function Socials() {
  const { updateHoverState } = useContext(CursorContext);

  return (
    <Container>
      <div className="text">Follow me</div>
      <div className="line" />
      <SocialIcons>
        {SOCIAL_LIST?.map(({ id, href, icon }) => (
          <a
            key={id}
            href={href}
            className="social-icon"
            rel="noopener noreferrer"
            onMouseEnter={updateHoverState}
            onMouseLeave={updateHoverState}
            target="_blank"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </SocialIcons>
    </Container>
  );
}
export default Socials;
