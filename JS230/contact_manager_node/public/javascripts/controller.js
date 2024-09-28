export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init() {
    await this.updateContacts();
    this.view.renderContacts();
    this.view.bindClick(this.handleClick.bind(this));
    this.view.bindSubmit(this.handleSubmit.bind(this));
    this.view.bindKeyDown(this.handleKeyDown.bind(this));
  }

  async updateContacts(contacts = null) {
    if (contacts) {
      this.view.contacts = contacts;
    } else {
      this.view.contacts = await this.model.getAllContacts();
    }
  }

  async handleClick(e) {
    let dataType = e.target.getAttribute("data-action");

    switch (dataType) {
      case "add":
        this.view.renderNewContactForm();
        break;
      case "edit":
        e.preventDefault();
        let contact = await this.model.getContact(
          e.target.getAttribute("href")
        );

        this.view.renderEditContactForm(contact);
        break;
      case "delete":
        e.preventDefault();
        this.deleteContact(e);
        break;
      case "cancel":
        this.view.showToolbar();
        this.view.renderContacts();
        break;
    }
  }

  async handleKeyDown(e) {
    let input = e.target;
    let contacts = await this.model.getAllContacts();

    let searchInput = input.value;
    let matches = contacts.filter((contact) => {
      if (contact.full_name.toLowerCase().match(searchInput.toLowerCase()))
        return contact;
    });

    if (matches.length > 0) {
      this.updateContacts(matches);
      this.view.renderContacts();
    } else {
      this.view.renderNoMatches();
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let fd = new FormData(form);
    let json = this.formToJson(fd);
    let method = form.getAttribute("method");

    window.form = form;
    try {
      await this.model.sendData(method, form.action, json);
      await this.updateContacts();
      this.view.showToolbar();
      this.view.renderContacts();
    } catch (error) {
      console.error(error);
    }
  }

  async deleteContact(event) {
    let confirmDelete = confirm(
      "Are you sure you want to delete this contact?"
    );

    if (confirmDelete) {
      this.model.deleteContact(event.target.getAttribute("href"));
      await this.updateContacts();
      this.view.renderContacts();
    }
  }

  formToJson(formData) {
    let json = {};

    for (let pair of formData.entries()) {
      json[pair[0]] = pair[1];
    }

    return json;
  }
}
