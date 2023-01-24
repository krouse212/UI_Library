import $ from '../core';

$.prototype.show = function(displayStyle ='') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = displayStyle;
    }

    return this;
}

$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
}

$.prototype.toggleDisplay = function(displayStyle ='') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = displayStyle;
        } else {
            this[i].style.display = 'none';
        }     
    }

    return this;
}