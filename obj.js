
let classObj = {
    "name": "classA",
    "teacherName": "Mary",
    "student": [
        {         
            "name": "Ravi",
            "id": "101",
            "marks": [
                { "subject": "English", "mark": 25 },
                { "subject": "maths", "mark": 48 },
                { "subject": "physics", "mark": 40 },
                { "subject": "chemistyy", "mark": 30 },
                { "subject": "computer", "mark": 20 },
            ]
        },
        {               
            "name": "Aju",
            "id": "102",
            "marks": [         
                { "subject": "English", "mark": 35 },
                { "subject": "maths", "mark": 38 },
                { "subject": "physics", "mark": 33 },
                { "subject": "chemistyy", "mark": 34 },
                { "subject": "computer", "mark": 30 },
            ]
        },
        {             
            "name": "Binu",
            "id": "104",
            "marks": [
                { "subject": "English","mark": 49 },
                { "subject": "maths","mark": 40 },
                { "subject": "physics","mark": 47 },
                { "subject": "chemistyy","mark": 46 },
                { "subject": "computer","mark": 50 },   
            ]
        }
    ]
}  

//NAME OF ALL STUDENT
// function all(classObj){
//     classObj.student.forEach((nam)=>{
//         console.log(nam.name)
//     })

// }
// all(classObj)
//ID OF ALL STUDENT
// function id(classObj){
//     classObj.student.forEach((id)=>{
//         console.log(id.id)
//     })

// }
// id(classObj)
//SUBJECT NAME FOR SPECIFIC STUDENT
// function subname(classObj){
//    let studentname="Aju"
//    classObj.student.forEach((sub)=>{
//     let studentname=sub.maks.find(s=>s.subject===subjectname)
//     console.log(subjectname)
//    })
// }
// subname(classObj)
// function subname(classObj){
//     let studentname="Ravi"
//     let student=classObj.student.find(stu=>stu.name===studentname)
//     if(student){
//         student.marks.forEach(nam=>{
//             console.log(nam.subject)
//         })
//     }

// }
// subname(classObj)
    
//MARK OF SPECIFIC STUDENT IN ALL SUB          
// function markof(classObj){
//     let studentname="Aju"
//     let student=classObj.student.find(mar=>mar.name===studentname)
//     if(student){
//         student.marks.forEach((eac)=>{
//             console.log(eac.mark)
//         })
//     }
                        
// }
// markof(classObj)

//AVERAGE MARK OF SPECIFIC SRUDENT

// function avgmark(classObj){
//     let studentname="Aju"
//     let student=classObj.student.find(stname=>stname.name===studentname)
//     if(student){
//         let total=0
//         student.marks.forEach(mar=>{
           
//             total+=mar.mark
//         })
//         let avg=total/student.marks.length
//         console.log(avg)
      
//     }

// }
// avgmark(classObj)

//TOTAL MARK FOR SPECIFIC STUDENT
// let studentname="Aju"
// let student=classObj.student.find(st=>st.name===studentname)
// if(student){
//     let total=0
//     student.marks.forEach(mar=>{
//       total+=mar.mark
//     })
//     console.log(total)
// }
  
//AVERAGE MARK FOR ALL STUDENT IN SPECIFIC SUBJECT
// let subjectname="English"
// let total=0
// let count=0
// classObj.student.forEach(sub=>{
//     let sub1=sub.marks.find(ne=>ne.subject===subjectname)
//     if(sub1){
//         total+=sub1.mark
//         count++
       
//     }
   
// })
// if(count>0){
//     let avg=total/count
//     console.log(avg)
// }
 
//TOTAL MARK FOR ALL STUDENT IN SPECIFIC SUBJECT
// let subjectname="English"
// let total=0
// classObj.student.forEach(stu=>{
    
//     let subject1=stu.marks.find(fin=>fin.subject===subjectname)
//     if(subject1){
//         total+=subject1.mark

//     }
   
// })
//  console.log(total)

//STUDENT WITH HIGHEST MARK IN SPECIFIC SUBJECT
// let subjectname="English"                                                                
// let topstudent=null
// let highestmark=0

// classObj.student.forEach(st=>{
//     let subject=st.marks.find(st1=>st1.subject===subjectname)
//     if(subject && subject.mark>highestmark){
//         highestmark=subject.mark
//         topstudent=st.name
//     }
// })
// if(topstudent){
//     console.log(`student with highest mark:${topstudent}:${highestmark} subject:${subjectname}`)
// }


