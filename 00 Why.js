/* eslint-disable */

// The result after years:
const def = {
  qvSavedFilterID: '',
  savedFilters: [],
  filterId: 0,
  scheduleTaskName: '',
  taskName: ''
};
const schedules = [];
const allReports =  [];

function process() {
  for (var indx = 0; indx < schedules.length; indx++) {
    var schedule = schedules[indx];
    var filterId = parseInt(schedule.qvSavedFilterID, 10);
    for (var rptIndx = 0; rptIndx < allReports.length; rptIndx++) {
      var report = allReports[rptIndx];
      if (filterId > 0) {
        if (report.savedFilters && report.savedFilters.length > 0) {
          for (var fltrIdx = 0; fltrIdx < report.savedFilters.length; fltrIdx++) {
            var tempFltrId = parseInt(report.savedFilters[fltrIdx].filterId, 10);
            if (tempFltrId === filterId) {
              report.savedFilters[fltrIdx].schedule = schedule;
              break;
            }
          }
        } else {
          continue;
        }
      } else {
        if (schedule.taskName.indexOf(report.scheduleTaskName) >= 0) {
          report.schedule = schedule;
          break;
        }
      }
    }
  }
}
