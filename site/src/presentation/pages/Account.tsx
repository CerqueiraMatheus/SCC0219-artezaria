import React, {useContext} from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import Box from "@mui/material/Box";
import {UserContext} from "../context/UserContext";

function AccountPage() {
    const {resetUser} = useContext(UserContext);
    return (
        <>
            <AccountRowCard title={"Perfil"} description={"Veja e corrija suas informações pessoais"} link={"/profile"}/>
            <Box sx={{height: 50}}/>
            <AccountRowCard title={"Minhas compras"} description={"Veja e corrija suas informações pessoais"} link={"/purchases"}/>
            <AccountRowCard title={"Anúncios"} description={"Veja e corrija suas informações pessoais"} link={"/adverts"}/>
            <AccountRowCard title={"Sair"} description={"Veja e corrija suas informações pessoais"} link={"/home"} click={() => resetUser()}/>
        </>
    );
}

export default AccountPage;