//STUDENT WITH LOWEST MARK IN SPECIFIC SUBJECT
// let subjetname="English"
// let lowstudent=null
// let lowestmark=Infinity

// classObj.student.forEach(st=>{
//     let subject=st.marks.find(stu=>stu.subject===subjetname)
//     if(subject && subject.mark<lowestmark){
//         lowestmark=subject.mark
//         lowstudent=st.name

//     }
// })
// if(lowstudent){
// console.log(`lowest mark in ${subjetname} for ${lowstudent} with ${lowestmark} mark`)
// }

//STUDENT WITH HIGHEST TOTAL MARKS
// let topstudent=null
// let highesttotoal=0

// classObj.student.forEach(st=>{
//     let total=st.marks.reduce((a,b)=>a+b.mark,0)
//     if(total>highesttotoal){
//         highesttotoal=total
//         topstudent=st.name
//     }
// })
// if(topstudent){
//     console.log(`hightotat is ${highesttotoal} for ${topstudent}`)
// }


//STUDENT WITH LOWEST TOTAL MARK
// let lowestmark=Infinity
// let loweststudent=null

// classObj.student.forEach(stu=>{
//     let totoal=stu.marks.reduce((a,b)=>a+b.mark,0)
//     if(totoal<lowestmark){
//           lowestmark=totoal
//         loweststudent=stu.name
//     }
      
// })
// if(loweststudent){
//     console.log(`lowest total is ${lowestmark} for ${loweststudent}`)
// }


//SUBJECT WITH HIGHEST AVERAGE MARK

// let subjectaverages={}
// let subjectcount={}

// classObj.student.forEach(stu=>{
//     stu.marks.forEach(markobj=>{
//         let sub=markobj.subject
//         if(!subjectaverages[sub]){
//             subjectaverages[sub]=0
//             subjectcount[sub]=0
//         }
//         subjectaverages[sub]+=markobj.mark
//         subjectcount[sub]++
//     })
// })
// let highestAvg=0  
// let topsubject=null
// for(let sub in subjectaverages){
//     let avg=subjectaverages[sub]/subjectcount[sub]
//     if(avg>highestAvg){
//         highestAvg=avg
//         topsubject=sub
//     }
// } 
// console.log(`highest average in subject ${topsubject} with highest average mark: ${highestAvg}`)


// SUBJECT WITH LOWEST AVERAGE MARK
// let subjectaverage={}
// let subjectcount={}

// classObj.student.forEach(stu=>{
//     stu.marks.forEach(markobj=>{
//         let sub=markobj.subject
//         if(!subjectaverage[sub]){
//             subjectaverage[sub]=0
//             subjectcount[sub]=0
//         }
//         subjectaverage[sub]+=markobj.mark
//         subjectcount[sub]++
//     })
// }) 
// let lowestaverage=Infinity
// let lowesetsub=null
// for(let sub in subjectaverage){
//     let avg=subjectaverage[sub]/subjectcount[sub]
//     if(avg<lowestaverage){
//         lowestaverage=avg
//         lowesetsub=sub
//     }           
// }      
// console.log(`lowest average mark in subject:${lowesetsub} with mark ${lowestaverage}`)
  
//OVERALL AVERAGE MARK FOR THE CLASS
// totalmark=0
// let count=0
// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         totalmark+=s.mark
//         count++
//     })
// })
// if(count>0){
//       let avg=totalmark/count
// console.log(avg)

// }
  

//OVERALL TOTAL MARK FOR THE CLASS
// let total=0
// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         total+=s.mark
//     })
// })
// console.log(total)


// AVERAGE MARK FOR EACH SUBJECT
// let subjectaverage={}
// let subjectcount={}
// let total=0

// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//        let sub=s.subject

//        if(!subjectaverage[sub]){
//         subjectaverage[sub]=0
//         subjectcount[sub]=0
//        }
//        subjectaverage[sub]+=s.mark
//        subjectcount[sub]++
//     })
// })
// for(let sub in subjectaverage){
//     let avg=subjectaverage[sub]/subjectcount[sub]
//     console.log(avg)
// }


//TOTAL MARK FOR EACH subject
// let totalsubject={}
// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         sub=s.subject

//         if(!totalsubject[sub]){
//             totalsubject[sub]=0
//         }
//         totalsubject[sub]+=s.mark
//     })
// })
// for(sub in totalsubject){
//     console.log(`${sub}:${totalsubject[sub]}`)
// }

//SUBJECT WITH HIGEST TOTAL MARK
// let totalsubject={}
// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         sub=s.subject

