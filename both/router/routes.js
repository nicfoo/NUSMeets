Router.route('/', {
    name: 'home'
});

Router.route('/dashboard');

Router.route('/teach');

Router.route('/learn');

Router.route('/learn/:tag', function() {
    this.render('taggedCourses')
});

Router.route('/profile')

Router.route('/profileSettings');

Router.route('/settings');

Router.route('/course/:_id', {
    name: 'course'
});

Router.route('/course/:_id/info', {
    name: 'courseInfo'
});

Router.route('/singleresourcepage', {
    name: 'testsingleResourcePage'
});

Router.route('/singleresourcepage/info', {
    name: 'testcourseInfo'
});

Router.route('license', {
  name: 'licenseQuestions'
});

Router.route('course/:_id/', function() {
    this.render('likes')
});
