import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import esLocale from '@fullcalendar/core/locales/es'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale
  };

}
