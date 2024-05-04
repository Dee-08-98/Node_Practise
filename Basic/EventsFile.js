const event = require('events')
const EventEmit = new event.EventEmitter()

// EventEmit.on('check',(data)=>{
//     console.log(data);
// })

// EventEmit.emit('check' , 'Welcome in nodejs event class')



// EventEmit.on('MYevent',(hi)=>{
//     const d = new Date(hi)
//   console.log(d.toLocaleDateString());
// })
// EventEmit.emit('MYevent','2023/12/9')




// EventEmit.on('MYevent',(hi)=>{
//    console.log(hi.toLocaleDateString());
// })
// EventEmit.emit('MYevent',new Date())



EventEmit.on('MYevent',(hi)=>{
   const d= hi
   console.log(d.getMonth());
 })
 EventEmit.emit('MYevent',new Date())


//  const dd = new Date()
//  console.log(dd.toLocaleTimeString());