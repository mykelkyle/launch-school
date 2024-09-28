export class View {
  constructor() {
    this.templates = this.registerTemplates();
    this.root = document.getElementById("root");
    this.toolbar = document.getElementById("toolbar");
  }

  hideToolbar() {
    this.toolbar.classList.add("hidden");
  }

  showToolbar() {
    this.toolbar.classList.remove("hidden");
  }

  resetRoot() {
    this.root.innerHTML = "";
  }

  renderContacts() {
    this.resetRoot();
    let contacts = this.contacts;
    this.root.innerHTML = this.templates["contacts-template"]({ contacts });
  }

  renderNewContactForm() {
    this.resetRoot();
    this.hideToolbar();
    this.root.innerHTML = this.templates["add-contact-template"]();
  }

  renderEditContactForm(contact) {
    this.resetRoot();
    this.hideToolbar();
    this.root.innerHTML = this.templates["edit-contact-template"](contact);
  }

  renderNoMatches() {
    this.resetRoot();
    this.root.innerHTML = this.templates["no-matches-template"]();
  }

  registerTemplates() {
    let templates = {};
    document
      .querySelectorAll("script[type='text/x-handlebars']")
      .forEach((script) => {
        if (script.id.startsWith("partial")) {
          Handlebars.registerPartial(script.id, script.innerHTML);
        } else {
          templates[script.id] = Handlebars.compile(script.innerHTML);
        }
      });
    return templates;
  }

  bindClick(handler) {
    document.addEventListener("click", (e) => {
      handler(e);
    });
  }

  bindKeyDown(handler) {
    this.toolbar.addEventListener("keydown", (e) => {
      handler(e);
    });
  }

  bindSubmit(handler) {
    this.root.addEventListener("submit", (e) => {
      handler(e);
    });
  }
}
