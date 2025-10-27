
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
                { "subject": "English", "mark": 49 },
                { "subject": "maths", "mark": 40 },
                { "subject": "physics", "mark": 47 },
                { "subject": "chemistyy", "mark": 46 },
                { "subject": "computer", "mark": 50 },
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



//STUDENT WITH HIGEST TOTAL MARK
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

// let m = 40
// let count = 0
// let totalstudent = classObj.student.length
// classObj.student.forEach(stu => {
//     let allbelow = stu.marks.every(s => s.mark < m)
//     if (allbelow) {
//         count++
//     }
// })
// let percentage = (count / totalstudent) * 100
// console.log(`${percentage.toFixed(2)}`)


//PERCENTAGE OF STUDENT ABOVE CERTAIN MARK IN  CERTAIN SUBJECT

// let m = 40
// let count = 0
// let totalstudent = classObj.student.length
// let subjectname = "English"
// classObj.student.forEach(stu => {
//     let sub = stu.marks.find(s => s.subject === subjectname)
//     let above = sub.mark > m
//     if (above) {
//         count++
//     }
// })
// let percentage = (count / totalstudent) * 100
// console.log(percentage)


//PRINT THE STUDENT WITH HIGHEST PERCENTAGE OF MARK
// let highestpercentage=0
// let topstudent=null
// classObj.student.forEach(stu=>{
//     let totalmark=stu.marks.reduce((a,b)=>a+b.mark,0)
//     let percentage=(totalmark/(stu.marks.length*50))*100

//     if(percentage>highestpercentage){
//         highestpercentage=percentage
//         topstudent=stu.name
//     }
// })

// console.log(`student with highest percentage:${topstudent}-${highestpercentage.toFixed(0)}%`)





//SUBJECT WITH HIGHEST PERCENTAGE OF MARKS
// let subjecttotals={}
// let subjectcount={}

// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         let sub=s.subject

//         if(!subjecttotals[sub]){
//             subjecttotals[sub]=0
//             subjectcount[sub]=0
//         }
//         subjecttotals[sub]+=s.mark
//         subjectcount[sub]++
//     })
// })

// let highestpercentage=0
// let topsubject=null
// for(let sub in subjecttotals){
//     let totalpossible=subjectcount[sub]*50
//     let percentage=(subjecttotals[sub]/totalpossible)*100

//     if(percentage>highestpercentage){
//         highestpercentage=percentage
//         topsubject=sub
//     }
// }

// console.log(`subject with highest percentage:${highestpercentage.toFixed(0)}%:${topsubject}`)


//STUDENT WITH LOWEST PERCENTAGE OF MARK
// let subjecttotal={}
// let subjectcount={}         

// classObj.student.forEach(stu=>{
//     stu.marks.forEach(s=>{
//         let sub=s.subject

//         if(!subjecttotal[sub]){
//             subjecttotal[sub]=0
//             subjectcount[sub]=0
//         }
//         subjecttotal[sub]+=s.mark
//         subjectcount[sub]++
//     }) 
// })
//  let lowestpercentage=Infinity  
//  let lowsubject=null
//  for(let sub in subjecttotal){
//     let totalpossible=subjectcount[sub]*50
//     let percentage=(subjecttotal[sub]/totalpossible)*100
// if(percentage<lowestpercentage){
//     lowestpercentage=percentage
//     lowsubject=sub
// }
// }
// console.log(`subject with lowest percentage:${lowestpercentage.toFixed(0)}%:${lowsubject}`)

 
//STUDENT WITH LOWEST PERCENTAGE OF MARK IN SPECIFIC SUBJECT
// let lowestpercentage=Infinity
// let studentname=null
// let subjectname="English"
//  classObj.student.forEach(stu=>{
//     let sub=stu.marks.find(s=>s.subject===subjectname)
//     let percentage=(sub.mark/50)*100
//     if(percentage<lowestpercentage){
//         lowestpercentage=percentage
//         studentname=stu.name
//     }
    
//  })
//  console.log(`student with lowest percentage of mark ${studentname}:${lowestpercentage}%`)



                                      
//HIGHER ORDER FUNCTION IN JS
// function higherorder(fn){
//     fn()
// } 
 
// higherorder(function(){console.log("hi")})


   
     //CALL()
        
// function say(message){
//     return this.name +" "+ "hai" +" "+ message
// }                                                              
// var person={name:"jia"}
//  console.log(say.call(person,"hello"))
           
                                                                                                                                                              

                        
         //APPLY()
// function say(message){
//     return this.name+" " +"hi"+ " "+ message
// }
// let person={
//     name:"gis"
// }
// console.log(say.apply(person,['goodmorning']))
        

    //BIND
    // let person={
    //     name:"john"
    // }
    // function say(message){
    //     return this.name+" "+"hi"+" "+ message
    // }
    // let bounded=say.bind(person)
    // console.log(bounded("gooodiws"))

    //CURRYING

    //   function add(a){
    //     return function(b){
    //         return a+b
    //     }

    //   }
      
    // console.log(add(3)(4))      
                     

           
                
