import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [color, setColor] = useState("text-gray-500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    try {
      let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      let data = await response.json();
      setResult(data.message);
      setColor(response.status === 200 ? "text-green-500" : "text-red-500");
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input type="checkbox" name="botcheck" id="" style="display: none;" />

        <div class="mb-6">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="mb-6">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="+1 (555) 1234-567"
            required
          />
        </div>
        <div class="mb-6">
          <label for="message">Your Message</label>

          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <p id="result"></p>
        <div>
          <button type="submit">Send Message</button>
        </div>
        <p id="result">{result}</p>
      </form>
    </section>
  );
}

export default Contact;
