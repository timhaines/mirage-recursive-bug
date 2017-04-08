import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `My Organization ${i}`;
  },
  slug() {
    return this.name.underscore();
  },


  afterCreate(organization, server) {
    if (!organization.subscription) {
      let subscription = server.create('subscription', {organization: organization});
      organization.update({subscription});
    }
  }
});
