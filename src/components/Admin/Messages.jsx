import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://ngo-backend-om-pagariyas-projects.vercel.app/contactform";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(20); // Show 20 messages per page

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error.response?.data || error.message);
      setError('Failed to fetch messages. Please try again.');
      setLoading(false);
    }
  };

  // Filter messages based on the search term (includes names, email, subject, and message)
  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading messages...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">Messages</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email, subject, or message..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-blue-700 text-white text-left text-sm leading-normal">
              <th className="py-3 px-6 border-b border-blue-800">Name</th>
              <th className="py-3 px-6 border-b border-blue-800">Email</th>
              <th className="py-3 px-6 border-b border-blue-800">Subject</th>
              <th className="py-3 px-6 border-b border-blue-800">Message</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {currentMessages.length > 0 ? (
              currentMessages.map((msg, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="py-3 px-6 border-r border-gray-200">{msg.name}</td>
                  <td className="py-3 px-6 border-r border-gray-200">{msg.email}</td>
                  <td className="py-3 px-6 border-r border-gray-200">{msg.subject}</td>
                  <td className="py-3 px-6">{msg.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex -space-x-px">
            {/* Prev Button */}
            <li>
              <button
                onClick={goToPrevPage}
                className={`px-3 py-2 leading-tight border ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white'} border-gray-300`}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((num) => (
              <li key={num}>
                <button
                  onClick={() => paginate(num + 1)}
                  className={`px-3 py-2 leading-tight border ${
                    currentPage === num + 1
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white'
                  } border-gray-300`}
                >
                  {num + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={goToNextPage}
                className={`px-3 py-2 leading-tight border ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white'} border-gray-300`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Messages;
