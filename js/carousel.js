// Asynchronous script : add eventlistener
console.log('coucou');
class Carousel {

    // PARAMETER
    // {HTMLelement} element
    // {object} options
    // {object} options.slidesToScroll : number of element to scroll
    // {object} options.slidesVisible : number of visible elements in a slide

    constructor (element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        //Save children in a variable
        //Keep children at the moment of the script execution
        let children = [].slice.call(element.children);
        //Save current slide
        this.currentItem = 0
        // create element DOM for carousel
        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root)
        // children in the container
        this.items = children.map((child) => {
            let item =this.createDivWithClass('carousel__item');
            item.appendChild(child);
            this.container.appendChild(item);
            item.classList.add('d-flex', 'flex-column', 'align-items-center');
            return item
        });
        this.setStyle();
        this.createNavigation();
    }


    //Container item carousel
    setStyle () {
        let ratio = this.items.length / this.options.slidesVisible; // width container ratio calcul
        this.container.style.width = (ratio * 100) + '%'; //width container
        this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + '%'        
        );
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel__next');
        let prevButton = this.createDivWithClass('carousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
    }

    next () {
        this.goToItem(this.currentItem + this.options.slidesToScroll);
    }
    prev () {
        this.goToItem(this.currentItem - this.options.slidesToScroll);
    }

    //Move carousel toward target element
    //{number} index
    goToItem (index) {
        if(index<0) {
            index = this.items.length - this.options.slidesVisible
        }else if(index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined) {
            index=0;
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.currentItem = index;
    }
    // {string} className
    //return : {HTMLelement}
    createDivWithClass (className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div
    }
};

document.addEventListener('DOMContentLoaded', function (){
    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 1,
        slidesVisible: 3
    })
})