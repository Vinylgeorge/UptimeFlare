// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: 'CloudZenixes Status',
  // Links shown at the header of your status page
  links: [
    { link: 'https://cloudzenixes.com', label: 'Website' },
    { link: 'mailto:support@cloudzenixes.com', label: 'Contact Support', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    // ===== Website =====
    {
      id: 'website',
      name: 'Website',
      method: 'GET',
      target: 'https://cloudzenixes.com',
      tooltip: 'CloudZenixes main website',
      statusPageLink: 'https://cloudzenixes.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },

    // ===== Client Area / Billing =====
    // Remove the "//" at the start of each line below and put your real URL
    // {
    //   id: 'client_area',
    //   name: 'Client Area & Billing',
    //   method: 'GET',
    //   target: 'https://my.cloudzenixes.com',
    //   tooltip: 'Customer portal, orders and invoices',
    //   statusPageLink: 'https://my.cloudzenixes.com',
    //   expectedCodes: [200],
    //   timeout: 10000,
    // },

    // ===== Provisioning API =====
    // {
    //   id: 'api',
    //   name: 'Provisioning API',
    //   method: 'GET',
    //   target: 'https://api.cloudzenixes.com/health',
    //   expectedCodes: [200],
    //   timeout: 10000,
    // },

    // ===== Server check (TCP) =====
    // Checks that a server port is reachable, e.g. a cloud node in India
    // {
    //   id: 'node_india',
    //   name: 'Cloud Servers – India',
    //   method: 'TCP_PING',
    //   target: 'YOUR.SERVER.IP:443',
    //   tooltip: 'India region compute node',
    //   timeout: 5000,
    // },
  ],

  // ===== Alerts (optional) =====
  // Telegram alerts when something goes down. Leave commented until you have a bot.
  // notification: {
  //   webhook: {
  //     url: 'https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage',
  //     payloadType: 'x-www-form-urlencoded',
  //     payload: {
  //       chat_id: YOUR_CHAT_ID,
  //       text: '$MSG',
  //     },
  //     timeout: 10000,
  //   },
  //   timeZone: 'Asia/Kolkata',
  //   gracePeriod: 5,
  // },
}

// Scheduled maintenance notices (empty = none shown)
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
