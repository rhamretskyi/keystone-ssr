var keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => (keystoneApp) => {
	const handle = nextApp.getRequestHandler();

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
