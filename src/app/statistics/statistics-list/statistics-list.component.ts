import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { StatisticsService } from 'src/app/statistics.service';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent implements OnInit, OnDestroy {
  battleData: Subject<string>;
  chartConfig = {
    xAxis: true,
    yAxis: true,
  };

  dataList: any[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService.connect();
    this.statisticsService.battleStatisticMessage$.subscribe((data) => {
      //console.log(data);
      let dataObj = JSON.parse(data);
      this.addOrUpdateData(dataObj.winner);
      this.dataList = [...this.dataList];
    });
    //this.battleData = this.statisticsService.battleStatisticMessage;
  }

  addOrUpdateData(id: number): void {
    var index = this.dataList.findIndex((item) => {
      return item.name === id.toString();
    });
    if (index != -1) {
      this.dataList[index].value = this.dataList[index].value + 1;
      //this.dataList[index].value += 1;
    } else {
      this.dataList.push({
        name: id.toFixed(),
        value: 1,
      });
    }
  }

  ngOnDestroy(): void {
    this.statisticsService.close();
  }
}
