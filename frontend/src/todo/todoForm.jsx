import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";
export default props=>{
          const keyHandler = (e) =>{
            if(e.key === 'Enter'){
                e.shiftKey? props.handleSearch() : props.handleAdd()
            }else if (e.key === 'Escape'){
                props.handleInitialList()
            }

          }

    return(
            <div role ='form'className="todoForm">
                <Grid cols ='12 9 10'>
                   <input onKeyUp={keyHandler} id="description" className="form-control" placeholder="Adicione uma tarefa" onChange={props.handleChange} value={props.description}/>
                </Grid>
               <Grid cols='12 3 2'>
                <IconButton style="info" icon="plus"onClick={props.handleAdd}/>
                <IconButton style="info" icon="search" onClick={props.handleSearch}/>
                <IconButton style="info" icon="bars" onClick={props.handleInitialList}/>
                </Grid>
            </div>
    )
}
