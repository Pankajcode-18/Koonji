export const chatbotConfig = {
  companyInfo: {
    name: 'Koonji Infotech',
    status: 'Online',
    tagline: "We're here to assist you.",
  },

  welcomeMessage:
    "👋 Hello! Welcome to our website.\n\nI'm your virtual assistant.\nI can provide basic information about our company, services, and contact details.\n\nAI-powered responses will be available soon.",

  fallbackMessage:
    "Thank you for your message.\n\nOur AI chatbot is currently under development.\nFull conversational support will be available soon.\n\nFor now, please use the Contact page or the quick options above.",

  quickActions: [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'contact', label: 'Contact Information' },
    { id: 'location', label: 'Location' },
    { id: 'quote', label: 'Get a Quote' },
  ],

  responses: {
    about:
      "**About Koonji Infotech**\nWe are Nepal's premier creative advertising agency. We craft bold campaigns, powerful brands, and performance-driven content that connects your business with the right audience at the right moment.\n\nSince 2012, we've helped over 500 businesses grow.",
    services:
      "**Our Services**\nWe offer a comprehensive suite of creative services:\n• Ad Creation\n• Digital Marketing\n• Branding\n• Video Production\n• Performance Ads\n• Web Development\n• Application Development\n\nVisit our [Services Page](/services) for more details.",
    contact:
      "**Contact Information**\n• Email: hello@koonji.com\n• Phone: +977-1-4123456\n• Mobile: +977-9801234567\n\nYou can also reach out via our [Contact Page](/contact-us).",
    location:
      "**Our Location**\nHead Office: Koonji Tower, 4th Floor\nKathmandu 44600, Nepal\n\nBusiness Hours: Sunday - Friday, 9:00 AM - 6:00 PM",
    quote:
      "Thank you for your interest.\nPlease fill out our [Contact Form](/contact-us) and our team will get back to you shortly.",
  },
};
