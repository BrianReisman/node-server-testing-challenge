// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    connection: {
      filename: './data/hobbits.db3',
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    connection: {
      filename: './data/test.db3',
    },
  },
};
