

class Fourier {
    constructor(svgFile) {
        this.svgFile = svgFile
        this.path = svgFile.querSelector("path")
        this.pathLength = path.getTotalLength()
    }
}

function getSvg(svgLink) {
    let svg = fetch(svgLink)
        .then(response => response.text())
        .then(text => (new DOMParser).parseFromString(text, "image/svg+xml"))
        .then(svg => svg.documentElement);

    return svg
}

fileLink = "https://gist.githubusercontent.com/eheperson/5a2dc7ea9776bbb19ff8dcba178dc258/raw/bd97977a5f86be1b7e60cf3e6c25dd0594f4e22e/render.svg"
svgFile = getSvg(fileLink)
console.log(svgFile)

f = new Fourier(svgFile)