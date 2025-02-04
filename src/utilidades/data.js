const productos = [
    {
        nombreid: "Duke-390",
        titulo: "Duke 390",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>249 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>140 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
        imagen: "/img/duke 390.webp",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 9900,
    }, {
        nombreid: "rc-390",
        titulo: "RC 390",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>373 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>170 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/rc-390.jpg",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 10800,
    },
    {
        nombreid: "duke-200",
        titulo: "Duke 200",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>199.5 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>135 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/duke-200.webp",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 7800,
    },
    {
        nombreid: "adventure-390",
        titulo: "Adventure 390",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>373 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/adventure-390.webp",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 11500,
    },
    {
        nombreid: "rc-200",
        titulo: "RC 200",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>199.5 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>140 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/rc-200.jpg",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 9200,
    },
    {
        nombreid: "duke-125",
        titulo: "Duke 125",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>124.7 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>120 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/duke-125.jpg",
        categoria: {
            nombre: "KTM",
            nombreid: "ktm"
        },
        precio: 5400,
    },
    {
        nombreid: "fz-150",
        titulo: "FZ 150",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>149 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>115 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
    </div>`,
        imagen: "/img/fz 150.webp",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 2600,
    },
    {
        nombreid: "yzf-r1",
        titulo: "YZF-R1",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>998 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/yzf-r1.webp",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 18000,
    },
    {
        nombreid: "mt-07",
        titulo: "MT-07",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>689 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>210 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/mt-07.jpg",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 8700,
    },
    {
        nombreid: "yzf-r6",
        titulo: "YZF-R6",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>599 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>262 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/yzf-r6.jpg",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 12500,
    },
    {
        nombreid: "tracer-900",
        titulo: "Tracer 900",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>847 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>215 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/tracer-900.jpg",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 14200,
    },
    {
        nombreid: "xt-660z-tenere",
        titulo: "XT 660Z Ténéré",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>660 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>175 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
      </div>`,
        imagen: "/img/xt-660z-tenere.jpg",
        categoria: {
            nombre: "Yamaha",
            nombreid: "yamaha"
        },
        precio: 12600,
    },
    {
        nombreid: "ninja-400",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>399 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>170 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
        titulo: "Ninja 400",
        imagen: "/img/ninja 400.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 13350
    }, {
        nombreid: "ninja-h2",
        titulo: "Ninja H2",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>998 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>400 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/ninja-h2.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 33000,
    },
    {
        nombreid: "z650",
        titulo: "Z650",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>210 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/z650.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 9200,
    },
    {
        nombreid: "versys-1000",
        titulo: "Versys 1000",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>1043 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>240 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/versys-1000.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 14500,
    },
    {
        nombreid: "zx-6r",
        titulo: "ZX-6R",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>636 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>260 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/zx-6r.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 12500,
    },
    {
        nombreid: "vulcan-s",
        titulo: "Vulcan S",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>180 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/vulcan-s.webp",
        categoria: {
            nombre: "Kawasaki",
            nombreid: "kawasaki"
        },
        precio: 8700,
    },
    {
        nombreid: "gn-125",
        titulo: "GN 125",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>124 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>105 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>carburador</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
    </div>`,
        imagen: "/img/suzuki-gn-125.jpg",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 1900
    },
    {
        nombreid: "gsx-s750",
        titulo: "GSX-S750",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>749 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>220 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/gsx-s750.webp",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 10500,
    },
    {
        nombreid: "sv650",
        titulo: "SV650",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>645 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>200 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/sv650.webp",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 7800,
    },
    {
        nombreid: "hayabusa",
        titulo: "Hayabusa",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>1340 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>312 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/hayabusa.webp",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 18500,
    },
    {
        nombreid: "v-strom-650",
        titulo: "V-Strom 650",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>645 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>200 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/v-strom-650.webp",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 9200,
    },
    {
        nombreid: "gsx-r1000",
        titulo: "GSX-R1000",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>999 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/gsx-r1000.webp",
        categoria: {
            nombre: "Suzuki",
            nombreid: "suzuki"
        },
        precio: 16500,
    },
    {
        nombreid: "NC750X",
        titulo: "NC750X",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>745 cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>180 Km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
    </div>`,
        imagen: "/img/NC750X.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 15500
    },
    {
        nombreid: "cbr1000rr",
        titulo: "CBR1000RR",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>1000 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>299 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/cbr1000rr.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 17200,
    },
    {
        nombreid: "cb500x",
        titulo: "CB500X",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>471 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>190 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/cb500x.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 7200,
    },
    {
        nombreid: "goldwing",
        titulo: "Goldwing",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>1833 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>180 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>7 velocidades</p></div>
      </div>`,
        imagen: "/img/goldwing.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 33000,
    },
    {
        nombreid: "cbr650r",
        titulo: "CBR650R",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>649 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>220 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/cbr650r.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 9900,
    },
    {
        nombreid: "africatwin",
        titulo: "Africa Twin",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>1084 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>212 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>6 velocidades</p></div>
      </div>`,
        imagen: "/img/africatwin.webp",
        categoria: {
            nombre: "Honda",
            nombreid: "honda"
        },
        precio: 16800,
    },
    {
        nombreid: "SMX-200",
        titulo: "SMX 200 Adventure",
        ficha: `<div class="capa">
      <div class="detalles"><h6>Cilindrada:</h6><p>205cc</p></div>
      <div class="detalles"><h6>Velocidad máxima:</h6><p>105 km/h</p></div>
      <div class="detalles"><h6>Alimentación:</h6><p>carburador</p></div>
      <div class="detalles"><h6>Transmisión:</h6><p> velocidades</p></div>
    </div>`,
        imagen: "/img/smx-200-adv.jpeg",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 1680
    },
    {
        nombreid: "smx-125",
        titulo: "SMX 125",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>125 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>100 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>5 velocidades</p></div>
      </div>`,
        imagen: "/img/smx-125.webp",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 2500,
    },
    {
        nombreid: "runner-50",
        titulo: "Runner 50",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>50 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>45 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
      </div>`,
        imagen: "/img/runner-50.webp",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 1200,
    },
    {
        nombreid: "nexus-500",
        titulo: "Nexus 500",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>492 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
      </div>`,
        imagen: "/img/nexus-500.webp",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 4800,
    },
    {
        nombreid: "stalker-50",
        titulo: "Stalker 50",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>49 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>45 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Carburador</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
      </div>`,
        imagen: "/img/stalker-50.webp",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 1100,
    },
    {
        nombreid: "fuoco-500",
        titulo: "Fuoco 500",
        ficha: `<div class="capa">
        <div class="detalles"><h6>Cilindrada:</h6><p>493 cc</p></div>
        <div class="detalles"><h6>Velocidad máxima:</h6><p>160 km/h</p></div>
        <div class="detalles"><h6>Alimentación:</h6><p>Inyección</p></div>
        <div class="detalles"><h6>Transmisión:</h6><p>Automática</p></div>
      </div>`,
        imagen: "/img/fuoco-500.webp",
        categoria: {
            nombre: "Gilera",
            nombreid: "gilera"
        },
        precio: 7800,
    },

];
const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});
;

export default obtenerProductos;