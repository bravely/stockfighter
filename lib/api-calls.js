var fetch = require('node-fetch')
require('dotenv').config()

const apiKey = process.env.API_KEY
const baseUrl = 'http://api.stockfighter.io/ob/api'

function getVenueStocks (venueTag, callback) {
  callback = callback || function () {}
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/venues/${venueTag}/stocks`, {
      headers: { 'X-Starfighter-Authorization': apiKey }
    }).then((res) => {
      resolve(res.json())
      return callback(null, res.json())
    }).catch((err) => {
      reject(err)
      return callback(err)
    })
  })
}

module.exports.getVenueStocks = getVenueStocks
