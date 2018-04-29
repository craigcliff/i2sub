const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading:false,

    /*
     ** Global CSS
     */
    css: ['@/assets/css/main.css',
    '@/assets/css/main.scss'



],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~plugins/vue-scrollto.js'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        'nuxt-sass-resources-loader'
           


        
    ],

    sassResources: [
        '@assets/sass/_variables.scss',
        
        
        '@assets/sass/_mixins.scss',
        '@assets/sass/_base.scss'
      ],


    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    }
}