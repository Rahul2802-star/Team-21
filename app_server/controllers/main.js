/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'saisra' });
   };
   module.exports = {
    index
   };