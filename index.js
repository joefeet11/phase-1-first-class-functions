function receivesAFunction(callback){
    callback();
}
receivesAFunction(callback);

function returnsANamedFunction(){
    return receivesAFunction;
}
returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function () {
        console.log('Yes Indeed');
    }
}
returnsAnAnonymousFunction()