const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    //instancelar or variable camelcaselere dikkkattt
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    address: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

customerSchema.virtual("myOrders", {
  ref: "Order", // The model to use
  localField: "_id", // Find people where `localField`
  foreignField: "customer", // is equal to `foreignField`
});

customerSchema.pre(/^find/, function () {
  // `this` is an instance of mongoose.Query
  this.populate("myOrders")
});

customerSchema.plugin(require("mongoose-autopopulate"));

const CustomerModel = mongoose.model("Customer", customerSchema);

module.exports = CustomerModel; //model class böyle olabilir :)
