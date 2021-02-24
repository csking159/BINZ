const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserSchema = require("../db/userSchema");

const {
  getUser,
  getUsers,
  addUser,
  removeUser,
  putUser,
  getUserByEmail
} = require("../repositories/userRepository");

router.post("/", async (req, res) => {
  //add user
  //take in data from user
  try {
    const { email, name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User(null, email, name, hashedPassword); //creating object

    console.log(user);
    const insertedUser = await addUser(user);
    const token = jwt.sign({ userID: insertedUser.id }, process.env.JWT_SECRET);
    return res.status(201).json({ token });
  } catch (e) {
    console.log("Error:", e.message);
  }
});

router.get("/me", async (req, res) => {
  const token = req.query.token;
  let userID;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    userID = decodedToken.userID;
  } catch (err) {
    return res.sendStatus(401);
  }
  const user = await getUser(userID);
  return res.json({ email: user.email, name: user.name });
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params; //get id
  await removeUser(id);
  res.sendStatus(200);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    }
  }

  return res.json({ success: false });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params; //get id
  const user = await getUser(id);

  if (!user) {
    return res.sendStatus(404);
  }

  return res.json(user);
});

module.exports = router;

/*
router.post('/signup', (req, res, next) => {
        UserSchema.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(422).json({
                    message: 'User account with this email already exists.'
            });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err 
                        });
                    } else {
                        const user = new user({
                            _id: new mongoose.Types.ObjectId(), 
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        })
});

router.post('/signin', (req, res, next) => {
    UserSchema.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, res) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if (result) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }                    
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }); 
});

router.delete('/:userId', (req, res, next) => {
    UserSchema.remove({_id: req.params.userId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
  
module.exports = router;


*/

/*
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user"); //CHANGED USER MODEL TO SCHEMA

router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;

*/
