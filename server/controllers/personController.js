const Person = require("../models/Person");

//getProfiles function to get all profiles
const getPersons = async (req, res) => {
  const profiles = await Profile.find({});
  res.json(profiles);
};

//createProfile function to create new name
const newPerson = async (req, res) => {
  try {
    console.log(req);

    const {
      name,
      birth,
      death,
      nationality,
      occupation,
      causeOfDeath,
      url,
      picture,
    } = req.body;
    if (
      (!name,
      !birth,
      !death,
      !nationality,
      !occupation,
      !causeOfDeath,
      !url,
      !picture)
    ) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    

    const newProfile = new Profile({
      name,
      birth,
      death,
      nationality,
      occupation,
      causeOfDeath,
      url,
      picture,
    });

    const profile = await Profile.findOne({ name: name });
    if (profile) {
      return res.status(409).send("Profile already exists");
    }

    newProfile.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({
        message: "Image created",
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getPersons,
  newPerson,
};
