require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Mimi Vuong',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-vimeo',
      options: {
        clientID: 'd8ddbcc0ef6d2691d7ac70193495122bb12a7f5c',
        clientSecret: 'tsRGvZ7DeZgwPJjv8mx4lhJS9Vr+vYC9VQTXMcD1/YcMhHqJLIBgS+K8INi7W9MH5+c+/oXuUkZqsZTqBq1GRYDjdeQZMs9xtvW6kYMKYxWjI+CY46dERJwb0cllVZrj',
        userID: 'mimivuong',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
};
