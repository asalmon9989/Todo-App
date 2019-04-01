import _ from 'lodash';
import { format, isToday, parse, isSameDay, isTomorrow, isAfter, differenceInCalendarDays } from 'date-fns';

const filterDates = (tasks, date) => {
  let results = { sameDay: [], differentDay: [] };
  _.map(tasks, (task) => {
    if (isSameDay(Number(task.dueDate), date)) {
      results.sameDay.push(task);
    } else {
      results.differentDay.push(task);
    }
  });
  return results;
}
const createSection = (tasks) => {
  let section = { title: { day: '', date: '' }, data: tasks};
  let theDate = parse(Number(tasks[0].dueDate));
  if (isToday(theDate)) {
    section.title.day = "Today";
  } else if (isTomorrow(theDate)) {
    section.title.day = "Tomorrow";
  } else if (isAfter(theDate, new Date())) {
    section.title.day = format(theDate, 'ddd');
    section.title.date = format(theDate, 'MMM Do');
  } else {
    section.title.day = "Overdue";
  }
  return section;
}
export const isOverdue = (task) => {
  return differenceInCalendarDays(Number(task.dueDate), new Date()) < 0;
}

export const partitionTasksByDate = (tasks) => { 
  //Need to get all the overdue tasks grouped first because they're the only ones with different dates
  let sections = [];
  let overdueTasks = _.filter(tasks, (task) => isOverdue(task) );
  if (overdueTasks.length > 0) {
    sections.push(createSection(overdueTasks));
  }

  let rest = _.difference(tasks, overdueTasks);
  let results;
  while (rest.length > 0) {
    results = filterDates(rest, parse(Number(rest[0].dueDate)));
    if (results.sameDay.length > 0) {
      sections.push(createSection(results.sameDay));
    }
    rest = results.differentDay;
  }
  return sections;
}

export const addTask = (task, sections) => {
  // Find out what section it goes in
  // First check if it's overdue
  let i;
  if (isOverdue(task)) {
    console.log("task is overdue");
    i = 0;
    while (sections.length > i) {
      //console.log(`section title.day = ${sections[i].title.day}`);
      if (sections[i].title.day === "Overdue") {
        console.log("Found the 'Overdue' section and adding task to its data")
        sections[i].data.push(task);
        return sections;
      }
      i++;
    }
    console.log("The overdue section is not found.");
    let newSection = createSection([task]);
    console.log("Created section and adding it to beginning of sections");
    sections.unshift(newSection);
    return sections;
  }
  for (let i = 1; i < sections.length; i++) {
    if (isSameDay(Number(task.dueDate), Number(sections[i].data[0].dueDate))) {
      // If the section exists, add it to data
      console.log("Section found, adding task to data");
      sections[i].data.push(task);
      return sections;
    }
  }
  // Else create another section and insert it
  console.log("Section not found. Creating one.")
  let newSection = createSection([task]);
  i = 0;
  while (sections.length > i) {
    //Check if the section is before the new section
    if ((differenceInCalendarDays(Number(task.dueDate), Number(sections[i].data[0].dueDate)) < 0)) {
      console.log("found where the new task goes, Breaking out of the loop")
      break;
    }
    i++
  } 
  return [ ...sections.slice(0, i), newSection, ...sections.slice(i) ];
}

export const removeTask = (task, sections) => {
  //Match it to the right section
  let sectionIndex = findSection(task, sections);
  let dataIndex = findByUid(task, sections[sectionIndex].data);
  console.log(`section: ${sectionIndex}, data: ${dataIndex}`);
  sections[sectionIndex].data.splice(dataIndex, 1);
  if (sections[sectionIndex].data.length === 0) {
    sections.splice(sectionIndex, 1);
  }
  return sections;
}
const findSection = (task, sections) => {
  if (isOverdue(task)) {
    return 0;
  } else {
    for (let i = 1; i < sections.length; i++) {
      if (isSameDay(Number(task.dueDate), Number(sections[i].data[0].dueDate))) {
        return i;
      }
    }
  }
  return -1;
}
const findByUid = (task, data) => {
  for (let i = 0; i < data.length; i++) {
    if (task.uid === data[i].uid) {
      return i;
    }
  }
  return -1;
}