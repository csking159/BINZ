const express = require("express");
const Listing = require("../models/listing");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const {
  getListing,
  getListings,
  addListing,
  removeListing,
  putListing,
  getListingsByUserID
} = require("../repositories/listingRepository");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().getTime() + file.originalname);
  }
});
const fileFilter = (re1, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const router = express.Router(); //all routes are added to /listings

router.post("/", upload.single("listingImage"), async (req, res) => {
  //add listing
  //take in data from user
  const {
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
    token
  } = req.body;

  let userID;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    userID = decoded.userID;
  } catch (err) {
    return res.sendStatus(401);
  }

  const listingImage = req.file.path;
  const listing = new Listing(
    null,
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
  ); //creating object
  const insertedListing = await addListing(listing);
  return res.status(201).json(insertedListing);
});

router.get("/", async (req, res) => {
  //get '/' means get all the listings
  const listings = await getListings(); // getes list of listings
  return res.json(listings);
});

router.get("/owned", async (req, res) => {
  const token = req.query.token;
  let userID;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    userID = decodedToken.userID;
  } catch (err) {
    return res.sendStatus(401);
  }
  const listings = await getListingsByUserID(userID);
  return res.json(listings);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params; //get id
  const listing = await getListing(id);

  if (!listing) {
    return res.sendStatus(404);
  }

  return res.json(listing);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params; //get id
  const listing = await getListing(id);
  try {
    const decodedToken = jwt.verify(req.query.token, process.env.JWT_SECRET);
    if (listing.userID.toString() !== decodedToken.userID)
      return res.sendStatus(401);
  } catch (err) {
    return res.sendStatus(401);
  }
  await removeListing(id);
  res.sendStatus(200);
});

router.put("/:id", upload.single("listingImage"), async (req, res) => {
  //Update listing
  const {
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
    token
  } = req.body;
  const listingImage = req.file.path;
  const { id } = req.params;
  const existingListing = await getListing(id);
  let userID;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    userID = decodedToken.userID;
    if (existingListing.userID.toString() !== decodedToken.userID)
      return res.sendStatus(401);
  } catch (err) {
    return res.sendStatus(401);
  }
  const listing = new Listing(
    null,
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
  );

  const updatedListing = await putListing(id, listing);
  return res.status(201).json(updatedListing);
});
module.exports = router;
