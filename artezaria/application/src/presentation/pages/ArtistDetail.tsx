import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import {PRODUCTS} from "../../data/ProductsData";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ItemList from "../components/Item/ItemList";
import {USERS} from "../../data/UserData";
import {User, UserTypes} from "../../domain/User";
import {useEffect, useState} from "react";
import {findProduct, getProductsByArtist} from "../../api/Product";
import {Product} from "../../domain/Product";
import {getUserByID} from "../../api/User";
import {useSnackbar} from "notistack";

const ArtistDetail = () => {
    // Get artist infos
    const {artistId} = useParams();
    let [artist, setArtist] = useState<User>();
    let [products, setProducts] = useState<Product[]>([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getUserByID(artistId!.toString());
            if (!res.user) return enqueueSnackbar(res.message, {
                variant: 'error'
            });

            // console.log(res.user);
            setArtist(res.user);
            console.log(res.user);

            const res2 = await getProductsByArtist(artistId!.toString());

            // console.log(res2.products);
            setProducts(res2.products);
        }

        fetchData();
    }, [artistId, enqueueSnackbar]);

    // let artist = USERS.find(x => x._id === artistId && x.type === UserTypes.ARTIST)!;
    // let products = PRODUCTS.filter(x => x.artist._id === artist._id)!;
    // console.log(products);

    return (artist ?
            <>
                {/* Name */}
                <Typography variant="h3">
                    {artist.name} {artist.lastName}
                </Typography>

                <Divider sx={{marginBottom: 5}}/>

                {/* Description */}
                <Typography variant="body1" display="block" sx={{textAlign: "justify", whiteSpace: 'pre-line'}}>
                    {artist.description}
                </Typography>

                {/* Products */}
                <ItemList items={products} title={"Veja mais"}/>
            </> : <Loading/>
    );
};

export default ArtistDetail;
