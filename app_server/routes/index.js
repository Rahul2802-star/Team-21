const ctrlMain = require("../controllers/main");
const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");
/* Locations pages */
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);
/* Other pages */
router.get("/about", ctrlOthers.about);
/* GET homepage. */
router.get("/", ctrlMain.index);

// Render the booking form page
router.get('/book-now/:hostel', (req, res) => {
    res.render('book-now', {
      title: 'Book Now - Hostel Buddies',
      selectedHostel: req.params.hostel, // Pre-select hostel in the dropdown
    });
  });
  
  // Handle the form submission
  router.post('/submit-booking', (req, res) => {
    const { name, email, contact, checkin, checkout, guests, hostel } = req.body;
  
    // Pass the title along with the booking details
    res.render('booking-confirmation', {
      title: 'Booking Confirmation', // Make sure to define this variable
      name,
      email,
      contact,
      checkin,
      checkout,
      guests,
      hostel
    });
  });
  

module.exports = router;
