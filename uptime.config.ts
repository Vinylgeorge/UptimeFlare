import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'CloudZenixes Status',
  links: [
    { link: 'https://cloudzenixes.com', label: 'Website' },
    { link: 'https://cloudzenixes.com/billing/login', label: 'Client Area' },
    { link: 'mailto:support@cloudzenixes.com', label: 'Contact Support', highlight: true },
  ],
  // Monitors are shown in these groups, in this order
  group: {
    '🌐 Website & Products': ['website', 'cloud_offerings', 'cybersecurity'],
    '💳 Client Area & Billing': ['client_area', 'billing_cart'],
  },
  favicon: 'https://cloudzenixes.com/img/cloudzenixes-icon.svg',
  logo: 'https://cloudzenixes.com/img/cloudzenixes-logo.svg',
  maintenances: {
    upcomingColor: 'gray',
  },
  customFooter:
    '<p style="text-align:center;font-size:13px;color:#64748b;margin:16px 0">' +
    '© 2026 CloudZenixes · ' +
    '<a href="https://cloudzenixes.com" target="_blank">cloudzenixes.com</a> · ' +
    '<a href="mailto:support@cloudzenixes.com">support@cloudzenixes.com</a>' +
    '<br>Status monitoring powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank">UptimeFlare</a>' +
    '</p>',
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // ===== Website & Products =====
    {
      id: 'website',
      name: 'Website',
      method: 'GET',
      target: 'https://cloudzenixes.com',
      tooltip: 'CloudZenixes main website',
      statusPageLink: 'https://cloudzenixes.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'cloud_offerings',
      name: 'Cloud Offerings',
      method: 'GET',
      target: 'https://cloudzenixes.com/offerings.html',
      tooltip: 'Hosting, email, CRM, AI and white-label products',
      statusPageLink: 'https://cloudzenixes.com/offerings.html',
      expectedCodes: [200],
      timeout: 10000,
      hideLatencyChart: true,
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      method: 'GET',
      target: 'https://cloudzenixes.com/cybersecurity.html',
      tooltip: 'Endpoint, email, network, SOC, backup and compliance',
      statusPageLink: 'https://cloudzenixes.com/cybersecurity.html',
      expectedCodes: [200],
      timeout: 10000,
      hideLatencyChart: true,
      headers: { 'User-Agent': 'Uptimeflare' },
    },

    // ===== Client Area & Billing =====
    {
      id: 'client_area',
      name: 'Client Area',
      method: 'GET',
      target: 'https://cloudzenixes.com/billing/login',
      tooltip: 'Customer login, services and invoices',
      statusPageLink: 'https://cloudzenixes.com/billing/login',
      expectedCodes: [200],
      timeout: 10000,
      responseForbiddenKeyword: 'Database Error',
      headers: { 'User-Agent': 'Uptimeflare' },
    },
    {
      id: 'billing_cart',
      name: 'Orders & Checkout',
      method: 'GET',
      target: 'https://cloudzenixes.com/billing/cart',
      tooltip: 'Order new services',
      statusPageLink: 'https://cloudzenixes.com/billing/cart',
      expectedCodes: [200],
      timeout: 10000,
      hideLatencyChart: true,
      headers: { 'User-Agent': 'Uptimeflare' },
    },

    // ===== Add servers later (remove the // to enable) =====
    // {
    //   id: 'node_india',
    //   name: 'Cloud Servers – India',
    //   method: 'TCP_PING',
    //   target: 'YOUR.SERVER.IP:443',
    //   tooltip: 'India region',
    //   timeout: 5000,
    // },
    // Then add 'node_india' to a group above, e.g.
    // '🖥️ Cloud Infrastructure': ['node_india'],
  ],

  // ===== Telegram alerts (optional – fill in, then remove the //) =====
  // notification: {
  //   webhook: {
  //     url: 'https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage',
  //     payloadType: 'x-www-form-urlencoded',
  //     payload: { chat_id: YOUR_CHAT_ID, text: '$MSG' },
  //     timeout: 10000,
  //   },
  //   timeZone: 'Asia/Kolkata',
  //   gracePeriod: 3,
  // },
}

// Scheduled maintenance notices – add entries when you plan work, e.g.:
// {
//   monitors: ['client_area', 'billing_cart'],
//   title: 'Billing system upgrade',
//   body: 'The client area may be briefly unavailable.',
//   start: '2026-11-05T01:00:00+05:30',
//   end:   '2026-11-05T03:00:00+05:30',
//   color: 'blue',
// },
const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { maintenances, pageConfig, workerConfig }
