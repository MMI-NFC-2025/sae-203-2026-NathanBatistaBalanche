import PocketBase from 'pocketbase';
const pb = new PocketBase('https://jumelages-pb.nathan-batista-balanche.fr');

export async function getArtistesbyDate() {
    try {
        let data = await pb.collection('artistes').getFullList({
            sort: 'date_de_presentation',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getArtistesFilterdate(date) {
    try {
        let data = await pb.collection('artistes').getFullList({
            filter: `date = "${date}"`,
            sort: 'date_de_presentation',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getScenes() {
    try {
        let data = await pb.collection('scenes').getFullList({
            sort: 'nom',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getArtistesbyName() {
    try {
        let data = await pb.collection('artistes').getFullList({
            sort: 'nom',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getOneArtiste(id) {
    try {
        let data = await pb.collection('artistes').getOne(id);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getOneScene(id) {
    try {
        let data = await pb.collection('scenes').getOne(id);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getArtistesBySceneId(sceneId) {
    try {
        let data = await pb.collection('artistes').getFullList({
            filter: `scene = "${sceneId}"`,
            expand: 'scenes',
            sort: 'date_de_presentation',
        });
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getArtistesBySceneName(sceneName) {
    try {
        const scene = await pb.collection('scenes').getFirstListItem(`nom = "${sceneName}"`);
        if (!scene) return [];
        const tentatives = [
            `scene = "${scene.id}"`,
            `scenes ?= "${scene.id}"`,
            `"${scene.id}" = scenes`
        ];
        for (const filter of tentatives) {
            try {
                return await pb.collection('artistes').getFullList({
                    filter,
                    expand: 'scenes',
                    sort: 'date_de_presentation',
                });
            } catch (e) {
                console.log(`Filtre "${filter}" échoué:`, e.status);
                continue;
            }
        }
        console.log('Aucun filtre ne fonctionne - vérifiez la structure');
        return [];
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

export async function addNewArtiste(newArtiste) {
    await pb.collection('artistes').create(newArtiste);
}

export async function sendContactForm(formData) {
    await pb.collection('contactform').create(formData);
}

export async function addNewScene(newScene) {
    await pb.collection('scenes').create(newScene);
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}
