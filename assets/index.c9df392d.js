import * as e from"https://unpkg.com/three/build/three.module.js";

const n=new e.Scene,t=new e.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),o=new e.WebGLRenderer({canvas:document.querySelector("#bg")});

o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth*1.3,window.innerHeight*1.3),t.position.setZ(30),t.position.setX(-3),o.render(n,t);

const i=new e.PointLight(16777215);

i.position.set(5,5,5);

const r=new e.AmbientLight(16777215);

n.add(i,r);

const stars = [];

Array(200).fill().forEach((function(){const t=new e.SphereGeometry(1.3,4,4),o=new e.MeshStandardMaterial({color:16777215,wireframe:!0}),i=new e.Mesh(t,o),[r,s,a]=Array(3).fill().map((()=>e.MathUtils.randFloatSpread(100)));

i.position.set(r,s,a),n.add(i);

stars.push(i)}));

const s=(new e.TextureLoader).load("../assets/images/space_2.jpg");

function a(){const e=document.body.getBoundingClientRect().top;

t.position.z=-.01*e,t.position.x=-2e-4*e,t.rotation.y=-2e-4*e}n.background=s,document.body.onscroll=a,a(),function e(){requestAnimationFrame(e);

for(let i = 0; i < stars.length; i++){

    stars[i].rotation.x += 0.01;
    stars[i].rotation.y += 0.005;
    stars[i].rotation.z += 0.01;

  };

o.render(n,t)}();


