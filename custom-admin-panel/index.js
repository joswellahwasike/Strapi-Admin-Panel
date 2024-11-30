// Importing configurations from different files
import config from './config';
import theme from './theme';
import navigation from './navigation';

export default {
  config: {
    ...config,         // Spread the content of 'config'
    ...theme,          // Spread the content of 'theme'
    ...navigation,     // Spread the content of 'navigation'
    locales: ['en', 'fr', 'es'], // Adding support for multiple languages
    wysiwyg: {
      enabled: true,
      customWysiwyg: {
        component: '@tinymce/tinymce-react',
        props: {
          apiKey: 'your-tinymce-api-key',
          init: {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
          },
        },
      },
    },
    navigation: [
      {
        title: 'Reports',
        icon: 'chart-bar',
        link: '/plugins/reports',
      },
    ],
  },
  theme: {
    colors: {
      primary100: '#D3E4CD',
      primary200: '#ADC2A9',
      primary500: '#6B705C',
      neutral100: '#F5F5F5',
      neutral500: '#333333',
    },
  },
  bootstrap(app) {
    console.log('Admin panel customization loaded successfully.');
  },
};
