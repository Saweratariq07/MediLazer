import React from 'react';

function MyMap() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4362774043154!2d-8.40475652495015!3d53.87397117243433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485ea1f4c753dbb5%3A0x11ba555785bcf8d3!2sFrenchpark%20Demesne%2C%20Co.%20Roscommon%2C%20F45%20FX62%2C%20Ireland!5e0!3m2!1sen!2s!4v1697043686412!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MyMap;
