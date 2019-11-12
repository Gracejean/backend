var mongoose = require('mongoose')
// const atlas = "mongodb+srv://jean:jeanpassword@cluster0-chvj2.azure.mongodb.net/abang?retryWrites=true&w=majority";
const atlas = "mongodb+srv://Pearl:pearlpass@cluster0-uzdt0.mongodb.net/abang?retryWrites=true&w=majority";
// var mongoDB = 'mongodb://127.0.0.1/abang';
// mongoose.Promise = global.Promise;
// console.log("connecting");


// mongoose.connect(atlas, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true

// }, (err, data) => {
//     if (err) {
//         console.log("error : " + err);
//     } else {
//         console.log("database is connected!");
//     }
// });

mongoose.connect(atlas, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to DB');
    // app.listen({ port: PORT }, () => {
    //     console.log(`Server running at http://localhost:${PORT}`);
    // });
}).catch(err => console.log(err));