//         if(!totalsubject[sub]){
//             totalsubject[sub]=0
//         }
//         totalsubject[sub]+=s.mark
//     })
// })
// let higest=0
// for(sub in totalsubject){
//     if(higest<totalsubject[sub]){
//         higest=totalsubject[sub]
//     }
// }
// console.log(higest)
 
    
//SUBJECT WIHT LOWEST TOTAL MARK
// let totalsubject={}
// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         sub=s.subject
//         if(!totalsubject[sub]){
//             totalsubject[sub]=0
//         }
//         totalsubject[sub]+=s.mark
//     })
// })
// let lowest=Infinity
// for(let sub in totalsubject){
//     if(totalsubject[sub]<lowest)
//         lowest=totalsubject[sub]
// }

// console.log(lowest)

//STUDENT WITH HIGEST AVERAGE MARK
// let highest=0
// let topstudent=""

// classObj.student.forEach(stu=>{
//     let total=stu.marks.reduce((a,b)=>a+b.mark,0)

//     let avg=total/stu.marks.length

//     if(avg>highest){
//         highest=avg
//         topstudent=stu.name
//     }
    
// })
// console.log(`${topstudent} with highest avg mark ${highest}`)

// STUDENT WITH LOWEST AVERAGE MARK
// let lowstudent=null
// let lowest=Infinity
// classObj.student.forEach(stu=>{
//     let total=stu.marks.reduce((a,b)=>a+b.mark,0)
//     let avg=total/stu.marks.length

//     if(avg<lowest){
//         lowest=avg
//         lowstudent=stu.name
//     }
// })

// console.log(`${lowstudent} with lowest average mark ${lowest}`)



 //SRUDENT WITH HIGEST TOTAL MARK
//  let highest=0
//  let highstudent=null
//  classObj.student.forEach(stu=>{
//     let total=stu.marks.reduce((a,b)=>a+b.mark,0)

//      if(total>highest){
//     highest=total
//     highstudent=stu.name
//  }

//  })
//  console.log(`student with highst total mark- ${highstudent}:${highest} marks`)

//STUDENT WITH LOWEST TOTAL MARK
// let lowest=Infinity
// let lowstudent=0
// classObj.student.forEach(stu=>{
//     let total=stu.marks.reduce((a,b)=>a+b.mark,0)
//     if(total<lowest){
//         lowest=total
//         lowstudent=stu.name
//     }
// })
// console.log(`lowest total mark ${lowstudent}:${lowest} mark`)

//PRINT THE NUMBER OF STUDENTS WHO SCORED ABOVE A CERTAIN MARK IN SPECIFIC SUBJECT
// let subjectname="English"
// let m=30
// let count=0

// classObj.student.forEach(stu=>{
//     subject=stu.marks.find(s=>s.subject===subjectname)
//     if(subject){
//         if(subject.mark>m){
//             count++
//         }
//     }
// })
// console.log(`${count} students scored above ${m}`)


//NUMBER OF STUDENT SCORED BELOW CERTAIN SCORE IN SPECIFIC SUBJECT
// let subjectname="maths"
// let count=0
// let m=40
// classObj.student.forEach(stu=>{
//     subject=stu.marks.find(s=>s.subject===subjectname)
//     if(subject){
//         if(subject.mark>m){
//             count++
//         }
//     }
// })
// console.log(`${count} students are below ${m}`)

// NUMBER OF STUDENT SCORED ABOVE CERTAIN MARK IN ALL SUBJECT
// m=30
// let count=0
// classObj.student.forEach(stu=>{
//    let allabove=stu.marks.every(s=>s.mark>m)
//    if(allabove){
//     count++
//    }
// })
// console.log(`only ${count} student scored above ${m}`)



// NO. OF STUDENT SCORED BELOW CERTIAN MARKS IN ALL SUBJECT

// let count=0
// let m=40
// let totalstudent=classObj.student.length
// classObj.student.forEach(stu=>{
//     let allbelow=stu.marks.every(s=>s.mark<m)
//     if(allbelow){
//         count++
//     }
// })
// let percentage=(count/totalstudent)
// console.log(`${percentage.toFixed(2)}%`)

//PERCENTAGE OF STUDENT BELOW CERTAIN MARKS IN ALL SUBJECT

// let m=40
// let count=0
// let totalstudent=classObj.student.length
// classObj.student.forEach(stu=>{
//     let allbelow=stu.marks.every(s=>s.mark<m)
//     if(allbelow){
//         count++
//     }
// })
// let percentage=(count/totalstudent)*100
// console.log(`${percentage.toFixed(2)}`)

   
     
