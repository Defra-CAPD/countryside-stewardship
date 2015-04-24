module.exports = {


  bind : function(app) {


    // home
    app.get('/', function(req, res, next) {

      var data = {doctitle: 'Home'};
      res.render('home', data);

    });
    
    
    // basic eligibility
    app.get('/basic-eligibility/', function(req, res, next) {

      var data = {
        doctitle: 'Basic eligibility',
        eligible: true
      };
      
      res.render('basic-eligibility/home', data);

    });
    
    
    // submission
    app.get('/submission/', function(req, res, next) {

      var data = {
          doctitle: 'Submission',
          terms: true
      };
      
      res.render('submission/home', data);

    });
    
    
    // confirmation
    app.get('/confirmation/', function(req, res, next) {

      var data = {doctitle: 'Confirmation'};
      res.render('confirmation/home', data);

    });
    
    
    // eligible
    app.get('/eligibility/eligible/', function(req, res, next) {

      var data = {doctitle: 'Eligible'};
      res.render('eligibility/eligible/home', data);

    });
    
    
    // not eligible
    app.get('/eligibility/noteligible/', function(req, res, next) {

      var data = {doctitle: 'Not eligible'};
      res.render('eligibility/noteligible/home', data);

    });
    
    
    // additional questions
    app.get('/additional/', function(req, res, next) {

      var data = {doctitle: 'Additional questions'};
      res.render('additional/home', data);

    });
    
    
    // legal
    app.get('/legal/', function(req, res, next) {

      var data = {doctitle: 'Legal'};
      res.render('legal/home', data);

    });
    
    
    // options
    app.get('/options/', function(req, res, next) {

      var data = {doctitle: 'Options'};
      res.render('options/home', data);

    });


  }


};