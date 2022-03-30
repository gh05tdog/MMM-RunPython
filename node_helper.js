const NodeHelper = require("node_helper");
module.exports = NodeHelper.create({});

module.exports = NodeHelper.create({
    
    start: function () {
        console.log('[RUN_Python] Starting node_helper');
        console.log('[Run_Python] RUNNING SCRIPT')
            exec("sudo ./run.sc ", (error, stdout) => {
            if (error) {
                 console.error(`exec error: ${error}`);
                 return;
               }
            })
    },

    socketNotificationReceived: function(notification, payload) {
        const self = this;
        if (notification === 'REQUEST') {
            const self = this
            this.config = payload
            

            
        }
    }



})