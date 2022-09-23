
const january =31;
const february =28;
const march = 31;
const april = 30;
const may = 31;
const june = 30;
const july = 31;
const august = 31;
const september = 30;
const october = 31;
const november = 30;
const december = 31;



function getStartDay(month){
    var startDay;
    var totalDays;
   switch (month){
    case "January 2022":
        startDay=6;
        return startDay;
        break;
    case "February 2022":
      totalDays=january;
        break;
    case "March 2022":
        totalDays=january+february;
        break;

    case "April 2022":
        totalDays=january+february+march;
        break;
    
    case "May 2022":
        totalDays=january+february+march+april;
        break;

    case "June 2022":
        totalDays=january+february+march+april+may;
        break;  
        
    case "July 2022":
        totalDays=january + february + march + april + may +june;
        break;

    case "August 2022":
        totalDays=january + february + march + april + may + june +july;
        break;

    case "September 2022":
        totalDays=january + february + march + april + may + june +july + august;
        break;
    
    case "October 2022":
        totalDays=january + february + march + april + may + june + july +august + september;
        break;
       
    case "November 2022":
        totalDays=january + february + march + april + may + june + july + august + september + october;
        break;

    case "December 2022":
        totalDays=january + february + march + april + may + june + july + august + september + october + november;
        break;


    }
   

   startDay=totalDays%7;

   startDay=startDay+6;
   if(startDay>=7){
    startDay=startDay%7;
   }

   return startDay;
    
}



function loadDates(month){
    clearDates();
var monthDays;
    switch (month){
        case "January 2022":
            monthDays=32;
            break;
        case "February 2022":
            monthDays=29;
            break;

        case "March 2022":
            monthDays=32;
            break;

        case "April 2022":
            monthDays=31;
            break;

        case "May 2022":
            monthDays=32;
            break;   

        case "June 2022":
            monthDays=31;
            break;
            
        case "July 2022":
            monthDays=32;
            break;  
            
        case "August 2022":
            monthDays=32;
            break;   

        case "September 2022":
            monthDays=31;
            break;  
            
        case "October 2022":
            monthDays=32;
            break;  
            
        case "November 2022":
            monthDays=31;
            break;  
            
        case "December 2022":
            monthDays=32;
            break;   
    
    }
   const dates = document.getElementsByClassName("dates");

   var startDay=getStartDay(month);

   for(i=1; i<monthDays; i++){
    dates[startDay].innerHTML=i;
    startDay++;
   }

}

function clearDates(){
    const dates = document.getElementsByClassName("dates");

    for(i=0; i<dates.length; i++){
        dates[i].innerHTML="";
    }
}

loadDates("January 2022");


//alert(9%7);
//alert(getStartDay(february));