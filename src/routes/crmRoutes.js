import {addNewContact, getContacts, getContactWithID} from '../controllers/crmController';

const routers = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)

        // POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactid')
        // get specific contact
        .get(getContactWithID)
        // put request
        .put((req, res) =>
            res.send('PUT request succesfull!!!'))
        // delete request
        .delete((req, res) =>
            res.send('DELETE request succesfull!!!'));
}

export default routers;