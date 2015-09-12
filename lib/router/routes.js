FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: "home" });
  }
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render('layout', { main: "contact" });
  }
});
