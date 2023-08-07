import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { CursorContext } from '@/contexts/CursorContext';
import { SOCIAL_LIST } from '@/constants/constants';

function Socials() {
  const { updateHoverState } = useContext(CursorContext);

  return (
    <div className="home-fl">
      <div className="home-fl-text">Follow me</div>
      <div className="home-fl-line" />
      <div className="home-fl-list flex-center flex-col">
        {SOCIAL_LIST?.map(({ id, href, icon }) => (
          <a
            key={id}
            href={href}
            className="home-fl-item flex-center"
            rel="noopener noreferrer"
            onMouseEnter={updateHoverState}
            onMouseLeave={updateHoverState}
            target="_blank"
          >
            <FontAwesomeIcon icon={icon} className="icon" />
          </a>
        ))}
      </div>
    </div>
  );
}
export default Socials;
