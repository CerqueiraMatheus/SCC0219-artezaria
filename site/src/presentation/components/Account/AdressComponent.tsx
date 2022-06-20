import { Grid, TextField } from "@mui/material";
import { Address } from "../../../domain/Adress";

function AddressComponent (address: Address) {
    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Rua" variant="outlined" defaultValue={address.street} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" label="Número" variant="outlined" defaultValue={address.houseNumber}/>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" label="Complemento" variant="outlined" defaultValue={address.complement}/>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" label="CEP" variant="outlined" defaultValue={address.cep}/>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth id="outlined-basic" label="Cidade" variant="outlined" defaultValue={address.city}/>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" label="Estado" variant="outlined" defaultValue={address.state}/>
          </Grid>
        </Grid>
    )
}