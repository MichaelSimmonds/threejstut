
//Set the Scene (and camera and renderer)
function init(){
	// First build a scene to hold all of the objects
	var scene = new THREE.Scene();


	//Then create a camera for the objects to be viewed through
	var camera = new THREE.PerspectiveCamera(
	    45, //viewing angle
	    window.innerWidth/window.innerHeight, //aspect ratio (same as screen)
	    1, //nearfield render cutoff
	    1000 //far field render cutoff
	  );



	// the camera and object both start at (0,0,0) so the camera can't see the mesh!
	// move the camera and point it at the center.
	camera.position.x = 0;
	camera.position.y = 5;
	camera.position.z = 20;
	camera.lookAt(new THREE.Vector3(0,0,0));

	//To render anything you need a renderer! make one here
	var renderer = new THREE.WebGLRenderer();
	// set the size that the renderer will appear in the page (this is fullscreen)
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Finally append the renderer to the page
	document.getElementById("webgl").appendChild(renderer.domElement);


	//create, position and add to scene
	var plane = getPlane(50,50);
	plane.rotation.x = Math.PI/2;
	scene.add(plane);

	//create, position and add to scene
	var sphere = getSphere(1);
	scene.add(sphere);
	sphere.position.y = sphere.geometry.parameters.radius;

	//Nearly there - now just render it using the scene and camera
	renderer.render(
		scene,
		camera);
	

	//Make an object mesh
	function getSphere(radius){
		//Apply geometry and a material to a mesh to create an object

		/* Geometric objects in THREE.js are made up of two parts. 
			#A geometry that defines the shape of the object and a 
			#A material that defines the surface quality and the appearance, of the object. 
		The combination of these two things makes up a mesh in THREE.js which forms the 3D object. */

		//Make a simple geometry using pre-defined sphere shape
		var geometry = new THREE.SphereGeometry(radius, 24, 24);

		//Make a simple material
		/*The default material that THREE.js objects are created with is the MeshBasicMaterial. 
		MeshBasicMaterial is not affected by the scene lighting at all. 
		This means that your geometry is going to be visible even when there is no lighting in the scene.*/
		var material = new THREE.MeshBasicMaterial({
			color: 0xc030
		});

		//Actually make the mesh
		var sphere = new THREE.Mesh(geometry, material);
		return sphere;
	}

	function getPlane(w, h){
		var geo = new THREE.PlaneGeometry(w,h);
		var material = new THREE.MeshBasicMaterial({
			color: 0x30e0, 
			side: THREE.DoubleSide
		});
		var mesh = new THREE.Mesh(geo, material);
		return mesh;
	}

//Issue with plane not showing


}
init();





