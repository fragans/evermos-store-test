import Vue from 'vue'
// import he from 'he' // html entities encode/decode tapi gede cui 68.1K, gzip 30K https://github.com/mathiasbynens/he

export const rupiahFormat = (str) => {
  return 'Rp ' + str.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

Vue.filter(
  'rupiahFormat',
  rupiahFormat
)
