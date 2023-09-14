export default {
  subApps: [
    {
      name: 'app-vue3-vite',
      entry: '//localhost:5001',
      container: '#sub-container',
      activeRule: '/app/app-vue3-vite',
      props: {}
    },
    {
      name: 'app-vue2-webpack',
      entry: '//localhost:5002',
      container: '#sub-container',
      activeRule: '/app/app-vue2-webpack',
      props: {}
    }
  ]
}
