window.onload = function() {
    var old = document.getElementById("quote");
    var by = document.getElementById("byline");
    var lock = true;
    var index = Math.floor(Math.random()*qt.length);
    old.innerHTML = qt[index] + "<br>-" + auth[index];
    change = function() {
        index = Math.floor(Math.random()*qt.length);
        if(lock) {
            var newDiv = document.createElement("div");
            newDiv.className = "quote";
            newDiv.innerHTML = qt[index] + "<br>-" + auth[index];
            lock = false;

            var info = old.getBoundingClientRect();
            var height = info.height;
            var width = info.width;

            var xcod = Math.floor(Math.random()*(0.5*width));
            if(xcod%2) 
                xcod *= -1.2;
            var ycod = Math.floor(Math.random()*(window.innerHeight-2*height));
            if(ycod%2===0)
                ycod *= -0.5;
            old.style.transform = "translate("+xcod+"px,"+ycod+"px)";
            old.style.animation = "move 4s";
            old.style.opacity = 0.1;

            setTimeout(function() {
                document.body.insertBefore(newDiv,old);
                old = newDiv;
                lock = true;
            },1500);
        }
  };
  
  tweet = function() {     
    var textToTweet = qt[index]+" -"+auth[index];
    var twtLink = 'https://twitter.com/intent/tweet?text=' + textToTweet;
    window.open(twtLink);
  };
};