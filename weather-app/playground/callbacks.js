var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Kushal'
    };
    
    console.log(`before : ${Date.now()}`);
    
    callback(user);
    
    setTimeout(() => {
        console.log(`after : ${Date.now()}`);
    }, 2000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});