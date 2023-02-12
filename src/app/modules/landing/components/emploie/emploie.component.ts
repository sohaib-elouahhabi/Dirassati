import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../../../Services/auth-service.service";
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-emploie',
  templateUrl: './emploie.component.html',
  styleUrls: ['./emploie.component.scss']
})
export class EmploieComponent implements OnInit{

  coursesAndID : any;
  scheduelID:any;
  selectedDevice: any;
  isApiCallComplete = false;

  constructor(private api : AuthServiceService) {  }

  ngOnInit(): void {
    this.getGroupsAndID();

  //  this.getAppointments();
  }
  /********************************/
  titlee:any;
  datetime1:any;
  datetime2:any;

  eventss: any = [];
  data: any = [];
  remplir(id:number) {

    this.eventss=[];
    this.api.loadDataEmploi(id).subscribe(res => {
      this.data = res;

      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data[i]);
        var a = {
          extendedProps: this.data[i].title
          , groupId: this.data[i].cours_id, id: this.data[i].emplois_id, title: this.data[i].Subject +", Prof: "+this.data[i].nom
          , start: new Date(this.data[i].StartTime)
          , end: new Date(this.data[i].EndTime)
        };
        this.eventss[i] = a;

      }
      this.calendarOptions.events = this.eventss;

    })

  }

  /********************************/


/*for display usage*/
  getGroupsAndID(){
    this.api.getCourses()
      .subscribe({
        next:(res)=>{
          this.coursesAndID = res;
          this.scheduelID = res.cours_id;
          console.log("walid");
        }
      })
  }
/*for fetching data usage*/
  onChange(id: number) {
    this.isApiCallComplete = false;
    this.api.getOneCourseByID(id)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.selectedDevice = res;
          console.log("zelda");
          this.remplir(res.groupe_id);
          this.isApiCallComplete = true;
        },error:(err)=>{
          console.log(err)
        }
      })
    // ... do other stuff here ...
  }



  /************************/
  calendarOptions: CalendarOptions = {

    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],


    headerToolbar: {

      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    initialView: "timeGridWeek",
    selectable: true,


    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 6 }
      }
    },
    weekends: true,
    editable: false,






    // eventClick: this.handleEventClick.bind(this),
    // select: this.handleDateSelect.bind(this)
    // ,

  }






}
