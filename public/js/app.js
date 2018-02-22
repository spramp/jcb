// Blotter.js //

var text = new Blotter.Text("Jan Christian Bernabe", {
  family : "'Source Sans Pro', sans-serif",
  size : 2rem,
  fill : "rgba(215, 96, 177, 1)"
});

var material = new Blotter.Material();

var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("plain-text");
var scope = blotter.forText(text);

scope.appendTo(elem);
