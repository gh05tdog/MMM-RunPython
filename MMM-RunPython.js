//MMM-RunPython.js:

Module.register("MMM-RunPython",{
	// Default module config.
	defaults: {
		text: "RunPythonScript"
	},

	loaded: function(callback) {
        this.finishLoading();
        console.info(this.name + ' is loaded!');
        callback();
    }
});