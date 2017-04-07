var model = {
    currentCat: null,
    showAdmin: false,
    cats: [
        {
            clickCount: 0,
            name: 'Cherry',
            imgSrc: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg'
        },
        {
            clickCount: 0,
            name: 'Anabell',
            imgSrc: 'https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg'
        },
        {
            clickCount: 0,
            name: 'Fox',
            imgSrc: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
        },
        {
            clickCount: 0,
            name: 'Goobs',
            imgSrc: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg'
        },
        {
            clickCount: 0,
            name: 'Wrinkles',
            imgSrc: 'http://www.91x.com/wp-content/uploads/2016/12/Cat.jpg'
        }
    ]
};

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    getAdmin: function() {
        return model.showAdmin;
    },

    openAdmin: function() {
        model.showAdmin = true;
    },

    closeAdmin: function() {
        model.showAdmin = false;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();

        adminFormElem = document.getElementById('btn-content');
        octopus.closeAdmin();
        adminFormElem.style.visibility = 'hidden';

        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var adminView = {

    init: function() {
        this.adminBtnElem = document.getElementById('btn-admin');
        this.adminFormElem = document.getElementById('btn-content');
        this.adminCancelElem = document.getElementById('btn-cancel');
        this.adminSaveElem = document.getElementById('btn-save');

        this.adminFormElem.style.visibility = 'hidden';

        this.render();
    },

    render: function() {
        adminNameElem = document.getElementById('btn-name');
        adminImgElem = document.getElementById('btn-img');
        adminCountElem = document.getElementById('btn-count');

        // When admin button is clicked, decide whether to open or close the form
        this.adminBtnElem.addEventListener('click', function() {
            if (octopus.getAdmin() == false) {
                var currentCat = octopus.getCurrentCat();
                octopus.openAdmin();
                adminFormElem.style.visibility = 'visible';

                // set placeholder values to currentCat
                adminNameElem.placeholder = currentCat.name;
                adminImgElem.placeholder = currentCat.imgSrc;
                adminCountElem.placeholder = currentCat.clickCount;
            } else {
                octopus.closeAdmin();
                adminFormElem.style.visibility = 'hidden';
            }
        });

        // When cancel button is clicked, close form and set value to false.
        this.adminCancelElem.addEventListener('click', function() {
            octopus.closeAdmin();
            adminFormElem.style.visibility = 'hidden';
        });

        // When Save element is clicked, get input values, set them to currentCat, and render new values
        this.adminSaveElem.addEventListener('click', function() {
            // Get current cat to store new values
            var currentCat = octopus.getCurrentCat();

            // Set currentCat values to admin input values.
            currentCat.name = adminNameElem.value;
            currentCat.imgSrc = adminImgElem.value;
            currentCat.clickCount = adminCountElem.value;

            console.log(adminNameElem.value);
            console.log(adminImgElem.value);
            console.log(adminCountElem.value);

            // close form elem, set value to false, and render new values
            octopus.closeAdmin();
            catView.render();
            catListView.render();
            // make form values empty for next Admin click
            adminNameElem.value = '';
            adminImgElem.value = '';
            adminCountElem.value = '';

            adminFormElem.style.visibility = 'hidden';
        });
    }
};

// make it go!
octopus.init();
