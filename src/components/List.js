import React from 'react';
import Flipmove from 'react-flip-move';

function List(props) {
    return (
        <div className="full-list">
            <Flipmove duration={500} easing="ease-in-out">
            {props.allTasks.map((elem)=>{
                return (
                <div key={elem.key} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>   
                    <p className="list-item">
                        <input id={elem.key} value={elem.text} onChange={(e)=>{props.editTask(e.target.value,elem.key)}}></input>
                    </p>
                    <button className="delete-but" onClick={()=>{props.deleteTask(elem.key)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            )})}
            </Flipmove>
        </div>
    );
}

export default List;