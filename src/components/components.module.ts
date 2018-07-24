import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar';
import { DayScheduleComponent } from './day-schedule/day-schedule';
import { WeekScheduleComponent } from './week-schedule/week-schedule';
import { IndividualCourseComponent } from './individual-course/individual-course';
import { PopupComponent } from './popup/popup';
@NgModule({
	declarations: [CalendarComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    IndividualCourseComponent,
    PopupComponent],
	imports: [],
	exports: [CalendarComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    IndividualCourseComponent,
    PopupComponent]
})
export class ComponentsModule {}