// function random(){
//     var obj1={
//         name:"vivan",
//         age:20
//     }

//     return function(){
//         console.log(obj1.name+" "+"is"+" "+"awsome")
//     }
// }
// var initialclocsure=random()
// initialclocsure()

   

//CALL BACK
// function divide(sum){
//     console.log(sum/2)

// }
// function multily(sum){
//     console.log(sum*2)
// }
// function operation(num1,num2,operation){
//     let sum=num1+num2
//     operation(sum)
// }
// operation(2,3,divide)
// operation(10,2,multily)
 

    //  function hai(){
    //     console.log("orginal")
    //  }
    //  function gia(callback){
    //     console.log("after thia")
    //     callback()
    //  }
    //  gia(hai)



 //RECURSION   
    // function add(number){
    //     if(number<0){
    //         return 0
    //     }else{
    //         return number + add(number-1)
    //     }
    // }
    // console.log(add(3))

      
//  function add(arr){
//     if(arr.length===1){
//         return arr[0]
//     }else{
//         return arr.pop()+add(arr)
//     }

//  }
//  console.log(add([10,20,30,40]))

//CONSTRUCTOR

// function person(name,age,gender){
//     this.name=name
//     this.age=age
//     this.gender=gender
// }
// var person1= new person("inku",20,"female")
// console.log(person1)
                       
// var person2=new person("hike",10,"male")
// console.log(person2)
 

  //ARROW FUNCTION
//    var multipy=function(num){
//     return num*2
//    }
//  console.log(multipy(2))

// var multipy=num=>num*2
// console.log(multipy(2))


                
            
   //PROMISE          
 
// function sumofthreeelement(...element){
//     return new Promise((resolve,reject)=>{
//         if(element.length>3){
//             reject("only 3 elemnt is allowed")
//         }else{
//             let sum=0
//             let i=0
//             while(i<element.length){
//                 sum+=element[i]
//                 i++
//             }
//             resolve("sum is "+ sum)
//         }
//     })

// }
// sumofthreeelement(1,2,3)
//     .then((message)=>{
//         console.log(message)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

    //GENERATIVE FUNCTION
    
// function *getfunc(){
//     yield 3
//     yield 4
// }   
// console.log(getfunc().next())


        
           
                                   
//DESTRUCTURING
// const classdetails={
//     strength:78,
//     benches:39,
//     blackboard:1
// }
// const {strength:classstrength,benches:classbenches,blackboard:classblackboard}=classdetails
// console.log(classbenches)
                                  
//BINARY SEARCH ON SORTED ARRAY
      
 
//  function binarysearch(arr,target){
//     let low=0
//     let high=arr.length-1
//     while(low<high){
//         let mid=Math.floor((low+high)/2)
//       if(arr[mid]=target){
//         return mid
//       }else if(arr[mid]<target){
//         low=mid+1
//       }else{
//         high=mid-1
//       }
//     }
//     return -1

//  }
// let ind= binarysearch([1,2,3,4,5,6,7],4)
// console.log(`target is in the index ${ind}`)                                

             
 
// function binarysearch(arr,target){
//     let low=0
//     let high=arr.length-1
//     while(low<=high){
//         let mid=Math.floor((low+high)/2)
//         if(arr[mid]===target){
//             return mid
//         }else if(arr[mid]<target){
//             low=mid+1
//         }else{
//             high=mid-1
//         }
//     }
//     return -1
// }
    
// const arr=[10,20,30,11,22,33,44]
// let sortedarr=arr.sort((a,b)=>a-b)
// console.log(sortedarr)
// console.log(binarysearch(sortedarr,33))


//RIGHT ROTATION N TIMES
// function rightrotation(arr,rotation){
//     if(rotation===0) return arr
//     for(let i=0;i<rotation;i++){
//         let element=arr.pop()
//         arr.unshift(element)
//     }
//     return arr
// }
// console.log(rightrotation([2,3,4,5,6],2))



//CHECK THE STRING IS ANAGRAM                                                                        

// function anagram(one,two){
//     var a=one.toLowerCase()
//     var b=two.toLowerCase()

//     a=a.split("").sort().join("")
//     b=b.split("").sort().join("")

//     return a===b
// }
// console.log(anagram("listen","silent"))

                                                                                     
// const vow="javacsrit"
// let vowels=["a","e","i","o","u"]
// let count=0
// for(let i of vow){
//     if(vowels.includes(i)){
//         count++
//     }
// }
// console.log(count)
                                                                                             

                                                                                
//TURN OBJECT INTO ARRAY
// let obj={
//     id:1,
//     name:"user1",
//     age:20,
//     work:"programmer"
// }

// console.log(Object.entries(obj))







