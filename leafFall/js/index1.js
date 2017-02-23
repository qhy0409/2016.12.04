require(["./leaf1"], function (Leaf) {
    var winWidth = document.documentElement.clientWidth;
    var oContainer = document.getElementById("container");
    setInterval(function () {
        for (var i = 0; i < 4; i++) {
            var iWidth = 50 + parseInt(Math.random() * 51);
            var leaf = new Leaf({
                width: iWidth,
                left: parseInt(Math.random() * (winWidth - iWidth)),
                container: oContainer
            });
            leaf.fall();
        }
    },2000)
});