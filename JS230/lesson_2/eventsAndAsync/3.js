function makeBold(el, cb) {
  el.style.fontWeight = "bold";

  if (cb && typeof cb === "function") {
    cb(el);
  }
}
