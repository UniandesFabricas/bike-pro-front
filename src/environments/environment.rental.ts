import { Products } from '../app/enums/products.enum';
export const environment = {
  production: true,
  product: Products.Alquiler,
  urlBack: 'http://ec2-18-237-88-127.us-west-2.compute.amazonaws.com:8080/BikePro/',

  //------ CARACTERISTICAS -------//
  // BUSQUEDA
  busqueda_bicicletas: true,
  busqueda_rutasCompartidas: true,​
  busqueda_eventosPrivados: false​,
  // INSCRIPCION

  // COMUNIDAD
};
