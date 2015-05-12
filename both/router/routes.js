/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
   layoutTemplate: 'MasterLayout',
   loadingTemplate: 'Loading',
   notFoundTemplate: 'NotFound'
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('salespitch');
  } else {
    this.next();
  }
});

Router.route('/', {name: 'home'});
