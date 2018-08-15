Array.prototype.delayedForEach = function(callback, timeout, thisArg) {
  var i = 0,
    l = this.length,
    self = this,
    caller = function() {
      callback.call(thisArg || self, self[i], i, self);
      (++i < l) && setTimeout(caller, timeout);
    };
  caller();
};

function delayImage(image) {
  console.log(image);
  var element = document.createElement('img');
  element.setAttribute('src', image);
  document.getElementById('images').appendChild(element);

}

function imageShow() {
  const imageList = ['https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    'https://media.giphy.com/media/l1J3pT7PfLgSRMnFC/giphy.gif',
    'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
    'https://media.giphy.com/media/joV1k1sNOT5xC/giphy.gif',
    'https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif',
    'https://media.giphy.com/media/26BRq84rhISRcFVUQ/giphy.gif',
    'https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif',
    'https://media.giphy.com/media/qXexawbjsqK88/giphy.gif',
    'https://media.giphy.com/media/9GIihh8E25Gfnsd0im/giphy.gif',
    'https://media.giphy.com/media/5xtDarDQqitychRz27K/giphy.gif',
    'https://media.giphy.com/media/1k2YhdutgkQzJWnsyp/giphy.gif',
    'https://media.giphy.com/media/1ykDc5R1XmIzPXaNz2/giphy.gif',
    'https://media.giphy.com/media/kanT1ZarQwtI4/giphy.gif',
    'https://media.giphy.com/media/7E8UUn3jg36aDEWdBO/giphy.gif',
    'https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif',
    'https://im5.ezgif.com/tmp/ezgif-5-820a7c0856.gif',
    'https://media.giphy.com/media/58FDuiRsLPfmpd1U6X/giphy.gif',
    'https://media.giphy.com/media/AmDzMmCJZABsk/giphy.gif',
    'https://media.giphy.com/media/3j0Jexiqs4Xz9dHotq/giphy.gif',
    'https://media.giphy.com/media/hyMFaxhuQkZTq/giphy.gif',
    'https://media.giphy.com/media/xTiTnLWl6ftNuZAe8E/giphy.gif',
    'https://media.giphy.com/media/upg0i1m4DLe5q/giphy.gif'
  ];

  console.log('Putting these images on page: ');
  imageList.delayedForEach(delayImage, 2000);
}
window.onload = imageShow