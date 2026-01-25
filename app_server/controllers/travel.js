//Get travler view

const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways"});
};

module.exports = {
    travel
};