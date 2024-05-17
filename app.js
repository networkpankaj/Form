
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('./models/User');
// require('dotenv').config();

// const app = express();
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// app.get('/signup', (req, res) => {
//     res.render('signup');
// });

// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         let user = await User.findOne({ username });
//         if (user) {
//             return res.send('User already exists');
//         }
//         user = new User({ username, password });
//         await user.save();
//         res.send('User registered successfully');
//     } catch (err) {
//         console.error(err);
//         res.send('Error registering user');
//     }
// });

// app.get('/signin', (req, res) => {
//     res.render('signin');
// });

// app.post('/signin', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.send('User not found');
//         }
//         const isMatch = await user.comparePassword(password);
//         if (!isMatch) {
//             return res.send('Invalid credentials');
//         }
//         res.send('User signed in successfully');
//     } catch (err) {
//         console.error(err);
//         res.send('Error signing in user');
//     }
// });

// app.get('/update-password', (req, res) => {
//     res.render('update-password');
// });

// app.post('/update-password', async (req, res) => {
//     const { username, newPassword } = req.body;
//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.send('User not found');
//         }
//         user.password = newPassword;
//         await user.save();
//         res.send('Password updated successfully');
//     } catch (err) {
//         console.error(err);
//         res.send('Error updating password');
//     }
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });

        if (user) {
            return res.send('User already exists');
        }
        user = new User({ username, password });
        await user.save();
   
        res.send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.send('Error registering user');
    }
});

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.send('User not found');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.send('Invalid credentials');
        }
        res.send('User signed in successfully');
    } catch (err) {
        console.error(err);
        res.send('Error signing in user');
    }
});

app.get('/update-password', (req, res) => {
    res.render('update-password');
});

app.post('/update-password', async (req, res) => {
    const { username, newPassword } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.send('User not found');
        }
        user.password = newPassword;
        await user.save();
        res.send('Password updated successfully');
    } catch (err) {
        console.error(err);
        res.send('Error updating password');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
