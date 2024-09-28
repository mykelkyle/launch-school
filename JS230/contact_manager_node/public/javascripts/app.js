import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";

const controller = new Controller(new Model(), new View());
window.controller = controller;
controller.init();
