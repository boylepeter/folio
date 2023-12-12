const contentBox = document.getElementById('contentBox');
const aboutContent = document.querySelectorAll(".about");
const contactContent = document.querySelectorAll(".contact");
const closeContentBtn = document.getElementById("closeContent");
const contactBtn = document.getElementById("contactBtn");
const aboutBtn = document.getElementById("aboutBtn");
const tickerContainer = document.getElementById("ticker-container");
const tickerText = document.getElementById("ticker-text");
const key = `6bf1aec30e85477ca6ffa26db9adf3f6`;
const endpoint = `https://newsapi.org/v2/everything?q=tech&apiKey=${key}`;
let newsString = '';

var width, containerwidth, left;

// const callForNews = async () => {
//     let articleCount = 0;
//     const news = await fetch(endpoint).then((res) => {
//         return res.json()
//     }).catch((e) => {
//         console.log(e)
//     });
//     console.log(news)
//     news.articles.forEach((article) => {
//         newsString += ` ${article.description.replace(/\s+/g,' ').trim()} - ${article.author.replace(/\s+/g,' ').trim()}  ::  `;
//         articleCount++
//         if (articleCount == news.articles.length){
//             populateNews(newsString);
//         }
//     });
// };
// callForNews();

// const populateNews = (news) => {
//     tickerText.innerText = news;
//     function scrollleft() {
//         tickerText.style.left = '100%';
//         setTimeout(scrollleft, 25);
//       }
//        scrollleft();
// };

const populateAbout = () => {
    contentBox.classList.remove('hide');
    aboutContent.forEach((element) => {
        element.classList.remove('hide');
    });
};

const populateContact = () => {
    contentBox.classList.remove('hide');
    contactContent.forEach((element) => {
        element.classList.remove('hide');
    });
};

const closeContentBox = () => {
    contentBox.classList.add('hide');
    aboutContent.forEach((element) => {
        element.classList.add('hide');
    });
    contactContent.forEach((element) => {
        element.classList.add('hide');
    });
};

document.addEventListener("DOMContentLoaded", function() {
    let lazyVideos = [...document.querySelectorAll("video.lazy")];   
    if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            // for (let source in video.target.children) {
            //   let videoSource = video.target.children[source];
            //   if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            //     videoSource.src = videoSource.dataset.src;
            //   }
            // }
            video.target.src = video.target.dataset.src
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
   
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
      contactBtn.classList.remove('hide');
      aboutBtn.classList.remove('hide');
    }
   });