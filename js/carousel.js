// Asynchronous script : add eventlistener

console.log('coucou');


class Carousel {

    // PARAMETER
    // {HTMLelement} element
    // {object} options
    // {object} options.slidesToScroll : number of element to scroll
    // {object} options.slidesVisible : number of visible elements in a slide
    //{boolean} options.loop : (default : false) come back at the carousel end

    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options);

        //define variables
        let children = [].slice.call(element.children);//save children in a variable, keep children at the moment of the script execution
        this.isMobile = true; //responsive
        this.currentItem = 0; //save current slide
        this.moveCallbacks = []; //save callback for onMove

        //modification DOM 
        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.setAttribute('tabindex', '0'); //accessibility : focus on the elements
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {  // children in the container
            let item = this.createDivWithClass('carousel__item');
            item.appendChild(child);
            this.container.appendChild(item);
            item.classList.add('d-flex', 'flex-column', 'align-items-center');
            return item
        });
        this.setStyle();
        this.createNavigation();

        //Events
        this.moveCallbacks.forEach(cb => cb(0)); //hide arrow
        this.onWindowResize(); //responsive
        window.addEventListener('resize', this.onWindowResize.bind(this)); //responsive
        this.root.addEventListener('keyup', e => {    //accessibility
            if (e.key === 'ArrowRight' || e.key === 'Right') {
                this.next();
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev();
            }
        })
    }


    //Container item carousel
    setStyle() {
        let ratio = this.items.length / this.slidesVisible; // width container ratio calcul
        this.container.style.width = (ratio * 100) + '%'; //width container
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + '%'
        );
    }

    createNavigation() {
        let nextButton = this.createDivWithClass('carousel__next');
        let prevButton = this.createDivWithClass('carousel__prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
        if (this.options.loop === true) {
            return
        }
        this.onMove(index => { //Hide the button at the end of the carousel
            if (index === 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel__next--hidden');
            } else {
                nextButton.classList.remove('carousel__next--hidden');
            }
        })
    }

    next() {
        this.goToItem(this.currentItem + this.slidesToScroll);
    }
    prev() {
        this.goToItem(this.currentItem - this.slidesToScroll);
    }

    //Move carousel toward target element
    //{number} index
    goToItem(index) {
        if (index < 0) {
            if (this.options.loop) {
                index = this.items.length - this.slidesVisible
            } else {
                return
            }
        } else if (index >= this.items.length || this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem) {
            if (this.options.loop) {
                index = 0;
            } else {
                return
            }
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.currentItem = index;
        this.moveCallbacks.forEach(cb => cb(index));
    }

    // moveCallback
    onMove(cb) {
        this.moveCallbacks.push(cb);
    }

    onWindowResize() {
        let mobile = window.innerWidth < 800;
        if (mobile !== this.isMobile) {
            this.isMobile = mobile;
            this.setStyle();
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    // {string} className
    //return : {HTMLelement}
    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div
    }



    /**
     * @returns {number}
     */
    get slidesToScroll() {
        return this.isMobile ? 1 : this.options.slidesToScroll;
    }

    /**
    * @returns {number}
    */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 1,
        slidesVisible: 2,
        loop: false
    })
})