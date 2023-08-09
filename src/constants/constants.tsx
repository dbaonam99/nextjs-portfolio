import {
  faFacebookSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const SOCIAL_LIST = [
  {
    id: 1,
    href: 'https://github.com/dbaonam99',
    icon: faGithubSquare,
  },
  {
    id: 2,
    href: 'https://www.facebook.com/dbaonam99',
    icon: faFacebookSquare,
  },
  {
    id: 3,
    href: 'mailto: dbaonam99@gmail.com',
    icon: faEnvelope,
  },
];

export const NAVBAR_ITEMS = [
  { id: 1, name: 'Home', route: '' },
  { id: 2, name: 'About', route: 'about' },
  { id: 3, name: 'Projects', route: 'projects' },
  { id: 4, name: 'Contact', route: 'contact' },
];
