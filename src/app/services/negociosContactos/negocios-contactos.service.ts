import { Injectable } from '@angular/core';
import { NegocioModel } from '../../models/negocio.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class NegociosContactosService {
  token: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }


  
  crearNegocio(negocio: NegocioModel): any {
    let url = URL_SERVICIOS + '/negociosContactos/';
    url += '?token=' + this.token;

    return this.http.post(url, negocio).pipe(
      map(
        (resp: any) => {
          Swal.fire(negocio.createdAt,  'Negocio agregado correctamente', 'success');
          return resp.negocio;
        }
      )
    );
  }


  eliminarNegocio(id: string): any {

    let url = URL_SERVICIOS + '/negociosContactos/' + id;
    url += '?token=' + this.token;

    return this.http.delete(url)
      .pipe(
        map(
          (resp: any) => {
            Swal.fire({
              title: 'Negocio eliminado',
              text: 'Eliminado correctamente',
              icon: 'success',
            });

            return true;
          }
        )
      );
  }


  actualizarNegocio(negocio: NegocioModel): any {

    let url = URL_SERVICIOS + '/negociosContactos/' + negocio.id_negocio;
    url += '?token=' + this.token;

    return this.http.put(url, negocio)
      .pipe(
        map(
          (resp: any) => {
            Swal.fire({
              title: 'Negocio actualizado',
              text: 'Actualizado correctamente',
              icon: 'success',
            });

            return resp.negocio;
          }
        )
      );
  }

  cargarNegociosConContacto(fkcontacto: string): any {
    let url = URL_SERVICIOS + '/negociosContactos/fkcontacto/' + fkcontacto;
    url += '?token=' + this.token;

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            console.log('todos los negocios con contacto: ', resp.negocios);
            return resp.negocios;
          }
        )
      );
  }

  cargarNegocios(): any {
    let url = URL_SERVICIOS + '/negociosContactos/negocios/';
    url += '?token=' + this.token;

    return this.http.get(url)
      .pipe(
        map(
          (resp: any) => {
            console.log('todos los negocios Service : ', resp.negocios);
            return resp.negocios;
          }
        )
      );
  }


}
