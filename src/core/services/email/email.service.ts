import emailjs from "emailjs-com";
import { emailConfig } from "../../config/email.config";
import type { ContactFormData } from "./email.types";

export const sendThankYouEmail = async (data: {
  name: string;
  email: string;
  companyName: string;
  services: string;
}) => {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.thankYouTemplateId,
    {
      to_name: data.name,
      email: data.email,
      company_name: data.companyName,
      services: data.services,
      from_name: "ARKA NEXUS",
    },
    emailConfig.publicKey,
  );
};

export const sendNotificationEmail = async (data: ContactFormData) => {
  
  const hasMessage =
    data.message && data.message.trim().length > 0;

  const additionalMessageBlock = hasMessage
    ? `
      <p style="margin:24px 0 8px;font-weight:bold;">Additional Message</p>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
        style="background:#f9fafb;border-radius:8px;">
        <tr>
          <td style="padding:12px;white-space:pre-line;">
            ${data.message}
          </td>
        </tr>
      </table>
    `
    : "";

  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.notificationTemplateId,
    {
      customer_name: data.name,
      customer_designation: data.designation,
      customer_department: data.department || "Not specified",
      company_name: data.companyName,
      company_address: data.companyAddress,
      customer_email: data.email,
      mobile: data.mobile,
      services: data.services === "Others" ? data.otherServices : data.services,
      additional_message: additionalMessageBlock,
    },
    emailConfig.publicKey,
  );
};