document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi AOS untuk animasi saat scroll
  AOS.init({
    duration: 1000,
    once: true
  });

  // Inisialisasi Three.js untuk efek 3D di bagian hero
  let scene, camera, renderer, cube;
  const init3D = () => {
    const canvasContainer = document.getElementById('hero3d');
    const width = canvasContainer.offsetWidth;
    const height = canvasContainer.offsetHeight;

    // Buat scene
    scene = new THREE.Scene();

    // Buat camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Buat renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    canvasContainer.appendChild(renderer.domElement);

    // Buat sebuah kubus 3D
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Update ukuran canvas saat window diresize
    window.addEventListener('resize', onWindowResize, false);
  };

  const onWindowResize = () => {
    const canvasContainer = document.getElementById('hero3d');
    const width = canvasContainer.offsetWidth;
    const height = canvasContainer.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  // Animasi 3D (rotasi kubus)
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  init3D();
  animate();

  // Penanganan form kontak
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Di sini bisa ditambahkan AJAX untuk mengirim data ke server
    alert('Pesan berhasil dikirim!');
    contactForm.reset();
  });
});
