// papers
let papers = {
    'a4' : {
        "width" : 210,
        "height" : 297,
        price: .5
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
};

let stickerWidth = 110,
    stickerHeight = 70,
    stickerCount = 97,
    stickerCountHorizontal,
    stickerCountVertical,
    stickerCountOnPage,
    paperCount,
    priceSum;

for (let i in papers) {
    console.log(i); // выведет "3", "5", "7"
    stickerCountHorizontal = Math.floor(papers[i].width / (stickerWidth+4));
    stickerCountVertical = Math.floor(papers[i].height / (stickerHeight+2));
    stickerCountOnPage = stickerCountHorizontal * stickerCountVertical;
    paperCount = Math.round(stickerCount / stickerCountOnPage) === 0 ? 1 : Math.round(stickerCount / stickerCountOnPage);
    console.log(paperCount);
    priceSum = paperCount * papers[i].price;
    console.log(priceSum);
}