
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
})

export class InformesComponent{

  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  public barChartLabels: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [
    {data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)'
      ],
      borderColor: [
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)',
        'rgba(39, 89, 149, 1)'
      ],
      borderWidth: 2,
    hoverBorderWidth: 0,
    hoverBackgroundColor: [
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)',
        'rgba(75, 115, 201, 0.6)'
      ]
    }
  ];


}
