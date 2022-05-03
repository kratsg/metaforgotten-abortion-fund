SetProgress(1481.25, 15)

function SetProgress(now, ndonations)
{
    var end = 1000;
    var percentage = now/end * 100.0;
    var distance = end - now;

    document.getElementById('now').innerHTML = '$' + now.toFixed(2);
    document.getElementById('percentage').innerHTML = percentage.toFixed(0) + '%';
    document.getElementById('ndonations').innerHTML = ndonations;
    document.getElementById('progress').style.width = percentage.toFixed(0) + '%';
}
