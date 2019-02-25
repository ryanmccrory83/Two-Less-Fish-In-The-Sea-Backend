// Update with your config settings.
require('dotenv').config({
  path: 'path_to_env_file'
})

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///wedding_site'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
}