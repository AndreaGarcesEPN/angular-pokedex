import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private socket$: any; //Subject -> Convertir informacion y transformarla a un stream 
                      //(next, complete, error, subsctibe)
                      //.next -> Enviar informacion al stream
                      //.complete -> Cerrar el canal
                      //.subscribe ->  Suscribirnos al subject
                      //.error -> Notoficar errores

  public battleStatisticMessage = new Subject<string>();

  constructor() { }

  public connect(): void {
    this.socket$ = this.getNewWebSocket();
    this.socket$.subscribe({
      next: (data: any) => {
        this.battleStatisticMessage.next(JSON.stringify(data));
      },
    });
  }

  private getNewWebSocket() {
    return webSocket({
      url: environment.pokeStatisticsUrl,
      openObserver: {
        next: () => {
          console.log('WebSocket conectado');
        }
      },
      closeObserver: {
        next: () => {
          console.log('Socket se ha cerrado');
          this.socket$ = undefined;
          //this.connect(); usar con cuidado
        },
      },
    });
  }

  close() {
    this.socket$.complete();
  }
}
