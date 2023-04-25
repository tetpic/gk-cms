'use client'


import { useAppDispatch, useAppSelector } from "@/redux/types"
import { getUsersAdmin, setFindBy, setFindString } from "@/redux/usersAdminSlice"

export default function ManageUsers () {


    let {findBy, findString, message, users} = useAppSelector(state => state.userAdmin)
    let dispatch = useAppDispatch()

    function setFindTypeHandler(event: any){
        let type = event.target.dataset.type
        dispatch(setFindBy(type))
    }

    function setFindStringHandler(event: any) {
        let value  = event.target.value
        dispatch(setFindString(value))
    }

    function sendDataHandler() {
        dispatch(getUsersAdmin())
    }




    return (
    <>
        <div>Управление пользователями</div> 
        <div className="d-flex mb-3 align-items-center">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Поиск по: 
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item btn" data-type="id" onClick={setFindTypeHandler} >ID</li>
                    <li className="dropdown-item btn" data-type="role"  onClick={setFindTypeHandler}>ROLE</li>
                    <li className="dropdown-item btn" data-type="email" onClick={setFindTypeHandler}>EMAIL</li>
                    <li className="dropdown-item btn" data-type="name"  onClick={setFindTypeHandler}>NAME</li>
                </ul>
            </div>
            <p className="mx-3 mb-0">{findBy}</p>
        </div>    
        <input type="text" onInput={setFindStringHandler} className="form-control mb-3" value={findString} placeholder="...введите строку поиска"/>
        <button type="button" onClick={sendDataHandler} className="btn btn-outline-primary">Поиск</button>
        <p>{message}</p>
        {users.map((el:any)=>{
            return (
                <div>{el.name}</div>
            )
        })}
    </>
    )
}``