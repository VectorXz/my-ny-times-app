import axios from 'axios'

export default async function handler(req, res) {
    const { period } = req.query
    const api_key = process.env.API_KEY
    const data = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${api_key}`)
    .then((resp) => {
        if(resp.status && resp.status == 200) {
        return resp.data.results
        }
    })
    .catch((err) => {
        console.log(err)
        return null
    })
    return res.status(200).json(data)
  }