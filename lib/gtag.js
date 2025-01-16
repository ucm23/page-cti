// lib/gtag.js
export const GA_TRACKING_ID = 'G-MW5VKXSFTG'; 

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Registrar eventos personalizados
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};