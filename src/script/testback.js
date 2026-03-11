import {getArtistesbyDate} from "../script/backend.mjs";
import {getScenes} from "../script/backend.mjs";
import {getArtistesbyName} from "../script/backend.mjs";
import {getOneArtiste} from "../script/backend.mjs";
import {getOneScene} from "../script/backend.mjs";
import {getArtistesBySceneId} from "../script/backend.mjs";
import {getArtistesBySceneName} from "../script/backend.mjs";
import { addNewArtiste } from "../script/backend.mjs";
import { addNewScene } from "../script/backend.mjs";

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

try {
    const records = await getOneArtiste("4b0du6nanz5nv3j");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const records = await getOneScene("aio84hzsz71bud9");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const records = await getArtistesBySceneId("aio84hzsz71bud9");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const records = await getArtistesBySceneName("Le Pont Rouge");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const newArtiste = {
        nom: 'Artiste Test',
        date_de_presentation: '2026-08-28 17:30:00',
        scene: 'aio84hzsz71bud9',
        description_courte: 'Description courte de l\'artiste test',
        description_longue: 'Description longue de l\'artiste test',
    };
    await addNewArtiste(newArtiste);
    } catch (e) {
        console.error('addNewArtiste failed',e);
    }

try {
    const newScene = {
        nom: 'Scene Test',
        description :' Description de la scène test',
    };
    await addNewScene(newScene);
    } catch (e) {
        console.error('addNewScene failed', e);
    }