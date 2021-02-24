class Listing {
  constructor(
    id,
    name,
    phone,
    email,
    duration,
    rentPerMonth,
    location,
    pets,
    furnished,
    startDate,
    endDate,
    comments,
    listingImage,
    userID
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.duration = duration;
    this.rentPerMonth = rentPerMonth;
    this.location = location;
    this.pets = pets;
    this.furnished = furnished;
    this.startDate = startDate;
    this.endDate = endDate;
    this.comments = comments;
    this.listingImage = listingImage;
    this.userID = userID;
  }
}

module.exports = Listing; //import class into other files.
