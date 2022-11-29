 import { Grid, TextField,Button, withTheme } from "@mui/material"
import { useState } from "react"
import ToDoListCss from "./ToDOListCss"
import CancelIcon from '@mui/icons-material/Cancel';
import Swal from "sweetalert2";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
 

export default function  ToDoList(props)
{ 
 
  
     const classes=ToDoListCss()
    
       const [input,setInput]=useState('')
       const [ListData,setListData]=useState([])
 
  
 function AddTask()
 {
  
   setListData((ListData)=>{
     const updatedList=[...ListData,input]   
     return updatedList
     
  })
   
setInput('')

 }

 function removeTask(i){
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    var updatedListData=ListData.filter((elem,id)=>{
        return i!=id
      })
      setListData(updatedListData)
      Swal.fire(
        'Deleted!',
        'Your task has been Deleted.',
        'success'
      )
    }
  })
  

 }



 const AllClear=()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert them All!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
  setListData('')
      Swal.fire(
        'Deleted!',
        'You All Task has been Deleted.',
        'success'
      )
    }
  })

 }

 function handleDone(i){
    
  Swal.fire({
    title: 'You have Completed your task',
     imageUrl: 'congrats.gif',
    imageWidth: 400,
    imageHeight: 200,
   
  })
  var updatedListData=ListData.filter((elem,id)=>{
    return i!=id
  })
  setListData(updatedListData)

 }

 
       

    return(
        <form>
            <div className={classes.main}>
            <div className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={12} style={{textAlign:'center',fontWeight:'bold',fontSize:30,color:'#000'}}>
                  TODO LIST
                </Grid>
                <Grid item xs={8} style={{margin:10}}>
                  <TextField value={input} onChange={(event)=>setInput(event.target.value)}  fullWidth spellCheck label="Add Task"  />
                </Grid>
                <Grid item xs={3} style={{marginTop:10}}>
                 {input?<Button variant="contained" onClick={AddTask}  fullWidth style={{background:'#fff',color:'black',fontWeight:'bold',borderRadius:20}} >Add Todo</Button>:<></>}
                </Grid>

                <Grid item xs={12}>
                  {ListData!=[]? ListData.map((data,i)=>{
                       return(
                        <> 
                     <div key={i} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                      <div style={{color:'black',fontSize:20,fontWeight:600,background:'#ccc',textAlign:'center',width:'50%',borderRadius:5,padding:10,marginLeft:10,marginBottom:10,display:'flex',justifyContent:'left',alignItems:'center'}}>
                         <CheckCircleIcon style={{display:'flex',justifyContent:'left',color:'green',cursor:'pointer'}} onClick={()=>handleDone(i)} /> <span style={{marginLeft:80}}>{data}</span>
                          </div>
                          <div style={{marginLeft:10,marginTop:8}} >
                    <CancelIcon onClick={()=>removeTask(i)} cursor='pointer' />

                          </div>
                           

                        </div>
                     
                        
                        </>
                       )

                  }):<></>}
                     <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:10}}>
                      {ListData.length>=1?<Button variant="contained" style={{background:'red'}}  onClick={AllClear}>Remove All</Button>:<></>
                                                           }
                        </div>
                </Grid>

                 
             


               
            </Grid>
            </div>
            </div>

             </form>
         

    )
}