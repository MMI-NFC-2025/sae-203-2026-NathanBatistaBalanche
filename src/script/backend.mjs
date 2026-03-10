import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

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