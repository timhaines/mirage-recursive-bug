export default function() {

  this.get('/organizations', function (schema) {
    return schema.organizations.all();
  });

}
