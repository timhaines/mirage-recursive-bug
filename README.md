# mirage-recursive-bug

Very simple app to reproduce a suspected bug in mirage.

App has a home page, and an acceptance test that tries to load it.  It dies with an error: `Mirage: Your handler for the url /organizations threw an error: Maximum call stack size exceeded.`

There are two models - organization and subscription, that have a 1-1 belongsTo relationship.  When Mirage tries to load the organization model as a result of the `schema.organizations.all()` call, the error occurs.

## Installation

* `git clone <repository-url>` this repository
* `cd mirage-recursive-bug`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`
