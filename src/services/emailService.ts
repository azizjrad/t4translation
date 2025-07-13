import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_er34084",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_vnzlitf",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "nQjzW8I9y6b1faYhw",
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

interface ContactFormData {
  name: string;
  email: string;
  reason?: string;
  message: string;
}

interface GetStartedFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  message?: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    reason: formData.reason || "General Inquiry",
    message: formData.message,
    to_email:
      import.meta.env.VITE_RECEIVER_EMAIL || "contact@t4translation.com", // Your receiving email
    reply_to: formData.email,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw new Error("Failed to send email. Please try again.");
  }
};

export const sendGetStartedEmail = async (
  formData: GetStartedFormData
): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "Not provided",
    project_type: formData.projectType || "Not specified",
    source_language: formData.sourceLanguage || "Not specified",
    target_language: formData.targetLanguage || "Not specified",
    message: formData.message || "No additional message",
    to_email:
      import.meta.env.VITE_RECEIVER_EMAIL || "contact@t4translation.com", // Your receiving email
    reply_to: formData.email,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending get started email:", error);
    throw new Error("Failed to send email. Please try again.");
  }
};
