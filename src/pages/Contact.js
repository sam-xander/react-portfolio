import { Link } from "react-router-dom";

function Contact() {
  return (
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <h2>CONTACT ME</h2>
        <br />
        <div class="contact-grid">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="66aa47dc-a6f8-4004-a69b-76c4c67a76fe"
            />
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" required />

            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <input class="submit" type="submit" value="SUBMIT" />
          </form>
          <aside>
            <h6>GitHub</h6>
            <Link to="https://github.com/sam-xander" target="_blank">
              github.com/sam-xander
            </Link>
            <hr />
            <h6>LinkedIn</h6>
            <Link to="https://www.linkedin.com/in/samxander/" target="_blank">
              linkedin.com/in/samxander/
            </Link>
            <hr />
            <h6>E-mail</h6>
            <Link to="https://github.com/sam-xander" target="_blank">
              sam@samxander.com
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
