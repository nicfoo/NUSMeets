Courses = new Mongo.Collection("courses");

Courses.helpers({
  'lessons': function () {
    // return all lessons related to course
    return Lessons.find({'courseIDs': this._id});
  },
  'coverImage': function() {
    // Get the cover image from Images collection
    return image = Images.findOne(this.coverImageId);
  },
  'likedUsers' : function() {
    return user = Likes.find({'courseId':this._id});
  }
});

// During the course creation add user id and a date stamp with dateCreated.
Courses.before.insert(function (userId, document) {
  document.createdById = userId;
  document.dateCreated = new Date();
});
