import {getArtistesbyDate} from "../script/backend.mjs";
import {getScenes} from "../script/backend.mjs";
import {getArtistesbyName} from "../script/backend.mjs";

try {
    const records = await getArtistesbyDate();
    console.log(JSON.stringify(records, null, 2));
    } catch (e) {
    console.error(e);
}

try {
    const records = await getScenes();
    console.log(JSON.stringify(records, null, 2));
    } catch (e) {
    console.error(e);
}

try {
    const records = await getArtistesbyName();
    console.log(JSON.stringify(records,null,2));
    } catch(e) {
    console.error(e);
}