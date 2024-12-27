export default function ContactSection() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contato</h2>
      <div className="text-lg text-gray-700">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:professorinaciosilva@gmail.com" className="text-blue-500 underline hover:text-blue-700">
            professorinaciosilva@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
