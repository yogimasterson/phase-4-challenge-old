const db = require('./connection')

function getAlbums() {
  return db.any('SELECT * FROM albums')
}

function getAlbumsByID(albumID) {
  return db.any('SELECT * FROM albums WHERE id = $1', [albumID])
}

function getReviews() {
  return db.any(`SELECT *, albums.title AS album_title, users.name AS user_name FROM reviews INNER JOIN albums ON reviews.album_id = albums.id
  INNER JOIN users ON reviews.user_id = users.id
  ORDER BY reviews.date_created DESC
  LIMIT 3`)
}

module.exports = {
  getAlbums,
  getAlbumsByID,
  getReviews,
}
