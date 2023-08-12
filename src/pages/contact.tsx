import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Layout from '@/layouts';
import BackgroundLine from '@/components/common/BackgroundLine';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post('https://baonam-port.glitch.me/email', {
        name,
        email,
        subject,
        message,
      })
      .then(() => {
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        alert('Thank you for your contact!');
      });
  };

  return (
    <Layout title="Contact">
      <div className="Contact">
        <div className="contact-container">
          <div className="contact-box flex">
            <div className="contact-left flex-col">
              <div className="contact-text">
                <h5>DO NOT BE SHY !</h5>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
              </div>
              <div className="contact-info flex-center">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
              </div>
              <div className="contact-info flex-center">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                0948147259
              </div>
            </div>
            <form className="contact-right flex-col" onSubmit={onSubmit}>
              <input
                placeholder="Name"
                className="input"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
                required
              />
              <input
                placeholder="Email"
                className="input"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
                required
              />
              <input
                placeholder="Subject"
                className="input"
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                value={subject}
                required
              />
              <textarea
                placeholder="Message"
                className="textarea"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                value={message}
                required
              />
              <button>
                {loading ? <p>Sending...</p> : <p>Send message</p>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Contact;
