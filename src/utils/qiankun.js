import { registerMicroApps } from 'qiankun'
import config from '@/config.js'

const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('after unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
}
