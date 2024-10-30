import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Appoin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptedTerms: false,
    service: '',
    date: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.message) errors.message = 'Message is required';
    if (!formData.acceptedTerms) errors.acceptedTerms = 'You must accept the terms and conditions';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email if form is valid
      emailjs.send(
        'saweratariq09@gmail.com', // Replace with your EmailJS Service ID
        'Pinki112233', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service,
          date: formData.date,
        },
        'saweratariq09@gmail.com' // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send email.');
      });
    } else {
      console.log('Validation failed:', formErrors);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-24 flex items-center justify-center py-10">
      <div className="relative w-full max-w-2xl bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] p-12 rounded-lg border-black">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
            {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E Mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
              {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
              />
              {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
            </div>
          </div>

          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-black bg-transparent text-black focus:outline-none"
            >
              <option value="">Select Service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
            </select>
          </div>

          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Additional Note"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full h-32 p-4 border-2 border-black bg-transparent placeholder-black focus:outline-none"
            />
            {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
          </div>

          <div className="flex items-start text-black justify-between">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleInputChange}
              className="mr-2 bg-black"
              required
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>
          {formErrors.acceptedTerms && <span className="text-red-500 text-sm">{formErrors.acceptedTerms}</span>}

          <button
            type="submit"
            className="w-full bg-black text-yellow-400 font-semibold py-3 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appoin;
