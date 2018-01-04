"use strict";

const photo = require('../models').photo;

exports.list = function (req, res) {
  photo.findAll().then(photo => {
    res.jsonp(photo);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(photo.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  photo.findById(id).then(photo => {
    if (!photo) {
      return res.status(400).send({
        message: 'photo Not Found',
      });
    }
    res.jsonp(photo);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  photo.findById(req.params.id)
    .then(photo => {
      if (!photo) {
        return res.status(400).send({
          message: 'photo Not Found',
        });
      }
      return photo
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};