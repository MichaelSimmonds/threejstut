// First build a scene to hold all of the objects
var scene = new Three.Scene();


//Then create a camera for the objects to be viewed through

var camera = new Three.PerspectiveCamera(
		45, 				//Field of View
		window.innerWidth / window.innerHeight, //set aspect ratio
		1, 					//near clipping plane
		1000 				//far clipping plane (beyond thee nothing is visible)
);


var renderer = new Three.WebGLRenderer();
