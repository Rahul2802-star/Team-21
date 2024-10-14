/* GET 'home' page */

const homelist = (req, res) => {
  res.render("locations-list", { title: "Home" });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render("location-info", { title: "Location info" });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render("location-review-form", { title: "Add review" });
};

/* GET 'Book Now' page */
const bookNow = (req, res) => {
  res.render("book", { title: "Book Now" }); // Adjust the view name as needed
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  bookNow, // Export the bookNow function
};
