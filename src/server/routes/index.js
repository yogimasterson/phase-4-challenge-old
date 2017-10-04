const router = require('express').Router()
const db = require('../../db/index')

router.get('/', (req, res) => {
  Promise.all([db.getAlbums(), db.getReviews()])
    .then(([albums, reviews]) => {
      res.render('index', {albums, reviews})
    })
    .catch((error) => {
      res.status(500).render('common/error', {error})
    })
})

router.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID

  Promise.all([db.getAlbumsByID(albumID), db.getReviewsById()])
    .then((albums, reviews) => {
      const album = albums[0]
      res.render('album', {album, reviews})
    })
    .catch((error) => {
      res.status(500).render('common/error', {error})
    })
})

module.exports = router
