setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime/2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    htime < 10 ? hr.innerText = "0" + htime : hr.innerText = htime;
    mtime < 10 ? min.innerText = "0" + mtime : min.innerText = mtime;
    stime < 10 ? sec.innerText = "0" + stime : sec.innerText = stime;
}, 1000);
