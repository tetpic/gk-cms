'use client'


import { Roles } from "@/app/api/user/userTypes"
import { useAppDispatch, useAppSelector } from "@/redux/types"
import { changeRole, getUsersAdmin, setFindBy, setFindString } from "@/redux/usersAdminSlice"

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

    function selectRoleHandler(evt: any) {
        let data = {
            id: Number(evt.target.parentElement.dataset.id) as number,
            role: evt.target.value as Roles
        }
        dispatch(changeRole(data))
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
                <div className="d-flex align-items-center bg-secondary p-2 text-white" data-id={el.id}>
                    <p className="w-25 mb-0 ">Имя: {el.name} </p>
                    <p className="w-25 mb-0">ID: {el.id} </p>
                    <select className="form-select form-select-sm w-25 ms-auto" defaultValue={el.role} placeholder="Изменить роль" onChange={(evt)=>selectRoleHandler(evt)} aria-label="Small select">
                        {/* <option selected={true}>Изменить роль</option> */}
                        <option value={Roles.admin}>Админ</option>
                        <option value={Roles.user}>Пользователь</option>
                        <option value={Roles.root}>Бог</option>
                    </select>
                </div>
            )
        })}
    </>
    )
}``