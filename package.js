Package.describe({
	summary: "(AngularJS directive to work with Yandex maps) re-packaged for meteorjs",
	version: "2.1.0",
	git: "https://github.com/AdaptiveGroup/meteor-yandex-map.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0');
	api.add_files("js/ya-map-2.1.min.js", "client");
});
