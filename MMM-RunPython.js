//MMM-RunPython.js:

Module.register("MMM-RunPython",{
	// Default module config.
	defaults: {
		text: "RunPythonScript"
	},

	loaded: function(callback) {
        this.finishLoading();
        Log.log(this.name + ' is loaded!');
        callback();
    }
});