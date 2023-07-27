import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private socket$: any;
  public battleStatisticMessage$ = new Subject<string>();
  //Subject -> Convertir informacion y transformala a un stream (next, complete, error, subscribe)
  // .next -> Enviar informacion al stream
  // .complete -> Cerrar el canal
  // .subscribe -> Subscribirnos al subject
  // .error -> Notificar errores

  constructor() {}

  public connect(): void {
    this.socket$ = this.getNewWebSocket();
    this.socket$.subscribe({
      next: (data: any) => {
        this.battleStatisticMessage$.next(JSON.stringify(data));
      },
    });
  }

  private getNewWebSocket() {
    return webSocket({
      url: environment.pokeStatisticsUrl,
      openObserver: {
        next: () => {
          console.log('WebSocket conectado');
        },
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
