import type { LegalPage } from "../types";

export const legalNotice =
  "PLACEHOLDER: This page is not final and is not legal advice. The client's lawyer must write the final text. Each section below only says what the final text should cover.";

const todo = "[TODO: lawyer to write this section]";

export const privacyPage: LegalPage = {
  meta: {
    title: "Privacy Policy | Sportify Academy",
    description: "How Sportify Academy handles personal data. Placeholder text, awaiting review by the client's lawyer.",
    path: "/privacy",
  },
  heading: "Privacy Policy",
  sections: [
    { title: "Who we are", text: `The legal name and contact details of the company. ${todo}` },
    {
      title: "What data we collect",
      text: `Data sent through our forms: names, children's details, phone numbers, email addresses, and test results. ${todo}`,
    },
    {
      title: "Children's data",
      text: `How we handle data about children, including parental consent, test results and genetics data. ${todo}`,
    },
    {
      title: "How we use data",
      text: `Replying to requests, managing bookings, sending reports and, with consent, sending offers. ${todo}`,
    },
    {
      title: "Who receives data",
      text: `Service providers such as form automation, WhatsApp and hosting, and any transfers outside the UAE. ${todo}`,
    },
    { title: "How long we keep data", text: `How long each type of data is kept. ${todo}` },
    { title: "Your rights", text: `How to see, correct or delete data, and how to withdraw consent. ${todo}` },
  ],
};

export const termsPage: LegalPage = {
  meta: {
    title: "Terms | Sportify Academy",
    description: "Terms for using the Sportify Academy website and services. Placeholder text, awaiting review by the client's lawyer.",
    path: "/terms",
  },
  heading: "Terms",
  sections: [
    { title: "Using this website", text: `The rules for using this website. ${todo}` },
    { title: "Bookings and payment", text: `How bookings and payments work. ${todo}` },
    { title: "Cancellations and refunds", text: `What happens if a booking is changed or cancelled. ${todo}` },
    {
      title: "Reports and results",
      text: `What an assessment report does and does not promise, and that it is not medical advice. ${todo}`,
    },
    { title: "Liability", text: `The limits of the company's liability, including safety during tests. ${todo}` },
    { title: "Governing law", text: `Which law and courts apply. ${todo}` },
  ],
};

export const cookiesPage: LegalPage = {
  meta: {
    title: "Cookie Policy | Sportify Academy",
    description: "How the Sportify Academy website uses cookies. Placeholder text, awaiting review by the client's lawyer.",
    path: "/cookies",
  },
  heading: "Cookie Policy",
  sections: [
    {
      title: "What this website stores",
      text: `This website keeps UTM campaign details in the browser for the current visit, and sends them with forms. ${todo}`,
    },
    {
      title: "Third-party content",
      text: `Google Maps and video players load only when a visitor presses the button. These services may set their own cookies. ${todo}`,
    },
    { title: "Analytics", text: `Add this section if analytics tools are added later. ${todo}` },
  ],
};
