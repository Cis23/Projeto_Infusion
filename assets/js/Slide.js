export class Slide{
  constructor(id,idPrevBtn,idNextBtn, thumb){
    this.containerSlide = document.querySelector(`[data-slide="${id}"]`);

    this.prevBtn = document.querySelector(`#${idPrevBtn}`);
    this.nextBtn = document.querySelector(`#${idNextBtn}`);
    
    this.thumb = document.querySelector(`#${thumb}`);

    this.active = 0;
    this.init();
  }
  slideActive(index){
    this.active = index;
    this.items.forEach(item => item.classList.remove("active"));
    this.items[index].classList.add("active");

    if(this.thumb){
      this.thumbItems.forEach(item => item.classList.remove("active"));
      this.thumbItems[index].classList.add("active");
      this.nextTime();
    }
  }
  prev(){
    if(this.active > 0){
      this.slideActive(this.active - 1);
    }else{
      this.slideActive(this.items.length - 1);
    }
  }
  next(){
    if(this.active < this.items.length - 1){
      this.slideActive(this.active + 1);
    }else{
      this.slideActive(0);
    }
  }
  addNavegation(){
    this.prevBtn.addEventListener("click",this.prev);
    this.nextBtn.addEventListener("click",this.next);
  }
  addThumbs(){
    this.items.forEach(() => this.thumb.innerHTML += "<span><span/>");
    this.thumbItems = Array.from(this.thumb.children);
  }
  nextTime(){
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(this.next,5000);
  }
  init(){
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);

    this.items = Array.from(this.containerSlide.children);
    if(this.thumb){
      this.addThumbs();
    }

    this.addNavegation();
    this.slideActive(0);
  }
}