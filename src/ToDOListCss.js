
import { makeStyles } from "@mui/styles";
  
const ToDoListCss=makeStyles({


    main:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
         width:'100wh',
        height:'100vh',
        backgroundImage:'url(todoo.jpg)',
        backgroundSize:'cover',
        padding:10,
           
    },
    root:{
        width:"auto",
        height:'auto',
        background:'#fff',
        borderRadius:10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        border:'3px solid #51cccc'
    }

})


export default ToDoListCss