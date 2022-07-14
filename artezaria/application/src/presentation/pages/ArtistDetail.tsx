import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ItemList from "../components/Item/ItemList";
import {User} from "../../domain/User";
import {useEffect, useState} from "react";
import {getProductsByArtist} from "../../api/Product";
import {Product} from "../../domain/Product";
import {getUserByID} from "../../api/User";
import {useSnackbar} from "notistack";

const ArtistDetail = () => {
    // Get artist infos
    const {artistId} = useParams();
    let [artist, setArtist] = useState<User>();
    let [products, setProducts] = useState<Product[]>([]);
    const {enqueueSnackbar} = useSnackbar();

    // Reposiciona a tela
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Atualiza
    useEffect(() => {
        const fetchData = async () => {
            const res = await getUserByID(artistId!.toString());
            if (!res.user) return enqueueSnackbar(res.message, {
                variant: 'error'
            });

            setArtist(res.user);
            console.log(res.user);

            const res2 = await getProductsByArtist(artistId!.toString());

            setProducts(res2.products);
        }

        fetchData();
    }, [artistId, enqueueSnackbar]);

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
