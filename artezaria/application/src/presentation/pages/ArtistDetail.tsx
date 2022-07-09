import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import {PRODUCTS} from "../../data/ProductsData";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ItemList from "../components/Item/ItemList";
import {USERS} from "../../data/UserData";
import {UserTypes} from "../../domain/User";

const ArtistDetail = () => {
    // Get artist infos
    const {artistId} = useParams();
    let artistTest = USERS.find(x => x._id === artistId && x.type === UserTypes.ARTIST)!;
    let artistProducts = PRODUCTS.filter(x => x.artist._id === artistTest._id)!;
    console.log(artistProducts);

    return (artistTest ?
            <>
                {/* Name */}
                <Typography variant="h3">
                    {artistTest.name} {artistTest.lastName}
                </Typography>

                <Divider sx={{marginBottom: 5}}/>

                {/* Description */}
                <Typography variant="body1" display="block" sx={{textAlign: "justify", whiteSpace: 'pre-line'}}>
                    {artistTest.description}
                </Typography>

                {/* Products */}
                <ItemList items={artistProducts} title={"Veja mais"}/>
            </> : <Loading/>
    );
};

export default ArtistDetail;
