import type { FormConfig } from "../types";

export const reportForm: FormConfig = {
  source: "report-qr",
  submitLabel: "Get my child's results",
  successTitle: "Thank you!",
  successText: "Your child's report will be sent to your WhatsApp.",
  whatsappMessage: "Hello Sportify Academy. I requested my child's report on your website.",
  fields: [
    { name: "school", label: "School or nursery", type: "text", required: true, autoComplete: "organization" },
    { name: "child_name", label: "Child's name", type: "text", required: true },
    { name: "class", label: "Class", type: "text", required: true },
    { name: "parent_name", label: "Parent's name", type: "text", required: true, autoComplete: "name" },
    { name: "whatsapp", label: "WhatsApp number", type: "tel", required: true, autoComplete: "tel", defaultValue: "+971 " },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  ],
  consents: [
    {
      name: "consent_results",
      label: "I agree to receive my child's results by WhatsApp and email.",
      required: true,
    },
    {
      name: "consent_offers",
      label: "I also agree to receive related offers by WhatsApp and email. (Optional)",
    },
  ],
};
