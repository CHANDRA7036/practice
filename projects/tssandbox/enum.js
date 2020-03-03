var DaysofTheWeek;
(function (DaysofTheWeek) {
    DaysofTheWeek[DaysofTheWeek["SUN"] = 0] = "SUN";
    DaysofTheWeek[DaysofTheWeek["MON"] = 1] = "MON";
    DaysofTheWeek[DaysofTheWeek["TUE"] = 2] = "TUE";
    DaysofTheWeek[DaysofTheWeek["WED"] = 3] = "WED";
    DaysofTheWeek[DaysofTheWeek["THU"] = 4] = "THU";
    DaysofTheWeek[DaysofTheWeek["FRI"] = 5] = "FRI";
    DaysofTheWeek[DaysofTheWeek["SAT"] = 6] = "SAT";
})(DaysofTheWeek || (DaysofTheWeek = {}));
var Day;
Day = DaysofTheWeek.MON;
if (Day === DaysofTheWeek.MON) {
    console.log('Got to goto work');
}
