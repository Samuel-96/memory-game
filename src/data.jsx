import Sans from "./assets/sans.webp"
import Papyrus from "./assets/papyrus.webp"
import Undyne from "./assets/undyne.webp"
import Flowey from "./assets/flowey.webp"
import Muffet from "./assets/muffet.webp"
import Asgore from "./assets/asgore.webp"
import Alphys from "./assets/alphys.webp"
import Gaster from "./assets/gaster.webp"
import Toriel from "./assets/toriel.webp"
import Metatron from "./assets/metatron.webp"
import Chara from "./assets/chara.webp"
import Dummy from "./assets/dummy.webp"
import Frisk from "./assets/frisk.webp"
import Napsta from "./assets/napstablook.webp"
import Doggo from "./assets/doggo.webp"
import Asriel from "./assets/asriel.webp"

export default function datosPersonajes(modoDificil){
    const datos = 
    [
        {
            id: 0,
            nombre: "Sans",
            url: Sans
        },

        {
            id: 1,
            nombre: "Papyrus",
            url: Papyrus
        },

        {
            id: 2,
            nombre: "Undyne",
            url: Undyne
        },

        {
            id: 3,
            nombre: "Flowey",
            url: Flowey
        },

        {
            id: 4,
            nombre: "Muffet",
            url: Muffet
        },

        {
            id: 5,
            nombre: "Asgore",
            url: Asgore
        },

        {
            id: 6,
            nombre: "Alphys",
            url: Alphys
        },

        {
            id: 7,
            nombre: "Gaster",
            url: Gaster
        },

        {
            id: 8,
            nombre: "Toriel",
            url: Toriel
        },

        {
            id: 9,
            nombre: "Metatron",
            url: Metatron
        },

        {
            id: 10,
            nombre: "Chara",
            url: Chara
        },

        {
            id: 11,
            nombre: "Dummy",
            url: Dummy
        },

        {
            id: 12,
            nombre: "Frisk",
            url: Frisk
        },

        {
            id: 13,
            nombre: "Napstablook",
            url: Napsta
        },

        {
            id: 14,
            nombre: "Doggo",
            url: Doggo
        },

        {
            id: 15,
            nombre: "Asriel",
            url: Asriel
        },
    ]

    return modoDificil !== "dificil" ? datos.slice(0, 8) : datos.slice(0, 16);
}