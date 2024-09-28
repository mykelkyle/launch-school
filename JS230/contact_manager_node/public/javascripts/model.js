export class Model {
  constructor() {}

  getData(url) {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.responseType = "json";
      request.addEventListener("load", () => {
        if (request.status === 200) {
          res(request.response);
        } else {
          rej(request.response);
        }
      });
      request.send();
    });
  }

  sendData(method, url, data) {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open(method, url);

      if (method === "POST" || method === "PUT") {
        request.responseType = "json";
        request.setRequestHeader(
          "Content-Type",
          "application/json; charset=utf-8"
        );

        request.send(JSON.stringify(data));
      } else {
        request.send();
      }

      request.addEventListener("load", () => {
        if (request.status === 201 || request.status === 204) {
          res(request.response);
        } else {
          rej(request.response);
        }
      });
    });
  }

  async getAllContacts() {
    return await this.getData("/api/contacts");
  }

  deleteContact(path) {
    this.sendData("DELETE", path).then((response) => {
      console.log(response);
    });
  }

  async getContact(path) {
    return await this.getData(path);
  }
}
