
export const add = (req, res) => {
    if (req.session.measurements){
        req.session.measurements[req.body.timestamp] = req.body;
        res.json(req.body);
    }else {
        req.session.measurements = [];
        res.json(req.session.measurements);
    }

    console.log('POST measurements');
    console.log(req.session.measurements);
};


export const get = (req, res) => {
    console.log('GET measurements by timestamp')
};

export const getByDate = (req, res) => {
    console.log('GET measurements by date')
};

export const update = (req, res) => {
    console.log('PUT measurements by timestamp')
};

export const patch = (req, res) => {
    console.log('PATCH measurements by timestamp')
};

export const remove = (req, res) => {
    console.log('DELETE measurements by timestamp')
};
