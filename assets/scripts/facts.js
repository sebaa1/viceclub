const datos = [
    {
        texto: "No existe ninguna canción de radio que se repita en la saga GTA",
        imagen: "https://pm1.aminoapps.com/6413/8c1065c95a78471ff4f204c79a387cbc9dc1f7b7_128.jpg"
    },
    {
        texto: "Las pesas de los gimnasios de GTA San Andreas tienen erróneamente una textura dorada que pertenece a una caja. Esto fue arreglado en la Edición Definitiva",
        imagen: "https://assetsio.gnwcdn.com/gta-san-andreas-gym-muscle-stamina-lung-capacity-fat-gain-decrease-8043-1636629943721.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    },
{
    texto: "El universo de GTA tiene su propia parodia de The Walt Disney Company llamada Fred's Pictures",
    imagen: "https://images.ctfassets.net/wn7ipiv9ue5v/2dEW99s4h8PZb5bkH5gAMu/7dbaf671fbb57b9d939ebecc3211e5b2/RSW_0010_GTAV_Tshirt_Freds_Front_01.jpg"
},
{
    texto: "Todos los juegos de la saga numerados (GTA, GTA 2, GTA III, GTA IV, GTA V y GTA VI) transcurren en el año en el que fueron lanzados.",
    imagen: "https://i.ibb.co/Cp247MQC/Untitled-design-1.png"
},
{
    texto: "Grand Theft Auto V es el segundo videojuego más vendido de la historia con más de 200 millones de copias vendidas, solo siendo superado por Minecraft.",
    imagen: "https://alphafm.com.br/wp-content/uploads/i483029.jpg"
}
];

const fecha = new Date();
const diaDelAño = Math.floor((fecha - new Date(fecha.getFullYear(), 0, 0)) / 86400000);
const dato = datos[diaDelAño % datos.length];

document.getElementById('fact-text').textContent = dato.texto;
document.getElementById('fact-image').src = dato.imagen;

