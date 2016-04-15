var form = document.getElementsByClassName("search-form")[0];
var input = document.getElementsByClassName("search-form__text")[0];
var activeWindows = [];

document.getElementsByClassName("search-form")[0].addEventListener("submit", function (e) {
  e.preventDefault();
  var q = input.value;
  closeActiveWindows();
  if (q.length > 0) {
    console.log('test', q);
    activeWindows.push(window.open("https://www.google.nl/search?tbm=isch&q=" + q));
    activeWindows.push(window.open("http://forvo.com/word/" + q + "/#nl"));
    activeWindows.push(window.open("https://en.wiktionary.org/wiki/" + q + "#Dutch"));

    if (q.length > 2 && q.substr(-2) === "en") {
      activeWindows.push(window.open("http://www.verbix.com/webverbix/go.php?T1=" + q + "&Submit=Go&D1=24&H1=124"));
    }

    activeWindows.push(window.open("http://www.vandale.nl/opzoeken?pattern=" + q + "&lang=nn"));
    activeWindows.push(window.open("http://www.vandale.nl/opzoeken?pattern=" + q + "&lang=ne"));
    // activeWindows.push(window.open("http://www.interglot.com/dictionary/nl/en/search?q=" + q));
    // activeWindows.push(window.open("http://en.bab.la/dictionary/dutch-english/" + q));
  }
});

function closeActiveWindows() {
  activeWindows.forEach(function (w) {
    if (w && w.close) {
      w.close();
    }
  });
  activeWindows = [];
}
