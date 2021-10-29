function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
} 

saturdayFun()

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

mondayWork()

const wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  wrapAdjective("*");