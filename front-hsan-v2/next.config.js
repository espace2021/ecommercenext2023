/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["firebasestorage.googleapis.com","res.cloudinary.com","i.ibb.co","www.sauvaje.fr","jardipartage.b-cdn.net","meubletunisie.tn","a.cyphoma.net","sp-ao.shortpixel.ai","www.comme-chez-vous.fr","www.rona.ca","www.jardinsdenuit.fr","www.lamaison.tn","www.electrochaabani.com","fr.vidaxl.ch",""],
    },
        env: {
            API_URL: "http://localhost:3001"
        } 
}

module.exports = nextConfig
