import * as _ from 'lodash'

export const add = (req, res) => {
    if (!req.session.measurements) {
        req.session.measurements = []
    }
    req.session.measurements.push(req.body);

    console.log('POST measurements');
    res.json(req.session.measurements);
};


export const get = (req, res) => {
    let timestamp = req.params.timestamp;
    let measurements = req.session.measurements;

    let response = _.find(measurements, ['timestamp', timestamp]);
    if (_.isUndefined(response)) {
        response = _.filter(measurements, function (value) {
            let objectDate = new Date(value.timestamp).toLocaleDateString();
            let givingDate = new Date(timestamp);
            givingDate.setDate(givingDate.getDate() + 1);
            givingDate = givingDate.toLocaleDateString();
            if (objectDate === givingDate) {
                return value;
            }
        });
    }

    res.json(response);
    console.log('GET measurements by timestamp');
};


export const update = (req, res) => {
    let timestamp = req.params.timestamp;
    let measurements = req.session.measurements;

    let index = _.findIndex(measurements, ['timestamp', timestamp]);
    console.log(index);
    console.log(req.body);
    req.session.measurements[index] = req.body;
    res.json(req.session.measurements[index]);
    console.log('PUT measurements by timestamp')
};

export const patch = (req, res) => {
    console.log(req.body);
    res.json('hi');
    // let response = _.set(req.session.measurements, req.body, 4);
    console.log('PATCH measurements by timestamp')
};

export const remove = (req, res) => {
    let timestamp = req.params.timestamp;
    let measurements = req.session.measurements;

    let index = _.findIndex(measurements, ['timestamp', timestamp]);

    let response = _.slice(req.session.measurements, index, 1);
    req.session.measurements = response;
    res.json(req.session.measurements);
    console.log('DELETE measurements by timestamp')
};

