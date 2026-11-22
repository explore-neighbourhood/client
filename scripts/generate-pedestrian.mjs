// Original application-owned pedestrian geometry. Metres, Y up, facing north (-Z).
// Regenerate with node scripts/generate-pedestrian.mjs from apps/client.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const positions = [];
const normals = [];
const colors = [];
const indices = [];
const skin = [.62, .36, .22, 1];
const shirt = [.03, .48, .44, 1];
const trousers = [.06, .10, .18, 1];
const shoes = [.025, .035, .055, 1];

function ellipsoid(center, radius, color, rows = 10, columns = 14) {
  const start = positions.length / 3;
  for (let row = 0; row <= rows; row++) {
    const theta = Math.PI * row / rows;
    for (let column = 0; column <= columns; column++) {
      const phi = 2 * Math.PI * column / columns;
      const unit = [Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi)];
      const normal = unit.map((value, axis) => value / radius[axis]);
      const magnitude = Math.hypot(...normal);
      positions.push(...unit.map((value, axis) => center[axis] + value * radius[axis]));
      normals.push(...normal.map(value => value / magnitude));
      colors.push(...color);
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const a = start + row * (columns + 1) + column;
      const b = a + columns + 1;
      indices.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
}

ellipsoid([0, 1.17, 0], [.24, .34, .14], shirt);
ellipsoid([0, .88, 0], [.20, .15, .13], trousers);
ellipsoid([-.105, .49, 0], [.087, .41, .09], trousers);
ellipsoid([.105, .49, 0], [.087, .41, .09], trousers);
ellipsoid([-.105, .07, -.035], [.095, .07, .16], shoes);
ellipsoid([.105, .07, -.035], [.095, .07, .16], shoes);
ellipsoid([-.285, 1.17, 0], [.075, .24, .075], shirt);
ellipsoid([.285, 1.17, 0], [.075, .24, .075], shirt);
ellipsoid([-.29, .88, -.015], [.06, .16, .06], skin);
ellipsoid([.29, .88, -.015], [.06, .16, .06], skin);
ellipsoid([0, 1.49, 0], [.067, .10, .067], skin);
ellipsoid([0, 1.66, 0], [.125, .16, .115], skin);
ellipsoid([0, 1.77, .01], [.128, .065, .117], shoes);
ellipsoid([0, 1.65, -.115], [.025, .035, .035], skin);
ellipsoid([-.046, 1.70, -.104], [.016, .012, .008], shoes, 5, 8);
ellipsoid([.046, 1.70, -.104], [.016, .012, .008], shoes, 5, 8);

const arrays = [new Float32Array(positions), new Float32Array(normals), new Float32Array(colors), new Uint16Array(indices)];
let offset = 0;
const views = arrays.map((array, index) => {
  const view = { buffer: 0, byteOffset: offset, byteLength: array.byteLength, target: index === 3 ? 34963 : 34962 };
  offset += array.byteLength;
  return view;
});
const minimum = [0, 1, 2].map(axis => Math.min(...positions.filter((_, index) => index % 3 === axis)));
const maximum = [0, 1, 2].map(axis => Math.max(...positions.filter((_, index) => index % 3 === axis)));
const document = {
  asset: { version: '2.0', generator: 'Neighborhood Explorer original pedestrian generator', copyright: 'Neighborhood Explorer project' },
  scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0, name: 'Pedestrian' }],
  meshes: [{ primitives: [{ attributes: { POSITION: 0, NORMAL: 1, COLOR_0: 2 }, indices: 3, material: 0 }] }],
  materials: [{ pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0, roughnessFactor: .9 }, doubleSided: true }],
  buffers: [{ byteLength: offset }], bufferViews: views,
  accessors: [
    { bufferView: 0, componentType: 5126, count: positions.length / 3, type: 'VEC3', min: minimum, max: maximum },
    { bufferView: 1, componentType: 5126, count: normals.length / 3, type: 'VEC3' },
    { bufferView: 2, componentType: 5126, count: colors.length / 4, type: 'VEC4' },
    { bufferView: 3, componentType: 5123, count: indices.length, type: 'SCALAR' },
  ],
};
const json = Buffer.from(JSON.stringify(document));
const jsonPadding = (4 - json.length % 4) % 4;
const binary = Buffer.concat(arrays.map(array => Buffer.from(array.buffer)));
const binaryPadding = (4 - binary.length % 4) % 4;
const header = Buffer.alloc(20);
header.writeUInt32LE(0x46546c67, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + json.length + jsonPadding + binary.length + binaryPadding, 8);
header.writeUInt32LE(json.length + jsonPadding, 12);
header.writeUInt32LE(0x4e4f534a, 16);
const binaryHeader = Buffer.alloc(8);
binaryHeader.writeUInt32LE(binary.length + binaryPadding, 0);
binaryHeader.writeUInt32LE(0x004e4942, 4);
writeFileSync(fileURLToPath(new URL('../public/models/pedestrian.glb', import.meta.url)), Buffer.concat([
  header, json, Buffer.alloc(jsonPadding, 32), binaryHeader, binary, Buffer.alloc(binaryPadding),
]));
console.log(`Generated original pedestrian, ${(binary.length / 1024).toFixed(0)} KiB of geometry.`);
