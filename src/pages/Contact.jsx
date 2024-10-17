import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('https://ngo-backend-om-pagariyas-projects.vercel.app/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      setSuccess('Message sent successfully!'); // Set success message
      setError(null); // Clear error message

      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to send message. Please try again.'); // Set error message
      setSuccess(null); // Clear success message
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>

        {/* Contact Details (Phone, Email, Location) */}
        <div className="flex flex-col lg:flex-row justify-around items-center text-center lg:text-left space-y-6 lg:space-y-0 mb-10">
          <div className="flex flex-col items-center">
            <i className="fas fa-phone-alt text-2xl mb-2"></i>
            <a href="tel:9049977905" className="text-lg text-gray-700 hover:underline">
              Call: 9049977905
            </a>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-envelope text-2xl mb-2"></i>
            <a href="mailto:happydayfoundation@gmail.com" className="text-lg text-gray-700 hover:underline">
              Email: happydayfoundation@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
            <p className="text-lg text-gray-700 text-center max-w-xs">
              E7, Laxmibai Kunkalol Market, Kolhar BK, Tal-Rahata, Dist-Ahmednagar, INDIA 413710
            </p>
          </div>
        </div>

        {/* Google Map and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.8378777073263!2d74.537796!3d19.5384146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf398f6ece8b9%3A0x955dfab6e8df1146!2sLaxmibai%20Kunkulol%20Sankool!5e0!3m2!1sen!2sin!4v1696417800996!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="border-0"
              style={{ aspectRatio: '1 / 1' }} // 1:1 aspect ratio
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>

              {/* Display success or error message */}
              {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
              {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
