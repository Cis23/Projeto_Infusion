export class Menu{
  constructor(idContainer){
    this.nav = document.querySelector(`#${idContainer}`);
    this.init();
  }
  toggleActive(){
    this.nav.addEventListener('click', (e) => this.nav.classList.toggle('active'));
  }
  removeActive(){
    window.addEventListener('resize',(e) => {
      var navActived = document.querySelector('#header__nav.active');
      if(navActived){
        this.nav.classList.remove('active');
      }
    });
  }
  init(){
    this.toggleActive();
    this.removeActive();
  }
}