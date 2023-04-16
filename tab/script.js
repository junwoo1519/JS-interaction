// 객체지향 ES6
class Tab {
    constructor(el) {
        this.el = document.querySelector(el);
        this.btns = this.el.querySelectorAll('.tab__item');
        this.contents = this.el.querySelectorAll('.tab__body div');
        this.highlight = this.el.querySelector('.tab__highlight');
        this.bindingEvent();
    }

    bindingEvent() {
        this.btns.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                [this.btns, this.contents].forEach((el) => {
                    this.activation(el, idx);
                });
                let left = btn.offsetLeft;
                let width = btn.offsetWidth;
                this.highlight.style.left = left + 'px';
                this.highlight.style.width = width + 'px';
            });
        })
    }

    activation = (arr, idx) => {
        arr.forEach(function (el) {
            el.classList.remove('on');
        });
        arr[idx].classList.add('on');
    };
}

new Tab('.tab');

/*function Tab(selector) {
    this.tab = document.querySelector(selector);
    this.btns = this.tab.querySelectorAll('.tab__item');
    this.contents = this.tab.querySelectorAll('.tab__body div');
    this.highlight = this.tab.querySelector('.tab__highlight');
    this.bindingEvent();
}

Tab.prototype.bindingEvent = function () {
    this.btns.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            [this.btns, this.contents].forEach(function (el) {
                this.activation(el, idx);
            }.bind(this));
            let left = btn.offsetLeft;
            let width = btn.offsetWidth;
            this.highlight.style.left = left + 'px';
            this.highlight.style.width = width + 'px';
        }.bind(this));
    }.bind(this));
};

Tab.prototype.activation = function (arr, idx) {
    arr.forEach(function (el) {
        el.classList.remove('on');
    });
    arr[idx].classList.add('on');
};

new Tab('.tab');*/

// 객체지향 ES5
/*function Tab(selector) {
    this.tab = document.querySelector(selector);
    this.btns = this.tab.querySelectorAll('.tab__item');
    this.contents = this.tab.querySelectorAll('.tab__body div');
    this.highlight = this.tab.querySelector('.tab__highlight');
    this.bindingEvent();
}

Tab.prototype.bindingEvent = function () {
    this.btns.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            [this.btns, this.contents].forEach(function (el) {
                this.activation(el, idx);
            }.bind(this));
            var left = btn.offsetLeft;
            var width = btn.offsetWidth;
            this.highlight.style.left = left + 'px';
            this.highlight.style.width = width + 'px';
        }.bind(this));
    }.bind(this));
};

Tab.prototype.activation = function (arr, idx) {
    arr.forEach(function (el) {
        el.classList.remove('on');
    });
    arr[idx].classList.add('on');
};

new Tab('.tab');*/

// 그냥 만듦
/*
const tab = document.querySelector('.tab__list');
const tabItems = tab.querySelectorAll('.tab__item');
const highlight = document.querySelector('.tab__highlight');
const tabContent = document.querySelectorAll('.tab-content > div');

tabItems.forEach((tabItem, idx) => {
    tabItem.addEventListener('click', (e) => {
        // 기본기능 막기
        e.preventDefault();

        //tab__item--on 클래스 추가, 제거
        tabItems.forEach((item) => {
            item.classList.remove('tab__item--on');
        });
        tabItem.classList.add('tab__item--on');
        showTabContent(idx);
        moveHighlight(idx);
    });
});

// 하이라이트 효과
function moveHighlight(idx) {
    const left = tabItems[idx].offsetLeft;
    const width = tabItems[idx].offsetWidth;
    highlight.style.left = left + 'px';
    highlight.style.width = width + 'px';
}

function showTabContent(idx) {
    tabContent.forEach((item) => {
        item.style.display = 'none';
        item.classList.remove('tab-content__on');
    });
    tabContent[idx].style.display = 'block';
    tabContent[idx].classList.add('tab-content__on');
}*/
