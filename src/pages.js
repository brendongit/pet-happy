const aboutLocation = require('./database/fakedata.js');
const location = require('./database/fakedata.js');

module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index')
    },

    location(req, res) {
        return res.render('location', {location})
    },

    aboutLocation(req, res) {
        return res.render('about-location', {aboutLocation})
    },

    createLocation(req, res) {
        return res.render('create-location')
    }

}