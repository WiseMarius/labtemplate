"use strict";

const photo = require('../models').photo;
const user=require('../models').user;

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

exports.getPhotosAndUsers = function (req, res) {
  console.log("haha");
  photo.findAll({
    attributes: ['photo', 'rating'],
    include: [{ model: user, attributes:['name', 'surname']}],
    order: [['createdAt', 'DESC']]
  }).then(photo=>{
    res.jsonp(photo);
  })
};

exports.findRatingByPhoto=function(req,res){
  let photo=req.params.id;
  photo.findOne({attributes:['rating'], where:{photo:photo}}).then(photo=>{
    console.log(photo);
    if(!photo){
      return res.status(400).send({message:'Photo Not Found'});
    }
    res.jsonp(photo);
  })
}

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

exports.update= function(req, res){
  console.log("lllll");
  let id=req.params.id;
  console.log(id);
}