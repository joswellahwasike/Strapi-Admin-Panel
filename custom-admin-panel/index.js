export default {
    config: {
      locales: ['en', 'fr', 'es'], // Add support for multiple languages
    },
    bootstrap(app) {
      // Custom logic when the admin panel is loaded
      console.log('Custom admin panel loaded!');
    },
  };
  