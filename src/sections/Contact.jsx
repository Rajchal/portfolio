import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import LazyLoad from "react-lazyload";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: "Anjal",
          from_email: form.email,
          to_email: "rajchalanjal1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setLoading(false);
      alert("Message sent successfully!");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Failed to send message!");
    }
  };

  return (
    <section className="c-space my-20 " id="contact">
      <div className=" relative min-h-screen flex items-center justify-center flex-col ">
        <div className="contact-container">
          <h3 className="head-text pt-[25px]">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Have a question or want to work together?
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your Full Name.."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your email address.."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="I want to hire you..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <LazyLoad>
                <img
                  src={`${import.meta.env.BASE_URL}assets/arrow-up.png`}
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </LazyLoad>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
