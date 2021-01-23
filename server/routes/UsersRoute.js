import express from 'express';
import {getUser, getUserById, createUser, updateUser, deleteUser} from '../logic/UsersLogic.js';
import Users from "../entities/Users.js"

const router = express.Router();


// router.route('/users').post(async (req, res) => {
//     res.json(await createUser(req.body));
// })

// router.route('/users').get( async (req, res) => {
//     res.json(await getUser());
// })

// router.route('/users/:id').get( async (req, res) => {
//     res.json(await getUserById(req.params.id));
// })

// router.route('/users/:id').put( async (req, res) => {
//     res.json(await updateUser(req.params.id, req.body));
// })

// router.route('/users/:id').delete( async (req, res) => {
//     res.json(await deleteUser(req.params.id));
// })

router.route('/').get(async (req, res) => {
    try {
        res.status(200).json(await getUser());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getUserById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/').post(async (req, res) => {
    try {
        let person = await createUser(req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        let person = await  updateUser(req.params.id, req.body);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})

router.route('/:id').delete(async (req, res) => {
    try {
        let person = await deleteUser(req.params.id);

        if (person.hasErrors)
            res.status(400).json(person);
        else
            res.status(200).json(person);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }  
})


router.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({ where: { UserEmail: req.body.UserEmail, UserPassword: req.body.UserPassword } });
    if (user == null) {
      res.status(404).send({ message: "User not found" });
    } else {
       res.status(201).send({ message: "Login successfully", userId: user.UserId });
    }
  } catch (err) {
    res.status(500).send({ message: `${err}` });
  }
});


  router.get("/:id", async (req, res) => {
    try {
      let id = req.params.id;
      if (id) {
        let user = await  Users.findOne({
          where: { id },
          attributes: ["UserEmail", "UserPassword"],
        });
        if (user) {
            console.log(user);
          res.status(200).send(user);
        } else {
          res.status(404).send({ message: "User not found" });
        }
      } else {
        res.status(400).send({ message: "Invalid payload" });
      }
    } catch (err) {
      res.status(500).send({ message: `${err}` });
    }
  });

export default router;