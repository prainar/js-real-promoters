const SHEET_ID = "1ISJe_HFZZhbMbUGiRjKMZUWRcMf-aqEyCmKZmpw-yvs";
const SHEET_NAME = "Enquiries";
const TEAM_EMAIL = "jsrealpromoters1@gmail.com";
const OFFICE_ADDRESS = "145, Ganapathy Building, 2nd Floor, Near Railway Station, Erode – 638 001";
const PHONE = "+91 96889 83076";
const HEADERS = ["Received", "Name", "Phone", "Email", "Project type", "Location", "Budget", "Timeline", "Message"];
const LIMITS = { name: 100, phone: 20, email: 254, service: 100, location: 150, budget: 60, timeline: 60, message: 2000 };
const REQUIRED = ["name", "phone", "email", "service", "location", "budget", "timeline"];
const BRAND = { dark: "#142022", accent: "#b8442c", paper: "#f6f4ef", muted: "#5f6b6d", line: "#e2ded5", light: "#f2beaf" };

function doPost(e) {
  try {
    const enquiry = parseEnquiry(JSON.parse(e.postData.contents));
    if (!enquiry) return reply({ ok: false, error: "Please check the details and try again." });
    saveEnquiry(enquiry);
    [notifyTeam, confirmToCustomer, notifyWhatsApp].forEach((send) => safely(send, enquiry));
    return reply({ ok: true });
  } catch (error) {
    console.error(error);
    return reply({ ok: false, error: "Something went wrong. Please call us directly." });
  }
}

function parseEnquiry(body) {
  const enquiry = {};
  for (const field of Object.keys(LIMITS)) {
    const value = typeof body[field] === "string" ? body[field].trim() : "";
    if (value.length > LIMITS[field]) return null;
    enquiry[field] = value;
  }
  if (REQUIRED.some((field) => !enquiry[field])) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) return null;
  if (!/^\+?[0-9 ()-]{7,20}$/.test(enquiry.phone)) return null;
  return enquiry;
}

function saveEnquiry(enquiry) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground(BRAND.dark).setFontColor("#ffffff");
  sheet.setFrozenRows(1);
  const row = sheet.getLastRow() + 1;
  sheet.getRange(row, 3).setNumberFormat("@");
  sheet.getRange(row, 1, 1, HEADERS.length).setValues([[new Date(), enquiry.name, enquiry.phone, enquiry.email, enquiry.service, enquiry.location, enquiry.budget, enquiry.timeline, enquiry.message]]);
  sheet.autoResizeColumns(1, HEADERS.length);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function summarize(enquiry) {
  return [
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    `Email: ${enquiry.email}`,
    `Project type: ${enquiry.service}`,
    `Location: ${enquiry.location}`,
    `Budget: ${enquiry.budget}`,
    `Timeline: ${enquiry.timeline}`,
    enquiry.message ? `Message: ${enquiry.message}` : null
  ].filter(Boolean).join("\n");
}

function detailRows(enquiry) {
  const rows = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Project type", enquiry.service],
    ["Location", enquiry.location],
    ["Budget", enquiry.budget],
    ["Timeline", enquiry.timeline],
    ["Message", enquiry.message || "-"]
  ];
  return rows.map(([label, value]) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${BRAND.line};color:${BRAND.muted};font-size:13px;width:130px;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${BRAND.line};color:${BRAND.dark};font-size:15px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>`).join("");
}

function emailHtml(heading, intro, enquiry, action) {
  return `
<div style="background:${BRAND.paper};padding:28px 12px;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;">
    <div style="background:${BRAND.dark};padding:28px;">
      <div style="font-size:11px;letter-spacing:3px;color:${BRAND.light};font-weight:700;">JS REAL PROMOTERS</div>
      <div style="font-size:24px;font-weight:700;color:#ffffff;margin-top:8px;">${heading}</div>
    </div>
    <div style="padding:28px;">
      <p style="margin:0 0 22px;color:${BRAND.muted};font-size:15px;line-height:1.6;">${intro}</p>
      <table style="width:100%;border-collapse:collapse;">${detailRows(enquiry)}</table>
      ${action}
    </div>
    <div style="background:${BRAND.paper};padding:18px 28px;color:${BRAND.muted};font-size:12px;line-height:1.7;">
      ${escapeHtml(OFFICE_ADDRESS)}<br>${PHONE} &middot; ${TEAM_EMAIL}
    </div>
  </div>
</div>`;
}

function notifyTeam(enquiry) {
  MailApp.sendEmail({
    to: TEAM_EMAIL,
    replyTo: enquiry.email,
    subject: `New enquiry from ${enquiry.name} (${enquiry.service})`,
    body: `A new enquiry came in from the website.\n\n${summarize(enquiry)}`,
    htmlBody: emailHtml(
      "New enquiry received",
      "A new enquiry has come in from the website. Reply to this email to contact the customer directly.",
      enquiry,
      ""
    )
  });
}

function confirmToCustomer(enquiry) {
  const action = `
    <div style="margin-top:26px;">
      <a href="tel:+919688983076" style="display:inline-block;background:${BRAND.accent};color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:6px;font-weight:700;font-size:14px;">Call us on ${PHONE}</a>
    </div>`;
  MailApp.sendEmail({
    to: enquiry.email,
    name: "JS Real Promoters",
    replyTo: TEAM_EMAIL,
    subject: "We have received your enquiry - JS Real Promoters",
    body: `Dear ${enquiry.name},\n\nThank you for contacting JS Real Promoters. We have received your enquiry and our team will be in touch with you shortly.\n\nHere is what you sent us:\n${summarize(enquiry)}\n\nIf you need to add anything, reply to this email or call ${PHONE}.\n\nJS Real Promoters\n${OFFICE_ADDRESS}`,
    htmlBody: emailHtml(
      "Thank you for your enquiry",
      `Dear ${escapeHtml(enquiry.name)}, we have received your enquiry and our team will be in touch with you shortly. Here is a copy of the details you sent us.`,
      enquiry,
      action
    )
  });
}

function notifyWhatsApp(enquiry) {
  const properties = PropertiesService.getScriptProperties();
  const apiKey = properties.getProperty("CALLMEBOT_APIKEY");
  const phone = properties.getProperty("WHATSAPP_PHONE");
  if (!apiKey || !phone) return;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent("New enquiry\n" + summarize(enquiry))}&apikey=${encodeURIComponent(apiKey)}`;
  UrlFetchApp.fetch(url, { muteHttpExceptions: true });
}

function safely(send, enquiry) {
  try {
    send(enquiry);
  } catch (error) {
    console.error(error);
  }
}

function reply(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
