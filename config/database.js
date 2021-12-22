
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'backend'),
        username: env('DATABASE_USERNAME', 'webkasela'),
        password: env('DATABASE_PASSWORD', '310100'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
      },
    },
  },
});
