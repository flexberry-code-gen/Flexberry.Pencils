import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pencils.caption'),
          title: i18n.t('forms.application.sitemap.pencils.title'),
          children: [{
            link: 'i-i-s-pencils-pencil-l',
            caption: i18n.t('forms.application.sitemap.pencils.i-i-s-pencils-pencil-l.caption'),
            title: i18n.t('forms.application.sitemap.pencils.i-i-s-pencils-pencil-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})