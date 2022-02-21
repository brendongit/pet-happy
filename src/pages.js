const Database = require('./database/db');
const saveAboutLocation = require('saveAboutLocation');

module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index')
    },

    aboutLocation(req, res) {
        return res.render('about-location', {aboutLocation})
    },

    location(req, res) {
        const selectedLocation = await db.all("SELECT * FROM location")
        return res.render('location', {location})
    },

    createLocation(req, res) {
        return res.render('create-location')
    }

}


// 58:44 video