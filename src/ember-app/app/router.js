import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pencils-pencil-l');
  this.route('i-i-s-pencils-pencil-e',
  { path: 'i-i-s-pencils-pencil-e/:id' });
  this.route('i-i-s-pencils-pencil-e.new',
  { path: 'i-i-s-pencils-pencil-e/new' });
});

export default Router;
