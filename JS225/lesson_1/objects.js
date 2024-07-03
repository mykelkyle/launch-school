let invoices = {
  unpaid: [],
  paid: [],

  add: function (name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue: function () {
    return this.unpaid.reduce((acc, obj) => (acc += obj.amount), 0);
  },

  payInvoice: function (client) {
    let unpaid = [];

    this.unpaid.forEach((invoice) => {
      if (invoice.name === client) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });

    this.unpaid = unpaid;
  },

  totalPaid: function () {
    return this.paid.reduce((acc, obj) => (acc += obj.amount), 0);
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.5);
invoices.add("Slough Digital", 300);

console.log(invoices.totalDue());
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());
