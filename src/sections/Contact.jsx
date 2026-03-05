import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import LazyLoad from "react-lazyload";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_SERVICE_KEY;
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    const isValidEmail = /\S+@\S+\.\S+/.test(trimmedForm.email);
    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.message || !isValidEmail) {
      setStatus({
        type: "error",
        message: "Please enter a valid name, email, and message.",
      });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Please use direct email: rajchalanjal1@gmail.com",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedForm.name,
          to_name: "Anjal",
          from_email: trimmedForm.email,
          to_email: "rajchalanjal1@gmail.com",
          message: trimmedForm.message,
        },
        publicKey
      );
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      setStatus({
        type: "error",
        message:
          "Failed to send message right now. Please email directly: rajchalanjal1@gmail.com",
      });
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

            {status.message && (
              <p
                className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
