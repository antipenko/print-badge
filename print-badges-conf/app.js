let div = document.createElement('div'),
    body = document.querySelector('body');
div.classList.add('modal');
body.appendChild(div);

let modal = document.querySelector('.modal');

// papers
let papers = {
    'a4' : {
        "width" : 210,
        "height" : 297,
        "price" : .5
    },
    'a2' : {
        "width" : 420,
        "height" : 594,
        "price" : 2
    },
    'a1' : {
        "width" : 594,
        "height" : 841,
        "price" : 4
    },
},
    price = {
        'a4': {
            "price" : 0,
            "name" : 'a4'
        },
        'a2': {
            "price" : 0,
            "name" : 'a2'
        },
        'a1': {
            "price" : 0,
            "name" : 'a1'
        }
    };

let stickerWidth = 110,
    stickerHeight = 70,
    stickerCount = 84,
    stickerCountHorizontal,
    stickerCountVertical,
    stickerCountOnPage,
    paperCount,
    priceSum;

for (let i in papers) {
    console.log(i);
    stickerCountHorizontal = Math.floor(papers[i].width / (stickerWidth+4));
    stickerCountVertical = Math.floor(papers[i].height / (stickerHeight+2));
    stickerCountOnPage = stickerCountHorizontal * stickerCountVertical;
    paperCount = Math.round(stickerCount / stickerCountOnPage) === 0 ? 1 : Math.round(stickerCount / stickerCountOnPage);
    console.log(paperCount);
    priceSum = paperCount * papers[i].price;
    console.log(priceSum);
    price[i] = priceSum;

    let p = document.createElement('p');
    console.log(i + price[i]);
    p.innerHTML = "<p> На листах " + i + ", общая стоимость выйдет: " + price[i] + "</p>";
    modal.appendChild(p);
}






