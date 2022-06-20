import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import {products} from "../../data/ProductsData";
import {artists} from "../../data/ArtistsData";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ItemList from "../components/Item/ItemList";

const ArtistDetail = () => {
    // Get artist infos
    const {artistId} = useParams();
    let artistTest = artists.find(x => x.id === parseInt(artistId!))!;

    return (artistTest ?
            <>
                {/* Name */}
                <Typography variant="h3">
                    {artistTest.name}
                </Typography>

                <Divider/>

                {/* Description */}
                <Typography variant="body1" sx={{textAlign: "justify"}}>
                    {artistTest.description}
                </Typography>

                {/* Products */}
                <ItemList items={products} title={"Veja mais"}/>
            </> : <Loading/>
    );
};

export default ArtistDetail;
