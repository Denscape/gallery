var myContainer = document.getElementById("cardContainer");

classes.forEach(function (c, i) {
    myContainer.innerHTML += "<div class=\"col-12 col-md-6 col-sm-6 col-lg-4 mb-4\">" +
        "<div class=\"card my-3 card-fixed\" id=\"c" + i + "\" onmouseenter=\"addShadow(this)\" onmouseleave=\"removeShadow(this)\">" +
        "<img src=\"" + c.image + "\" class=\"card-img-top\">" +
        "<div class=\"card-body\"><h5 class=\"card-title\">" + c.name + "</h5>" +
        "<h6 class=\"card-subtitle mb-2 text-muted\">" + (c.Squad || '') + "</h6>" +
        "<p class=\"card-text\">" + c.description + "</p></div></div></div>";
});

var colorMode = document.documentElement.getAttribute('data-bs-theme') || 'light';

function applyLogoAndTopbar(mode) {
    var logo = document.getElementById('siteLogo');
    var topBar = document.getElementById('topBar');
    if (logo) {
        logo.src = (mode === 'dark') ? 'assets/blackCloverW.jpg' : 'assets/blackCloverB.jpg';
    }
    if (topBar) {
        if (mode === 'dark') {
            topBar.classList.remove('bg-light');
            topBar.classList.add('bg-dark', 'text-bg-dark');
        } else {
            topBar.classList.remove('bg-dark', 'text-bg-dark');
            topBar.classList.add('bg-light');
        }
    }

    var modeBtn = document.getElementById('modeBtn');
    if (modeBtn) {
        modeBtn.textContent = (mode === 'dark') ? 'Light' : 'Dark';
    }
}

window.changeMode = function () {
    colorMode = (colorMode === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', colorMode);
    applyLogoAndTopbar(colorMode);
};

document.documentElement.setAttribute('data-bs-theme', colorMode);
applyLogoAndTopbar(colorMode);

var navLists = document.querySelectorAll('.nav');
navLists.forEach(function (nav) {
    var links = nav.querySelectorAll('.nav-link');
    links.forEach(function (lnk) {
        lnk.addEventListener('click', function () {
            links.forEach(function (other) {
                other.classList.remove('active');
                other.removeAttribute('aria-current');
            });
            this.classList.add('active');
            this.setAttribute('aria-current', 'page');
        });
    });
});
