"use strict";

const user = require('../models').user;
const status = require('../models').status;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  console.log("aaaa");
  let id = req.params.id;
  console.log(req);
  console.log(id);
  user.findById(id).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.findByUsername = function (req, res) {
  console.log("bbbbb");
  let username = req.params.username;
  user.findOne({ where: { username: username } }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.findByUsernameAndPassword = function (req, res) {
  console.log("dddd");
  let username = req.params.username;
  let password = req.params.password;
  user.findOne({
    attributes: ['id', 'username', 'password', 'email', 'name', 'surname'],
    where: { username: username, password: password }
  }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.getFriends = function (req, res) {
  console.log("eeee");
  let username = req.params.username;
  user.findAll({
    where: { username: username },
    include: [{ model: user, as: 'friends' }]
  }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    res.jsonp(user);
  })
};

exports.getStatusesByUsername = function (req, res) {
  console.log("cccc");
  let username = req.params.username;
  user.findAll({
    attributes: ['name', 'surname'],
    where: { username: username },
    include: [{ model: status }],
    order: [[status, 'createdAt', 'DESC']]
  }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    res.jsonp(user);
  })
};

exports.delete = function (req, res) {
  let id = req.params.id;
  user.findById(id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function (req, res) {
  console.log("update")
  return user.findById(req.params.id).then(user => {
    console.log(user);
    if(!user){
      return res.status(404).send({
        message:'User not found'
      })
    }
      user.update(req.body);
      res.jsonp(user);
  });
};