class Bolognese {
  constructor(id='bolognese', opts) {
    this.id = id;
    this.opts = opts

    this.init();
  }

  init() {
    this.generateEditableContent();
  }

  generateEditableContent() {
    let el = document.getElementById(this.id)
    el.setAttribute('contenteditable', true);
  }
}

{
  document.addEventListener('DOMContentLoaded', e => {
    var bolognese = document.getElementById('bolognese');
    if (bolognese) {
      new Bolognese()
    }
  });
}

window.Bolognese = Bolognese
