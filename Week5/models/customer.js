const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({   //instancelar or variable camelcaselere dikkkattt
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    address: String
})

customerSchema.methods.findPeersOver18 = function (cb) {
    return CustomerModel.find({
        age: {
            $gte: 18
        }
    });
};

customerSchema.plugin(require('mongoose-autopopulate'))

const CustomerModel = mongoose.model('Customer', customerSchema)

module.exports = CustomerModel   //model class böyle olabilir :)