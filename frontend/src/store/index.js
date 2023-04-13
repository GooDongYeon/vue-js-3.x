import { defineStore } from 'pinia'

export const useCompStore = defineStore('compar', () => {
let LEFT_CAR = ''
let RIGHT_CAR = ''

function selectleftcar(leftcar) {
  this.LEFT_CAR = leftcar
}
function selectrightcar(rightcar) {
  this.RIGHT_CAR = rightcar
}

function getleftcar() {
  return this.LEFT_CAR
}
return {
  LEFT_CAR, RIGHT_CAR, selectleftcar, selectrightcar, getleftcar
}
})
