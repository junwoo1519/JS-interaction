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
        item.setAttribute('hidden', '');
    });
    tabContent[idx].style.display = 'block';
    tabContent[idx].classList.add('tab-content__on');
    tabContent[idx].removeAttribute('hidden');
}