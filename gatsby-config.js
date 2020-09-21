/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://bozonaro.web.app`,
    title: `Bozonaro`,
    description: `Arquivo de frases inéditas de Bozo`,
  },
	plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: "AIzaSyBaEnpAJS4j3nAmhirc-mAptMATy-5wUy8",
					authDomain: "mitonaro-f6796.firebaseapp.com",
					databaseURL: "https://mitonaro-f6796.firebaseio.com",
					projectId: "mitonaro-f6796",
					storageBucket: "mitonaro-f6796.appspot.com",
					messagingSenderId: "247161612247",
					appId: "1:247161612247:web:02bd008c034d69d11b0d92",
					measurementId: "G-VV2ZHD36RM"
				}
			}
		}
	],
}
