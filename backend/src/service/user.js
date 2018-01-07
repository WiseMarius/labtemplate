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

exports.getStatusesByUsername = function (req, res) {
  console.log("cccc");
  let username=req.params.username;
  user.findAll({where:{username:username}, include: [{ model: status}] }).then(user => {
    console.log(user);
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    res.jsonp(user);
  })
};

exports.delete = function (req, res) {
  let id = req.params.id;
  user.findById(req.params.id)
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