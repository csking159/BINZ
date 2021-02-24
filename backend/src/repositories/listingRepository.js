const Listing = require("../models/listing");
const ListingSchema = require("../db/listingSchema");

const getListings = async () => {
  const listings = await ListingSchema.find().exec();
  return listings.map(l => convertToModel(l)); //so that it uses listing.js and not the mongoose format
};

const getListing = async id => {
  //id is parameter
  const listing = await ListingSchema.findById(id).exec();
  return convertToModel(listing);
};

const getListingsByUserID = async userID => {
  const listings = await ListingSchema.find({ userID });
  return listings.map(l => convertToModel(l));
};
const addListing = async listing => {
  const insertedListing = await ListingSchema.create({
    name: listing.name,
    phone: listing.phone,
    email: listing.email,
    duration: listing.duration,
    rentPerMonth: listing.rentPerMonth,
    location: listing.location,
    pets: listing.pets,
    furnished: listing.furnished,
    startDate: listing.startDate,
    endDate: listing.endDate,
    comments: listing.comments,
    listingImage: listing.listingImage,
    userID: listing.userID
  });
  return convertToModel(insertedListing);
};

const putListing = async (id, listing) => {
  //id is parameter
  const updatedListing = await ListingSchema.findByIdAndUpdate(
    id,
    listing
  ).exec();
  return convertToModel(updatedListing);
};

const removeListing = async id => {
  await ListingSchema.findByIdAndDelete(id).exec();
};

const convertToModel = listing => {
  return new Listing(
    listing._id,
    listing.name,
    listing.phone,
    listing.email,
    listing.duration,
    listing.rentPerMonth,
    listing.location,
    listing.pets,
    listing.furnished,
    listing.startDate,
    listing.endDate,
    listing.comments,
    listing.listingImage,
    listing.userID
  ); //convert from doc type to listing type
};

module.exports = {
  getListings,
  getListing,
  addListing,
  removeListing,
  putListing,
  getListingsByUserID
};
