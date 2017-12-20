import * as measurementsController from '../controllers/measurementsController';
import * as statsController from '../controllers/statsController';

const routers = (app) => {
    // measurements route
    app.route('/measurements')
    // POST endpoint
        .post(measurementsController.add);

    // measurements with timestamp route
    app.route('/measurements/:timestamp')
    // get specific measurements route
        .get(measurementsController.get)
        // update measurements route
        .put(measurementsController.update)
        // patch measurement route
        .patch(measurementsController.patch)
        // delete measurement route
        .delete(measurementsController.remove);

    app.route('/measurements/:date')
        .get(measurementsController.getByDate);
    app.route('/stats')
        .get(statsController.get);
}

export default routers;