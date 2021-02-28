import oc from "open-color";

const shades = (index: number) => [
  "rgb(0,122,176)",
  "rgb(187,16,43)",
  "rgb(68,167,48)",
  "rgb(135,105,79)",
  "rgb(237,167,32)",
  "rgb(166,77,153)",

  //oc.red[index],
  //oc.pink[index],
  //oc.grape[index],
  //oc.violet[index],
  //oc.indigo[index],
  //oc.blue[index],
  //oc.cyan[index],
  //oc.teal[index],
  //oc.green[index],
  //oc.lime[index],
  //oc.yellow[index],
  //oc.orange[index],
];

export default {
  canvasBackground: [oc.white, oc.gray[0], oc.gray[1], ...shades(0)],
  elementBackground: ["transparent", oc.gray[4], oc.gray[6], ...shades(6)],
  elementStroke: [oc.black, oc.gray[7], oc.gray[6], oc.gray[5], ...shades(9)],
};
