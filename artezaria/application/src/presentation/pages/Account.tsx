import React, {useContext} from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import {UserContext} from "../context/UserContext";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import {UserTypes} from "../../domain/User";

function AccountPage() {
    const {user, resetUser} = useContext(UserContext);
    return (
        <>
            {/* Title */}
            <Typography variant="h4">Minha conta</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <AccountRowCard title={"Perfil"} description={"Veja e corrija suas informações pessoais"}
                            link={"/profile"}/>
            <AccountRowCard title={"Minhas compras"} description={"Acesse o histórico de suas compras"}
                            link={"/purchases"}/>
            {user.type === UserTypes.ARTIST &&
                <AccountRowCard title={"Anúncios"} description={"Gerencie suas vendas e veja os itens anunciados"}
                                link={"/adverts"}/>}
            <AccountRowCard title={"Sair"} description={"Já vai? :("} link={"/home"}
                            click={() => resetUser()}/>
        </>
    );
}

export default AccountPage;