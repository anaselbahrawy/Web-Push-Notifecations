var push = require('web-push')

// VAPID keys should only be generated only once.
// let vapidkeys = push.generateVAPIDKeys();

let vapidkeys = {
    publicKey: 'BALCwqrjR2x6rvBkPgjrkc6LGGmOCwQlv8bZmpLSf5GcnMb4xBZ0Jbwdr3ufPU8tfY4XU7i0vG_Eru9NN_H8J-8',
    privateKey: '58vVisl36l70amOMnR-09kF4faia7889OHQqF_mvGJI'
};

push.setVapidDetails('mailto:anaselbhrawy@hotmail.com',vapidkeys.publicKey,vapidkeys.privateKey)

let  sub = {};
push.sendNotification(sub,'test message')