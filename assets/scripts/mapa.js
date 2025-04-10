var map = L.map('map', {
    minZoom: 0,
    maxZoom: 2,
    crs: L.CRS.Simple,
    maxBounds: [[0, 0], [1000, 1000]],
    maxBoundsViscosity: 0.5
});

var bounds = [[0, 0], [1000, 1000]];
var imageOverlay;
var currentMarkers = [];

const gameData = {
    gta_3: {
        mapImage: '../assets/images/gta_3_map.webp',
        references: [
            { id: "salto-unico-ref", label: "Salto único", img: "../assets/images/salto_unico.webp", total: 20 },
            { id: "paquetes-ref", label: "Paquetes ocultos", img: "../assets/images/paquete.webp", total: 100 }
        ],
        markers: [
            { position: [150, 800], label: "Salto único", content: "Este es un salto único", refId: "salto-unico-ref" },
            { position: [700, 300], label: "Paquete", content: "Descripción del paquete", refId: "paquetes-ref" }
        ]
    },
    gta_vc: {
        mapImage: '../assets/images/gta_vc_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    },
    gta_sa: {
        mapImage: '../assets/images/gta_sa_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    },
    gta_lcs: {
        mapImage: '../assets/images/gta_lcs_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    },
    gta_vcs: {
        mapImage: '../assets/images/gta_vcs_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    },
    gta_4: {
        mapImage: '../assets/images/gta_4_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    },
    gta_5: {
        mapImage: '../assets/images/gta_5_map.webp',
        references: [
            { id: "piezas-vc", label: "Piezas ocultas", img: "../assets/images/pieza_vc.webp", total: 50 }
        ],
        markers: [
            { position: [500, 600], label: "Pieza oculta", content: "Una pieza secreta", refId: "piezas-vc" }
        ]
    }
    // Puedes seguir agregando juegos aquí
};

function toggleMarker(marker, refId) {
    var currentOpacity = marker.options.opacity;
    var newOpacity = currentOpacity === 1 ? 0.5 : 1;
    marker.setOpacity(newOpacity);

    var popupContent = marker.getPopup().getContent();
    var newButtonText = newOpacity === 1 ? 'OCULTAR' : 'MOSTRAR';
    marker.setPopupContent(popupContent.replace(/(OCULTAR|MOSTRAR)/, newButtonText));

    if (newOpacity === 0.5) {
        var refElement = document.getElementById(refId);
        var currentCount = parseInt(refElement.textContent.match(/\d+/)[0]);
        refElement.textContent = refElement.textContent.replace(/\d+/, currentCount + 1);
    }
}

var referenceBox = L.control({ position: 'topright' });

referenceBox.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'reference-box');
    div.id = 'reference-box-content';
    return div;
};

referenceBox.addTo(map);

function loadCurrentGameMap() {
    const gameKey = document.body.dataset.game;
    const data = gameData[gameKey];

    if (!data) {
        console.error('No se encontraron datos para el juego:', gameKey);
        return;
    }

    imageOverlay = L.imageOverlay(data.mapImage, bounds).addTo(map);
    map.fitBounds(bounds);

    const refBox = document.getElementById('reference-box-content');
    refBox.innerHTML = '<h4>Referencias</h4>';
    data.references.forEach(ref => {
        refBox.innerHTML += `
            <div id="${ref.id}">
                <img src="${ref.img}" alt="${ref.label}" style="width:50px;height:30px;vertical-align:middle;">
                <span style="vertical-align:middle;"> ${ref.label} (0/${ref.total})</span>
            </div>`;
    });

    data.markers.forEach((m, index) => {
        const marker = L.marker(m.position, { opacity: 1 }).addTo(map)
            .bindPopup(`<b>${m.label}</b><br>${m.content}<br><button onclick='toggleMarker(currentMarkers[${index}], "${m.refId}")'>OCULTAR</button>`);
        currentMarkers.push(marker);
    });
}

loadCurrentGameMap();
