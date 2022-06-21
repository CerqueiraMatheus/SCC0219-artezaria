import { Card, Divider, Stack, Typography } from "@mui/material";
import { Address } from "../../../domain/Adress";
import AddressComponent from "./AdressComponent";

const AddressCard = (props) =>
(
    <Card raised sx={{padding: 5}}>
        <Typography variant='h4' textAlign='center' gutterBottom>
            Endereços
        </Typography> 
        <Stack 
          spacing={2} 
          alignItems='center'
          divider={<Divider orientation="horizontal" flexItem />}>
            { props.addresses.map((address) => <AddressComponent {...address} />) }
        </Stack>
    </Card>
)


export default AddressCard;