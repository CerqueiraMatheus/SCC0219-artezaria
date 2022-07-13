import React, {useContext} from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import {UserContext} from "../context/UserContext";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Management = () => {
    const {resetUser} = useContext(UserContext);
    return (
        <>
            {/* Title */}
            <Typography variant="h4">Gerenciamento</Typography>

            {/* Content */}
            <Divider sx={{marginBottom: 5}}/>
            <AccountRowCard title={"Gerenciar anúncios"} description={"Gerencie os anúncios feitos pelos usuários"}
                            link={'/management/product'}/>
            <AccountRowCard title={'Gerenciar usuários'} description={"Gerencie os usuários cadastrados no site"}
                            link={'/management/user'}/>
            <AccountRowCard title={"Sair"} description={"Já vai? :("} link={"/home"}
                            click={() => resetUser()}/>
        </>
    );
}

export default Management;