import { useData } from '../context/DataContext';

function Contact() {
  const data = useData();

  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name*</label>
          <input type="text" className="w-full border-gray-300 rounded-md p-2" required />
        </div>
        <div>
          <label className="block text-gray-700">Email*</label>
          <input type="email" className="w-full border-gray-300 rounded-md p-2" required />
        </div>
        <div>
          <label className="block text-gray-700">Message*</label>
          <textarea className="w-full border-gray-300 rounded-md p-2" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Send</button>
      </form>
      <address className="text-center mt-6">
        {data?.address} | Phone: {data?.contactNumber}
      </address>
    </section>
  );
}

export default Contact;
