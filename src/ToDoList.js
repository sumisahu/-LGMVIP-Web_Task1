 import { Grid, TextField,Button, withTheme } from "@mui/material"
import { useState } from "react"
import ToDoListCss from "./ToDOListCss"
import CancelIcon from '@mui/icons-material/Cancel';

export default function  ToDoList(props)
{ 

     const classes=ToDoListCss()
    
       const [input,setInput]=useState('')
       const [ListData,setListData]=useState([])

 function AddTask()
 {
  // setListData([...ListData,input])      //create latency and works ansyncronously
  // console.log(ListData)
  setListData((ListData)=>{
     const updatedList=[...ListData,input]   // works synchrono usly
      return updatedList

  })
  setInput('')

 }
 function removeTask(i){
  const updatedListData=ListData.filter((elem,id)=>{
    return i!=id
  })
  setListData(updatedListData)
 }
 const AllClear=()=>{
  setListData('')
 }


 
       

    return(
        <form>
            <div className={classes.main}>
            <div className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={12} style={{textAlign:'center',fontWeight:'bold',fontSize:30,color:'#fff'}}>
                  TODO LIST
                </Grid>
                <Grid item xs={8} style={{margin:10}}>
                  <TextField value={input} onChange={(e)=>setInput(e.target.value)}  fullWidth spellCheck label="Add Task"  />
                </Grid>
                <Grid item xs={3} style={{marginTop:10}}>
                  <Button variant="contained" onClick={AddTask} fullWidth style={{background:'#fff',color:'black',fontWeight:'bold',borderRadius:20}} >Add Todo</Button>
                </Grid>

                <Grid item xs={12}>
                  {ListData!=[] ? ListData.map((data,i)=>{
                       return(
                        <> 
                        <div key={i} style={{display:'flex',flexDirection:'row'}}>
                          <div style={{color:'black',fontSize:20,fontWeight:600,background:'#0984e3',textAlign:'center',width:'50%',borderRadius:5,padding:10,marginLeft:10,marginBottom:10}}>
                            {data}
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