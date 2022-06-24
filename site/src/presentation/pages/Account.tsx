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
            <AccountRowCard title={"Minhas compras"} description={"Veja e corrija suas informações pessoais"}
                            link={"/purchases"}/>
            {user.type === UserTypes.ARTIST &&
                <AccountRowCard title={"Anúncios"} description={"Veja e corrija suas informações pessoais"}
                                link={"/adverts"}/>}
            <AccountRowCard title={"Sair"} description={"Veja e corrija suas informações pessoais"} link={"/home"}
                            click={() => resetUser()}/>
        </>
    );
}

export default AccountPage;