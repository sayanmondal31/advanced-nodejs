// node myFile.js

const pendingTImers =[];
const pendingOSTasks = [];
const pendingOperations=[];

// New timers, tasks, operations are recorded from myFIle running
myFile.runContents();

function shouldContinue(){
    // check one: Any pending setTimeout, setInterval, setImmediate
    // check tow: Any pending OS tasks? (Like server listening to port)
    // check three: Any pending long running operations? (Like fs module)

    return pendingTImers.length || pendingOSTasks.length || pendingOperations.length

}

// Entire body executes in one 'Tick'
// every time it executes code that means it's one Tick
while (shouldContinue()) {
    // 1> Node looks at pending timers and sees if any functions are ready to be called. setTimeout, setInterval
    // 2> Node looks at Pending OSTasks and PendingOperations and call relevant callbacks
    // 3> Pause execution. Continue when ...
    // - a new pendingOSTask is done
    // - a new pendingOPeration is done
    // - a timer is about to complete

    // 4> Look at pendingTimers. Call any setImmediate

    // 5> Handle any 'close" events
    

}


// exit back to terminal