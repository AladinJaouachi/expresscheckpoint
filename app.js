
const app = express();
const port = 3000;
import { navs } from './Navbarpage.js';
import { about } from './Navbarpage.js';
import { contact } from './Navbarpage.js';
import  express  from 'express';


const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hourOfDay = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next();
    } else {
        res.send('L\'application est disponible uniquement pendant les heures de travail.');
    }
};

app.use(checkWorkingHours);

 

app.get('/', (req, res) => {
  
    res.send(navs);
});
app.get('/about', (req, res) => {
    res.send(about);
});
app.get('/contact', (req, res) => {
    res.send(contact);
});
app.listen(port, () => {
    console.log("Server running on port http://localhost:"+ port)});

app.use((req, res) => {
    res.status(404).send('Page not found 404 ');
});



