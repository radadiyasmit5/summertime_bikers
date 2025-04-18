/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://summertimebikers.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    exclude: ['/loading', '/callbackGform'], // Excluding utility pages from sitemap
    changefreq: 'weekly',
    priority: 0.7,
}