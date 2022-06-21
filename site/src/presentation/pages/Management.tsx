import React from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import Box from "@mui/material/Box";
import {UserContext} from "../context/UserContext";


const Management = () => {
    return (
        <>
          <AccountRowCard title={"Gerenciar Anúncios"} description={"Gerencie os anúncios feitos pelos usuários"} link={'/management/product'}/>
          <AccountRowCard title={'Gerenciar Usuários'} description={"Gerencie os usuários cadastrados no site"} link={'/management/user'} />  
        </>
    );
}

export default Management;