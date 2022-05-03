SetProgress(260.25, 10)

function SetProgress(now, ndonations)
{
    var end = 1000;
    var percentage = now/end * 100.0;
    var distance = end - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '0';
        return;
    }
    document.getElementById('now').innerHTML = '$' + now.toFixed(2);
    document.getElementById('percentage').innerHTML = percentage.toFixed(0) + '%';
    document.getElementById('ndonations').innerHTML = ndonations;
}
