//MMM-RunPython.js:

Module.register("MMM-RunPython",{
	// Default module config.
	defaults: {
		text: "RunPythonScript"
	},

    start: function() {
        Log.info('[' + this.name + '] Starting');
        this.sendSocketNotification('init', this.config);
    },
});