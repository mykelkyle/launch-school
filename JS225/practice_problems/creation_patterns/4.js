class ItemManager {
  static items = [];

  static create(name, cat, quant) {
    let validNameLength = this.charLength(name) > 4 ? true : false;
    let validCatLength = this.charLength(cat) > 4 ? true : false;
    let catOneWord = cat.split(" ").length < 2 ? true : false;

    if (
      validNameLength &&
      validCatLength &&
      catOneWord &&
      quant !== undefined
    ) {
      let skuCode = (name.slice(0, 3) + cat.slice(0, 2)).toUpperCase();
      this.items.push({
        skuCode,
        itemName: name,
        category: cat,
        quantity: quant,
      });
    } else {
      return false;
    }
  }

  static inStock() {
    return this.items.filter((item) => item.quantity > 0);
  }

  static update(skuCode, obj) {
    this.items.forEach((item) => {
      if (item.skuCode === skuCode) {
        for (let prop in obj) {
          item[prop] = obj[prop];
        }
      }
    });
  }

  static itemsInCategory(cat) {
    return this.items.filter((item) => item.category === cat);
  }

  static delete(skuCode) {
    this.items = this.items.filter((item) => item.skuCode !== skuCode);
  }

  static charLength(string) {
    return string.split("").filter((char) => char !== " ").length;
  }
}

class ReportManager {
  static items;

  static init(itemMngr) {
    this.items = itemMngr;
  }

  static reportInStock() {
    for (let item of this.items.inStock()) {
      console.log(item.itemName);
    }
  }

  static createReporter(skuCode) {
    let obj = this.items.items.filter((item) => item.skuCode === skuCode)[0];

    obj.itemInfo = function () {
      for (let prop in this) {
        if (typeof this[prop] !== "function") {
          console.log(`${prop} :: ${this[prop]}`);
        }
      }
    };
    return obj;
  }
}

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item

// ItemManager.items;
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

// ItemManager.update("SOCSP", { quantity: 0 });
// ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // // logs football,kitchen pot
ItemManager.itemsInCategory("sports");
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete("SOCSP");
ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
