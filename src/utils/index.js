/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const mapDBToModel = ({
  id, name, title, year, performer, genre, duration, album_id,
}) => ({
  id,
  name,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
});

module.exports = { mapDBToModel };
