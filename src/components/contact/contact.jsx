import ContactForm from  '@components/contact/Form.jsx';

const Contact = () => {
  return (
    <section
      id="contacto"
      className="flex flex-col justify-center items-center mb-4 pt-8"
    >
      <div className="w-full min-h-28">
        <h2 className="flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center mb-5 p-2.5 overflow-hidden backface-hidden perspective translate-3d ">
          <p className="block overflow-hidden whitespace-nowrap animate-showup">
            Conéctate conmigo
          </p>
          <p className="block overflow-hidden whitespace-nowrap w-0 animate-reveal">
            <span className="ml-[-400px] animate-slideIn">
              y llevemos tu idea a la realidad
            </span>
          </p>
        </h2>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
