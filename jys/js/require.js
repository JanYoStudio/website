function getLastPath() {
    const url = window.location.href;
    return url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?'))
}