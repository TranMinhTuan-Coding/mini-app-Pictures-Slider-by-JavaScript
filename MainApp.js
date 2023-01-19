const nextButton=document.querySelector('.next-button');
const previousButton=document.querySelector('.previous-button');
const appContainer=document.querySelector('.main-app-container');
const pictureNumber=document.querySelector('.picture-count');

var count=0;
pictureNumber.textContent=count + 1;

const picturesNameArray=['picture-1','picture-2','picture-3','picture-4','picture-5','picture-6','picture-7', 'picture-8', 'picture-9', 'picture-10'];

// Bắt sự kiện cho button bằng DOM:
nextButton.addEventListener('click', nextButtonEventFunction);
function nextButtonEventFunction(){
    //animate: thuộc tính opacity thay đổi trong khoảng 0.1 đến 1 trong khoảng thời gian 1 giây tăng dần:
    appContainer.animate([{opacity: '0.1'}, {opacity: '1'}], {duration: 1000, fill: 'forwards'});
    count++;
    if (count > picturesNameArray.length-1) {
        count=0;
    };
    // console.log(count);
    pictureNumber.textContent=count + 1;
    appContainer.style.backgroundImage=`url(Pictures/${picturesNameArray[count]}.jpg)`;
};

previousButton.addEventListener('click', previousButtonEventFunction);
function previousButtonEventFunction(){
    appContainer.animate([{opacity: '0.1'}, {opacity: '1'}], {duration: 1000, fill: 'forwards'});
    count--;
    if (count < 0) {
        count=picturesNameArray.length-1;
    };
    // console.log(count);
    pictureNumber.textContent=count+1;
    appContainer.style.backgroundImage=`url(Pictures/${picturesNameArray[count]}.jpg)`;
};
