import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import ItemDetail from "../components/Item/ItemDetail"
import {items} from "../../data/ProductsData";
import {artists} from "../../data/ArtistsData";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ItemList from "../components/Item/ItemList";

// import LoadingSpinner from '../ui/LoadingSpinner';
// import ItemDetail from './ItemDetail';
// import { db } from '../../firebase/config';
// import { doc, getDoc } from 'firebase/firestore';

const ArtistDetail = () => {
    const [artist, setArtist] = useState(null);
    const {artistId} = useParams();

    // useEffect(async () => {
    //     try {
    //         const docRef = doc(db, 'items', itemId);
    //         const docItem = await getDoc(docRef);
    //
    //         setItem({ id: docItem.id, ...docItem.data() });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, [itemId]);
    let artistTest = artists.find(x => x.id === parseInt(artistId!))!;

    return (artistTest ?
            <>
                <Typography variant="h3">
                    {artistTest.name}
                </Typography>

                <Divider/>

                <Typography variant="body1" sx={{textAlign: "justify"}}>
                    {artistTest.description}
                </Typography>

                <ItemList items={items} title={"Veja mais"}/>
            </> : <Loading/>
    );
};

export default ArtistDetail;
