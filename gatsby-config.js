/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://centralpark-ou-aclimacao.web.app`,
    title: `CentralPark ou Aclimação`,
    description: `Quiz - As imagens são do CentralPark ou do Parque da Aclimação?`,
  },
	plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: "AIzaSyDrBkKDBo4SXJmJazqRPjyWicI1rooVJKE",
					authDomain: "centralpark-ou-aclimacao.firebaseapp.com",
					databaseURL: "https://centralpark-ou-aclimacao-default-rtdb.firebaseio.com",
					projectId: "centralpark-ou-aclimacao",
					storageBucket: "centralpark-ou-aclimacao.appspot.com",
					messagingSenderId: "967312803029",
					appId: "1:967312803029:web:efef39f1c349bda568ce5c",
					measurementId: "G-0RRT9E91L4"
				}
			}
		}
	],
}
