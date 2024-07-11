// 1. Can't determine where the object was created from. Important to know if the object is of a certain type.
// 2. Objects made from factory functions copy all methods and properties from the factory. This can be memory-intensive and redundant.

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

function createInvoice(services = {}) {
  return {
    payments: [],
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
    addPayment(paymentObj) {
      this.payments.push(paymentObj);
    },
    addPayments(paymentArr) {
      paymentArr.forEach((obj) => this.payments.push(obj));
    },
    amountDue() {
      return this.total() - this.totalPayments();
    },
    totalPayments() {
      let total = 0;
      this.payments.forEach((payment) => {
        total += payment.total();
      });
      return total;
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,

    total() {
      return this.phone + this.internet + this.amount;
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0
