function Contact() {
    return (
      <div className="max-w-4xl mx-auto m-5">
        <h1 className="text-4xl font-bold mb-6 text-purple-700">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-purple-700">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-purple-700">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">123 Sugar Street, Industrial Area</p>
                <p className="text-gray-600">Your City, State 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@crystarasugar.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+91 123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact;