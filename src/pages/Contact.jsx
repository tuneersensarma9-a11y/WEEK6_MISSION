function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Store Name:</strong> My Store</p>
        <p><strong>Email:</strong> support@mystore.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Market Street, Ghaziabad, India</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;